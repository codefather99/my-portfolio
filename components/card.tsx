import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  image: string;
  link: string;
  linktext: string
};

export default function Card({ title, image, link, linktext }: CardProps) {
  return (
    <Link href={link} passHref>
    <motion.div
      className="w-full max-w-s mx-auto  rounded-2xl overflow-hidden shadow-lg bg-white  cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
      }}
    >
      <div className="relative w-full flex item-center justify-center h-48 bg-gray-100">
        <Image
          src={image}
          alt={title}
          width={150}         // or whatever size you prefer
          height={150}
          className="object-contain"
          
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg text-[#0A192F]  font-semibold text-black ">
          {title}
          <br />
        </h2>
        <h3 className="font-inter text-sm text-[#00BFA5]">
        {linktext}
        </h3>
      </div>
    </motion.div>
    </Link>
  );
}
