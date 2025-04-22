// app/shelf/[slug]/page.tsx

import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

// Correct type for the params in Next.js 13+ dynamic route
interface PageProps {
  params: {
    slug: string;
  };
}

// Using the async function for fetching dynamic data, if necessary
export default function BlogPostPage({ params }: PageProps) {
  const { slug } = params;  // params is directly available here

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto">
      <div className="border-b w-4/5 border-gray-300 my-5">
        <h3 className="font-inter text-sm mb-3 text-gray-500">{post.date}</h3>
      </div>
      <div>
        <h1 className="lg:text-4xl text-3xl font-bold font-space-grotesk mb-6 text-[#00BFA5]">
          {post.title}
        </h1>
        <p className="lg:text-sm text-xs text-neutral-500 mb-2">Series: {post.tag}</p>
        <p className="lg:text-lg text-sm leading-relaxed text-black">
          {post.description}
        </p>
      </div>
    </div>
  );
}

// Static generation for dynamic params
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
