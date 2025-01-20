"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";

async function getPosts() {
  const response = await directus.request(
    readItems('posts', {
      fields: ['title', 'published_at', 'slug'],
      sort: ['-published_at'],
    })
  );
  
  return response;
}

const ArticleStyle = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQuery = searchParams.get("search") ?? "";
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  useEffect(() => {
    const fetchPosts = async (page) => {
      try {
        const fetchedPosts = await getPosts();

        setPosts(fetchedPosts);
        // setTotalPages(pagination.pageCount);
      } catch (error) {
        setError("Error fetching posts.");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts(currentPage);
  }, [currentPage, searchQuery]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",

    };
    return date.toLocaleString("en-US", options);
  };
  if (loading) {
    return (
      <div className="text-center">
    
  </div>
    );
  }
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle("dark", !darkMode); // Toggle dark mode class on the root element
  // };

  return (
    <div className={`explorepage p-4 ${darkMode ? 'dark' : ''}`}>
      <div className="projectlistb projectlistc">
      <div className='text-sm font-semibold mb-3'>Recent Articles</div>

        {/* Button to toggle dark mode */}
        {/* <button
          className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button> */}

        {/* Tailwind Grid Layout for Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts &&
            posts.slice(0, 3).map((post, index) => ( // Show only the first 3 posts
              <div className="bg-white dark:bg-zinc-900 dark:text-white shadow-md rounded overflow-hidden border border-zinc-300 dark:border-zinc-800" key={index}>
                <div className="p-4">
                  <div className="content">
                    <ul className="flex space-x-4 text-sm text-gray-500 dark:text-gray-300 mb-3">
                      <li className="flex items-center space-x-2 text-xs">
                        <i className="fa-sharp fa-regular fa-calendar-days"></i>
                        <span>{formatDate(post.published_at)}</span>
                      </li>
                      <li className="separator"></li>
                      <li className="category-meta">
                        <span className="text-emerald-500 dark:text-emerald-400">
                          {/* {post.category.name} */}
                        </span>
                      </li>
                    </ul>
                    <h4 className="title text-sm font-bold mb-2">
                      <Link href={`/articles/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <a
                      className="text-emerald-500 text-xs flex items-center space-x-1 dark:text-emerald-400"
                      href={`/articles/${post.slug}`}
                    >
                      <span>Read More</span>
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleStyle;
