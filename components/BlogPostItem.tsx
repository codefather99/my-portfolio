"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

type BlogPostItemProps = {
  title: string;
  date: string;
  body: PortableTextBlock[]; 
  image: string;
  tag: string;
  slug: string;
};

export default function BlogPostItem({
  title,
  date,
  body,
  image,
  tag,
  slug,
}: BlogPostItemProps) {
  return (
    <Link href={`/shelf/${slug}`}>
      <motion.div
        className="group w-full flex items-start gap-6 py-10 cursor-pointer hover:opacity-90 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative min-w-[220px] h-[140px] rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex-1 pb-6">
          <span className="text-xs font-semibold font-inter  text-gray-500">{tag}:</span>
          <h2 className="text-xl font-bold mb-1 text-[#00BFA5]">{title}</h2>
          <div className="text-sm font-inter text-gray-600 line-clamp-2"> <PortableText value={body}/> </div> 
          <h3 className="text-xs text-gray-400">{date}</h3>
        </div>
      </motion.div>
    </Link>
  );
}
