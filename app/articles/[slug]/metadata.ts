import { Metadata, ResolvingMetadata } from 'next';
import directus from "@/lib/directus";
import { readItems } from '@directus/sdk';

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
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Codeum Smart Contract Audit`,
    description: post.description || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.image}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
