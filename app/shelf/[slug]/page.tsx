import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";

type Props = {
  params: {
    slug: string;
  };
};

// Mark the component as async to await params
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;  // Await params
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto">
      <div className="border-b w-4/5 border-gray-300 my-5 ">
        <h3 className="font-inter text-sm mb-3 text-gray-500 ">{post.date}</h3>
      </div>
      <div>
        <h1 className="lg:text-4xl text-3xl font-bold font-space-grotesk mb-6 text-[#00BFA5]">{post.title}</h1>
        <p className="lg:text-sm text-xs text-neutral-500 mb-2">Series: {post.tag}</p>
        <p className="lg:text-lg text-sm leading-relaxed text-black">
          {post.description}
        </p>
      </div>
    </div>
  );
}
