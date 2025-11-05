"use client";

import Project from "@/components/project-card/Project";
import ProjectDetails from "@/components/project-details/ProjectDetails";
import ContentWrapper from "@/wrapper/ContentWrapper";
import { projects } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ProjectType } from "@/components/project-card/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <ContentWrapper className="col-start-5 col-span-7 row-start-7 row-span-6 flex flex-col items-center gap-6 overflow-hidden">
      {!selectedProject && (
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          Projects
        </motion.h1>
      )}{" "}
      <div className="flex-1 w-full relative">
        <AnimatePresence mode="wait" initial={false}>
          {selectedProject ? (
            <motion.div
              key="details"
              className="w-full h-full absolute inset-0"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <ProjectDetails
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="carousel"
              className="w-full absolute inset-0 overflow-hidden cursor-grab active:cursor-grabbing"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <motion.div
                ref={carousel}
                className="flex gap-6 py-4"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 0 }}
                animate={{
                  x: [-width, 0],
                  transition: {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 80,
                      ease: "linear",
                    },
                  },
                }}
                whileTap={{ cursor: "grabbing" }}
              >
                {duplicatedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="shrink-0"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Project {...project} />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ContentWrapper>
  );
}
