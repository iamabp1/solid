'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { readItems } from '@directus/sdk';
import directus from "@/lib/directus";
import Image from "next/image";

// Shared scrollbar logic
const useScrollInfo = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateScrollInfo = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        setMaxScroll(maxScrollLeft);
        setScrollPosition(container.scrollLeft);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollInfo);
      updateScrollInfo();
      window.addEventListener('resize', updateScrollInfo);

      return () => {
        container.removeEventListener('scroll', updateScrollInfo);
        window.removeEventListener('resize', updateScrollInfo);
      };
    }
  }, []);

  return { scrollContainerRef, scrollPosition, maxScroll };
};

// Shared date formatting
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

// Fetch audits
async function fetchAudits() {
  try {
    const audits = await directus.request(
      readItems('audits', {
        fields: ['name', 'logo', 'slug', 'score', 'auditedAt', 'upcoming'],
        sort: ['-auditedAt'], // Sort by audit date descending
      })
    );
    return audits;
  } catch (error) {
    console.error('Error fetching audits:', error);
    return [];
  }
}

// Fetch KYCs
async function fetchKycs() {
  try {
    const kycs = await directus.request(
      readItems('kycs', {
        fields: ['name', 'logo', 'slug', 'kycAt'],
        sort: ['-kycAt'], // Sort by KYC date descending
      })
    );
    return kycs;
  } catch (error) {
    console.error('Error fetching KYCs:', error);
    return [];
  }
}

// Recent Projects Component
const RecentProjects = () => {
  const { scrollContainerRef } = useScrollInfo();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchAudits();
      const recentProjects = fetchedProjects.filter(project => project.upcoming === false);

      setProjects(recentProjects);
      setLoading(false); // Stop loading after data is fetched

    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="text-center">
    
  </div>
    );
  }
  return (
    <div className="explorepage explorea">
      <div className="projectlistb projectlistc">
        <div className="text-sm font-semibold pl-4 mb-3">Recent Audited</div>
        <div ref={scrollContainerRef} className="exploreprojecta exploreprojectb">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {projects.slice(0, 8).map((project) => (
              <div key={project.slug} className="border p-4 bg-whiteho dark:bg-blackho rounded dark:border-zinc-700">
                <Link href={`/audits/${project.slug}`}>
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0 h-9 w-9">
                      {project.logo && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${project.logo}`}
                          alt={project.name}
                          fill
                          unoptimized
                          className="w-full rounded-2xl object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[12px] font-semibold">{project.name}</h4>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-sm font-medium">
                      <span>{project.score}%</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span>{formatDate(project.auditedAt)}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Upcoming Projects Component
const UpcomingProjects = () => {
  const { scrollContainerRef } = useScrollInfo();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const fetchedProjects = await fetchAudits();

      // Filter projects that are upcoming
      const upcomingProjects = fetchedProjects.filter((project) => project.upcoming === true);

      setProjects(upcomingProjects);
      setLoading(false); // Stop loading after data is fetched
    };
    fetchData();
  }, []);

  // Show spinner while loading
  if (loading) {
    return (
      <div className="text-center">
      <div role="status">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-emerald-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>
  </div>
    );
  }

  // If there are no upcoming projects, return null to render nothing
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="explorepage explorea">
      <div className="projectlistb projectlistc">
        <div className="text-sm font-semibold pl-4 mb-3">Upcoming Projects</div>
        <div ref={scrollContainerRef} className="exploreprojecta exploreprojectb">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {projects.map((project) => (
              <div key={project.slug} className="border p-4 bg-whiteho dark:bg-blackho rounded dark:border-zinc-700">
                <Link href={`/audits/${project.slug}`}>
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-shrink-0 h-9 w-9">
                      {project.logo && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${project.logo}`}
                          alt={project.name}
                          fill
                          unoptimized
                          className="aspect-[3/2] w-full rounded-2xl object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[12px] font-semibold">{project.name}</h4>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-sm font-medium">
                      <span>{project.score}%</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span>{formatDate(project.auditedAt)}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProjects;


// KYC Projects Component
const KycProjects = () => {
  const { scrollContainerRef } = useScrollInfo();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchKycs();
      setProjects(fetchedProjects);
      setLoading(false); // Stop loading after data is fetched

    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="text-center">
    
  </div>
    );
  }
  return (
    <div className="explorepage explorea">

      <div className="projectlistb projectlistc">

        <div className="text-sm font-semibold pl-4 mb-3">KYC Projects</div>
        <div ref={scrollContainerRef} className="exploreprojecta exploreprojectb">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            
            {projects.map((project) => (
              <div key={project.slug} className="border p-4 bg-cover bg-whiteho dark:bg-blackho rounded dark:border-zinc-700" style={{ backgroundImage: 'url(images/verify1.png)' }}>

                <Link href={`/kyc/${project.slug}`}>
                  <div className="flex items-center space-x-4">
                    
                    <div className="flex-grow">
                      <h4 className="text-[12px] font-bold">{project.name}</h4>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-sm font-medium">
                      <span>{formatDate(project.kycAt)}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { RecentProjects, UpcomingProjects, KycProjects };