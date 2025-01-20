"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";

// Interfaces for TypeScript
interface Cover {
  url: string;
}

interface Category {
  name: string;
}

interface Post {
  slug: string;
  title: string;
  description: string;
  image:string;
  category: Category;
  published_at: string;
  cover?:string
}

interface Pagination {
  pageCount: number;
}

async function getPosts(): Promise<Post[]> {
  const response = await directus.request(
    readItems('posts', {
      fields: ['*'],
      sort: ['-published_at'],
    })
  );
  
  return response as Post[];
}


const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQuery = searchParams.get("search") ?? "";
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam) : 1;

  useEffect(() => {
        const fetchPosts = async () => {
          try {
            setLoading(true);
    
            // Fetch posts
            const fetchedPosts = await getPosts();
    
            setPosts(fetchedPosts);
    
            // Assuming total pages are known or hardcoded for now
            setTotalPages(5); // Update dynamically when pagination is implemented
          } catch (error) {
            setError("Error fetching posts.");
            console.error("Error fetching posts:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchPosts();
      }, [currentPage, searchQuery]);

  

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Latest updates and insights from our team.`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {posts && posts.length > 0 ? (
  posts.slice(0, 3).map((post, index) => (
    <div className="h-full">
      <BlogItem post={post} />
    </div>
  ))
) : (
  <div className="col-span-full text-center text-gray-500">
    No blog posts found.
  </div>
)}
        </div>
      </div>
    </section>
  );
};

export default Blog;