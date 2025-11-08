import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectType } from "./types";

export default function Project({
  title,
  image,
  tags,
  description,
}: ProjectType) {
  return (
    <motion.div
      className="w-72 h-80 gradient-card rounded-xl overflow-hidden group cursor-pointer flex flex-col"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full h-40 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-100 mb-3">
            {title}
          </h3>
          <p className="text-sm text-neutral-400 mb-4 line-clamp-1">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
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
