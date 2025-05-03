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
        className="group w-full flex flex-col sm:flex-row items-start gap-6 py-10 cursor-pointer hover:opacity-90 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image */}
        <div className="relative w-full sm:w-[220px] h-[140px] sm:h-[180px] rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg "
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex-grow pb-6 px-15">
          <span className="text-xs font-semibold font-inter text-gray-500">{tag}:</span>
          <h2 className="lg:text-xl text-lg font-bold mb-1 text-[#00BFA5]">{title}</h2>
          <div className="text-sm sm:text-base font-inter text-gray-600 truncate-multiline line-clamp-2">
            <PortableText value={body} />
          </div>
          <h3 className="text-xs text-gray-400">{date}</h3>
        </div>
      </motion.div>
    </Link>
  );
}
