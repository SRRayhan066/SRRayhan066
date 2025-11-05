import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({
  title,
  image,
  tags,
  url,
}: {
  title: string;
  image: string;
  tags: string[];
  url: string;
}) {
  return (
    <motion.div
      className="w-72 h-80 gradient-card rounded-xl overflow-hidden group cursor-pointer flex flex-col"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-neutral-100 mb-3">{title}</h3>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-neutral-700/50 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
