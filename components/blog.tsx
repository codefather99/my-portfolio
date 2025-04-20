"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type BlogPostItemProps = {
  title: string;
  description: string;
  image: string;
  tag: string;
  slug: string;
};

export default function BlogPostItem({ title, description, image, tag, slug }: BlogPostItemProps) {
  return (
    <Link href={`/shelf/${slug}`}>
      <motion.div
        className="group w-full flex items-start gap-6 py-10 cursor-pointer hover:opacity-90 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative min-w-[220px] h-[140px] rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 border-neutral-300 dark:border-neutral-700 pb-6">
          <span className="text-xs font-semibold uppercase text-blue-500">{tag}</span>
          <h2 className="text-xl font-bold mb-1">{title}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
