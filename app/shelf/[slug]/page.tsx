// app/shelf/[slug]/page.tsx

import { PortableText, type SanityDocument } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/src/sanity/client";
import Link from "next/link";

// // Define PageProps for the params, where `slug` is a string
// interface PageProps {
//   params: {
//     slug: string; // single string for the slug
//   };
// }

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

// const { projectId, dataset } = client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

const options = { next: { revalidate: 30 } };

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  // const postImageUrl = post.image
  //   ? urlFor(post.image)?.width(550).height(310).url()
  //   : null;

  return (
    <div className="min-h-screen py-16 px-4 max-w-3xl mx-auto">
    <Link href="/shelf" className="hover:underline text-l font-semibold font-inter mb-1 text-[#00BFA5]">
        ← Back to shelf
      </Link>
      
      {/* {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )} */}
   
      <div className="border-b w-4/5 border-gray-300 my-5">
        <h3 className="font-inter text-sm mb-3 text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</h3>
      </div>
      <div>
        <h1 className="lg:text-4xl text-3xl font-bold font-space-grotesk mb-2 text-[#00BFA5]">
          {post.title}
        </h1>
        
        <p className="lg:text-sm font-inter text-xs text-neutral-500 mb-2">Series: {post.tag}</p>
        <div className=" font-inter leading-relaxed">
        
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
      </div>
    </div>
  );
}

