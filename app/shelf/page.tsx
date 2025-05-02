
import { type SanityDocument } from "next-sanity";

import BlogPostItem from "@/components/BlogPostItem";

import { client } from "@/src/sanity/client";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
] | order(publishedAt desc)[0...12] {
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  body,
  tag,
  "date": publishedAt
}`;

export default async function ShelfPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-[#0A192F] text-center">My Shelf</h1>
      
      <div className="flex flex-col flex-grow overflow-x-hidden divide-y divide-neutral-300 dark:divide-neutral-700">
        {posts.map((post) => (
          <BlogPostItem
            key={post._id}
            title={post.title}
            date={new Date(post.date).toLocaleDateString()} // format nicely
            body={post.body}
            image={post.image}
            tag={post.tag}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
