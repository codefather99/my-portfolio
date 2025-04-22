"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type BlogPostItemProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  tag: string;
  slug: string;
};

export default function BlogPostItem({ title,date, description, image, tag, slug }: BlogPostItemProps) {
  return (
    <Link href={`/shelf/${slug}`}>
      <motion.div
        className="group w-full flex items-start gap-6 py-10 cursor-pointer hover:opacity-90 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative min-w-[220px] h-[140px] rounded-lg overflow-hidden ">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex-1 border-neutral-300 dark:border-neutral-700 pb-6">
          <span className="lg:text-xs text-[0.625rem] leading-3 font-semibold uppercase font-inter text-gray-500">{tag}:</span>
          <h2 className="lg:text-xl text-lg font-space-grotesk font-bold mb-1 text-[#00BFA5]">{title}</h2>
          <p className="lg:text-sm text-xs text-black-600 font-inter line-clamp-2">
            {description}
          </p>
          <h3 className="font-inter lg:text-sm text-xs text-gray-400">{date}</h3>
        </div>
      </motion.div>
    </Link>
  );
}
