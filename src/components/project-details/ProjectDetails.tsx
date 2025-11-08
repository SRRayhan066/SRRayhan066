import { ProjectType } from "../project-card/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";

interface ProjectDetailsProps {
  project: ProjectType;
  onBack: () => void;
}

export default function ProjectDetails({
  project,
  onBack,
}: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full h-full gradient-card rounded-xl p-6 relative"
    >
      <button
        onClick={onBack}
        className="absolute top-4 left-4 p-2 rounded-full gradient-card z-10 hover:scale-110 transition-transform"
      >
        <IoArrowBack className="text-xl" />
      </button>

      <div className="w-full h-full flex flex-col gap-6 overflow-y-auto scrollbar-none">
        <div className="relative w-full h-60 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            {project.date && (
              <span className="text-sm text-neutral-400">{project.date}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full border border-neutral-700 bg-neutral-800/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          {project.description && (
            <p className="text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Project Link */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 gradient-card rounded-lg hover:scale-105 transition-transform"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
