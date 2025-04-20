"use client";
import BlogPostItem from "@/components/blog";
import { blogPosts } from "@/data/blogData";
import Footer from "@/components/footer";

export default function ShelfPage() {
  return (
    
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">Shelf</h1>
      <div className="flex flex-col divide-y divide-neutral-300 dark:divide-neutral-700">
        {blogPosts.map((post) => (
          <BlogPostItem
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            tag={post.tag}
            slug={post.slug}
          />
        ))}
      </div>

      
    </div>
    
  );
}
