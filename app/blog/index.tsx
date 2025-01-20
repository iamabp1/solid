"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import directus from "@/lib/directus";
import { readItems } from '@directus/sdk';

interface Cover {
  url: string;
}

interface Category {
  name: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
  slug: string;
  published_at: string;

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

const POSTS_PER_PAGE = 3;

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setDisplayedPosts(fetchedPosts.slice(0, POSTS_PER_PAGE));
        setHasMore(fetchedPosts.length > POSTS_PER_PAGE);
      } catch (error) {
        setError("Error fetching posts.");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [searchQuery]);

  const handleLoadMore = () => {
    const currentLength = displayedPosts.length;
    const nextPosts = posts.slice(
      currentLength,
      currentLength + POSTS_PER_PAGE
    );
    setDisplayedPosts([...displayedPosts, ...nextPosts]);
    setHasMore(currentLength + POSTS_PER_PAGE < posts.length);
  };

  if (loading) {
    return (
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10 mt-15 xl:mt-20">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-64 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 text-center">
          <div className="text-red-500 mb-4">{error}</div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
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
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {displayedPosts && displayedPosts.length > 0 ? (
              displayedPosts.map((post: Post) => (
                <div>
                  <BlogItem post={post} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No blog posts found.
              </div>
            )}
          </div>
          
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                Load More Posts
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;