'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Project/Sidebar';
import ProjectList from '@/components/Project/ProjectList';
import Pagination from '@/components/StyleGuide/StyleSections/Pagination';
import AuditTable from "@/components/Project/auditTable";
import { RecentProjects, UpcomingProjects, KycProjects } from '@/components/Project/ProjectExplorer';
import ArticleStyle from '@/components/Services/ArticleStyle';
import directus from "@/lib/directus";
import { readItems } from '@directus/sdk';
import './auditcss.css';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeNetwork, setActiveNetwork] = useState(null);

  

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="mx-auto max-w-[1400px] pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-black/5 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-300/5">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      <div className="container mx-auto">
        <main className="page-wrapper">
          <div className="rbt-style-guide-area rainbow-section-gap-big">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/6 border-r dark:border-[#222222] pr-4">
                  <Sidebar
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    activeNetwork={activeNetwork}
                    setActiveNetwork={setActiveNetwork}
                  />
                </div>
                <div className="w-full md:w-5/6">
                  { activeNetwork ? (
                    <AuditTable activeNetwork={activeNetwork}  />
                  ) : activeCategory ? (
                    <>
                      <ProjectList activeCategory={activeCategory} />
                     
                    </>
                  ) : (
                    <div>
                      <UpcomingProjects />
                      <RecentProjects />
                      <KycProjects />
                      <ArticleStyle />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProjectsPage;