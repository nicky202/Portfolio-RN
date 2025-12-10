"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ImgPortfolio from "@/public/images/projects/portfolio.png";
import ImgPortfolio1 from "@/public/images/projects/portfolio1.png";
import ImgLaf from "@/public/images/projects/laf.png";
import ImgLaf2 from "@/public/images/projects/laf2.png";
import ImgLaf3 from "@/public/images/projects/laf3.png";
import ImgPureControl from "@/public/images/projects/purecontrol.png";
import ImgPureControl2 from "@/public/images/projects/purecontrol2.png";
import ImgPureControl3 from "@/public/images/projects/purecontrol3.png";
import { useTranslation } from "react-i18next";

const staticProjectData = [
  {
    tech: ["React", "TypeScript", "Django", "PostgreSQL", "Docker", "Celery"],
    image: ImgPureControl3,
    images: [ImgPureControl, ImgPureControl2, ImgPureControl3],
  },
  {
    tech: ["React.js", "Django", "PostgreSQL", "Docker", "Celery", "Redis"],
    image: ImgLaf,
    images: [ImgLaf2, ImgLaf, ImgLaf3],
  },
  {
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: ImgPortfolio,
    images: [ImgPortfolio, ImgPortfolio1],
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const translatedProjects = (t("projects.items", { returnObjects: true }) as any[]).map((item, index) => ({
    ...item,
    ...staticProjectData[index],
  }));

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
    setCurrentImageIndex(0);
  };

  const selectedProject = selectedProjectIndex !== null ? translatedProjects[selectedProjectIndex] : null;

  // Project carousel navigation
  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === translatedProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? translatedProjects.length - 1 : prev - 1
    );
  };

  // Modal image carousel navigation
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t("projects.title")}</span>
            </h2>
            <p className="text-foreground/60">{t("projects.subtitle")}</p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {translatedProjects.map((project, index) => (
                index === currentProjectIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                  >
                    {/* Project Info */}
                    <div className="flex-1 space-y-6">
                      <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>

                      <div className="glass-panel rounded-xl text-foreground/80 leading-relaxed shadow-lg p-10">
                        {project.description}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string) => (
                          <span
                            key={tech}
                            className="bg-background/50 backdrop-blur-sm border border-foreground/10 px-3 py-1.5 rounded-full text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Project Image */}
                    <div
                      className="w-full flex-1 relative group cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <div className="relative h-[300px] w-full rounded-xl overflow-hidden border border-foreground/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      {/* Decorative background element */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl -z-10 rounded-xl" />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background/80 hover:bg-background border border-foreground/10 text-foreground p-4 rounded-full transition-all backdrop-blur-sm shadow-xl hover:scale-110 z-20"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background/80 hover:bg-background border border-foreground/10 text-foreground p-4 rounded-full transition-all backdrop-blur-sm shadow-xl hover:scale-110 z-20"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {translatedProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`transition-all ${index === currentProjectIndex
                    ? "w-12 h-3 bg-gradient-to-r from-primary to-accent rounded-full"
                    : "w-3 h-3 bg-foreground/20 hover:bg-foreground/40 rounded-full"
                    }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal/Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-background rounded-2xl overflow-hidden border border-foreground/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-foreground/10">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="relative w-full h-[60vh] bg-black/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </>
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <div className="p-4 bg-black/20 border-t border-foreground/10">
                  <div className="flex gap-2 justify-center overflow-x-auto">
                    {selectedProject.images.map((img: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                          ? "border-primary"
                          : "border-transparent opacity-50 hover:opacity-100"
                          }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
