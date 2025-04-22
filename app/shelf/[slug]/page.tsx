// app/shelf/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

// Define PageProps for the params, where `slug` is a string
interface PageProps {
  params: {
    slug: string; // single string for the slug
  };
}

// This is an async function that gets params from the dynamic route
export default async function BlogPostPage({ params }: PageProps) {
  let slug: string;

  // Handle async params with then, catch, and finally
  await Promise.resolve(params)
    .then((resolvedParams) => {
      slug = resolvedParams.slug; // Resolving the slug
    })
    .catch((error) => {
      console.error("Error resolving params:", error);
      return notFound(); // Return a 404 if there's an issue
    })
    .finally(() => {
      // Any cleanup if necessary
      console.log("Finished resolving params.");
    });

  // Find the blog post based on the slug
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

// Static generation for dynamic params (slug)
export async function generateStaticParams() {
  // Return an array of objects with a slug key
  return blogPosts.map((post) => ({
    slug: post.slug, // Ensure slug is passed correctly as a string
  }));
}
