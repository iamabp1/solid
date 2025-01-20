'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Pagination from '@/components/StyleGuide/StyleSections/Pagination';
import { readItems, aggregate } from '@directus/sdk';
import directus from "@/lib/directus";
import { get } from 'http';


const getTotalAuditCount = async (category) => {
  // Determine the filter based on the category
  const filter =
    category?.toLowerCase() === 'all' || !category
      ? {} // No filter for "all" or empty category
      : { category: { _contains: category } }; // Apply filter for specific category

  try {
    // Fetch total count of audits with the filter applied
    const totalCount = await directus.request(
      aggregate('audits', {
        aggregate: {
          count: '*',
        },
        query: {
          filter, // Pass the filter directly inside query
        },
      })
    );

    // Return the count from the response
    return totalCount[0].count;
  } catch (error) {
    console.error('Error fetching total audit count:', error);
    return 0; // Return 0 on error
  }
};
async function getCatAudits(category, currentPage, itemsPerPage) {
  const filter = category?.toLowerCase() === 'all' || !category
    ? {}
    : { filter: { category: { _contains: category } } };

  const offset = (currentPage - 1) * itemsPerPage;

  return await directus.request(
    readItems('audits', {
      fields: ['name', 'logo', 'category', 'network', 'slug', "auditedAt", "score"],
      sort: ['-auditedAt'],
      limit: itemsPerPage,
      offset,
      ...filter,
    })
  );
}

const ProjectList = ({ activeCategory }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const ITEMS_PER_PAGE = 12; // Set items per page

  useEffect(() => {
    const fetchAudits = async () => {
      setLoading(true);
      try {
        const data = await getCatAudits(activeCategory, currentPage, ITEMS_PER_PAGE);
        const processedData = data.map(item => ({
          ...item,
          category: Array.isArray(item.category) ? item.category : [item.category || 'Unknown'],
        }));
        setProjects(processedData);

        const totalCount = await getTotalAuditCount(activeCategory);
        // console.log('Total audit count:', totalCount);
        setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));
      } catch (error) {
        console.error('Error fetching audits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAudits();
  }, [activeCategory, currentPage]); // Refetch data on category or page change

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <div className="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-emerald-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.slug}
              className="border p-4 bg-whiteho dark:bg-blackho rounded dark:border-zinc-700"
            >
              <Link href={`/audits/${project.slug}`}>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-shrink-0 h-9 w-9">
                    {project.logo && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${project.logo}`}
                        alt="Project Logo"
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold">{project.name}</h4>
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
          ))
        )}
      </div>

      {/* Pagination */}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ProjectList;