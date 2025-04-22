// app/shelf/[slug]/page.tsx

import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

interface pageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: pageProps) {
  // Ensure params is awaited if it's a promise
  const { slug } = await params; // Awaiting params here if needed

  const post = blogPosts.find((p) => p.slug === slug);  // No await here on .find() as it's synchronous

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

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
