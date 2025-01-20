export const dynamic = 'force-dynamic';
import SingleAuditPage from "./index";
import { getAuditBySlug } from "@/lib/api2";
import { readItems } from '@directus/sdk';
import { notFound } from 'next/navigation';

import directus from "@/lib/directus";
// Generate dynamic metadata
async function getPost(slug) {
  try {
    const post = await directus.request(
      readItems('audits', {
        filter: { slug: { _eq: slug } },
        fields: ['*'],
        limit: 1,
        cache: 'no-store', // Disable caching
      })
    );
    return post?.[0] ?? null;
  } catch (error) {
    console.error('Error fetching post:', error);
    notFound();
  }
}
export async function generateMetadata({ params }) {
  try {
    const post = await getPost(params.slug);
    
    return {
      title: `${post.name} Audit Report | Codeum`,
      description: post.name || `Smart contract security audit report for ${post.name}`,
      openGraph: {
        title: `${post.name} | Audit Report`,
        description: post.name || `Smart contract security audit report for ${post.name}`,
        images: [{
          url: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.logo}`,
          width: 1200,
          height: 630,
        }],
      },
      twitter: {
        title: `${post.name} | Audit Report`,
        description: post.name || `Smart contract security audit report for ${post.name}`,
      }
    };
  } catch (error) {
    console.error('Error fetching audit metadata:', error);
    return {
      title: 'Audit Report',
      description: 'Smart contract security audit report',
    };
  }
}

 async function SingleAuditPageLayout  ({ params }) {
  const post = await getPost(params.slug);
  return (
    <>
      <SingleAuditPage post={post} />
      {/* <BackToTop /> */}
    </>
  );
};

export default SingleAuditPageLayout;
