import BlogPage from "./index";

export const metadata = {
  title: `NEWS & BLOGS | Codeum`,
  subtitle: `Latest News & Blogs`,
  description: `Latest updates and insights from our team.`,
  openGraph: {
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    images: [
      {
        url: "https://codeum.org/images/codeum-ogg.png",
        alt: "Codeum Smart Contract Audit",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://codeum.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    images: "https://codeum.org/images/codeum-ogg.png",
  },
};

const BlogLayout = () => {
  return (
    <>
      <BlogPage />
    </>
  );
};

export default BlogLayout;
