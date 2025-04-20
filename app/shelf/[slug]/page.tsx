// app/shelf/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-sm text-neutral-500 mb-2">Tag: {post.tag}</p>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
        {post.description}
      </p>
    </div>
  );
}
