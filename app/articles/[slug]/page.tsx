
import Link from "next/link";
import Image from "next/image";
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';
import directus from "@/lib/directus";
import { Metadata, ResolvingMetadata } from 'next';
import "./style.css"
// Types
interface Post {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  category: Category;
  slug: string;
  author: Author;
  content: any;
  image: string;
  published_at: string;
}

interface Category {
  name: string;
  slug: string;
}

interface Author {
  name: string;
  image: string;
}

// Utility Functions
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

async function getPost(slug: string) {
  try {
    const post = await directus.request(
      readItems('posts', {
        filter: { slug: { _eq: slug } },
        fields: ['*'],
        limit: 1
      })
    );
    return post?.[0] ?? null;
  } catch (error) {
    notFound();
  }
}

// Generate metadata
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  return {
    title: `${post.title} | Codeum Smart Contract Audit`,
    description: post.description || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      images: [{
        url: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.image}`,
        width: 1200,
        height: 630,
      }],
    },
  };
}


export default async function BlogPost({ params }: { params: { slug: string }}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link 
        href="/blog"
        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-8"
      >
        <ChevronLeftIcon className="w-4 h-4 mr-1" />
        Back to Blog
      </Link>

      {/* Hero Section */}
      <div className="relative aspect-[2/1] mb-8 overflow-hidden rounded-xl">
        <Image
          src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.image}`}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Meta Information */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <time dateTime={post.published_at}>
            {formatDate(post.published_at)}
          </time>
          {post.category && (
            <>
              <span>•</span>
              <span>{post.category}</span>
            </>
          )}
         
        </div>
      </div>

      {/* Content */}
      <div className="blogpost prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Share Section */}
      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Share this article
          </div>
          <div className="flex space-x-4">
            {/* Add your social share buttons here */}
            <button className="text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors">
              Twitter
            </button>
            <button className="text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </article>
    </section>
  );
}