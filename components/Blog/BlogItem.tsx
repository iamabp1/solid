'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Post {
  title: string;
  description: string;
  category?: {
    name: string;
  };
  slug: string;
  image: string;
  published_at: string;
}

interface BlogItemProps {
  post: Post;
}

const truncateText = (text: string, maxLength: number = 155): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogItem: React.FC<BlogItemProps> = ({ post }) => {
  return (
    <div className="group h-full flex flex-col rounded-3xl bg-white dark:bg-zinc-800 dark:border-zinc-700 border p-2 shadow-md shadow-black/5 ring-1 ring-black/5">
      <Link 
        href={`/articles/${post.slug}`}
        className="relative block aspect-[3/2] overflow-hidden rounded-2xl"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post?.image}`}
          alt={post.title}
          width={413}
          height={281}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-col flex-grow p-4">
        <div className="mb-3">
          <Link 
            href={`/articles/${post.slug}`}
            className="text-base font-medium line-clamp-2 hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-3 flex-grow mb-4">
          {truncateText(post.description)}
        </p>

        <div className="border-t dark:border-zinc-700 pt-4 mt-auto flex items-center justify-between">
          <time className="text-sm text-gray-500">
            {formatDate(post.published_at)}
          </time>
          
          <Link 
            href={`/articles/${post.slug}`}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;