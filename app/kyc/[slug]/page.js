export const dynamic = 'force-dynamic';
import KycClient from './KycClient';
import { Metadata } from 'next';
import directus from "@/lib/directus";
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';

async function getPost(slug) {
  try {
    const post = await directus.request(
      readItems('kycs', {
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

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'KYC Not Found',
      description: 'The requested KYC verification could not be found.'
    };
  }

  return {
    title: `${post.name} KYC Verification`,
    description: `KYC verification details for ${post.name}. Verified members: ${post.members}. Verification date: ${new Date(post.kycAt).toLocaleDateString()}`,
    openGraph: {
      title: `${post.name} KYC Verification`,
      description: `KYC verification details for ${post.name}. Verified members: ${post.members}.`,
      images: post.certificate ? [`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.certificate}`] : [],
    },
    twitter: {
      card: 'summary',
      title: `${post.name} KYC Verification`,
      description: `KYC verification details for ${post.name}. Verified members: ${post.members}.`,
      images: post.certificate ? [`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.certificate}`] : [],
    }
  };
}

export default async function Page({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return <KycClient post={post} />;
}