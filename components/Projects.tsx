"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ImgPortfolio from "@/public/images/projects/portfolio.png";
import ImgLaf from "@/public/images/projects/laf.png";
import ImgLaf2 from "@/public/images/projects/laf2.png";
import ImgLaf3 from "@/public/images/projects/laf3.png";
import ImgPureControl from "@/public/images/projects/purecontrol.png";
import ImgPureControl2 from "@/public/images/projects/purecontrol2.png";
import ImgPureControl3 from "@/public/images/projects/purecontrol3.png";

const projects = [
  {
    title: "Saas - PureControl™",
    description:
      "End-to-end SaaS platform with authentication, partner accounts, billing, activity tracking, and an integrated 3D optimisation pipeline.",
    tech: ["React", "TypeScript", "Django", "PostgreSQL", "Docker", "Celery"],
    image: ImgPureControl,
    images: [ImgPureControl, ImgPureControl2, ImgPureControl3],
    type: "Featured Project",
  },
  {
    title: "Aligneurs Français",
    description:
      "SaaS platform for managing invisible aligner treatments, with practitioner and patient dashboards.",
    tech: ["React.js", "Django", "PostgreSQL", "Docker", "Celery", "Redis"],
    image: ImgLaf,
    images: [ImgLaf, ImgLaf2, ImgLaf3],
    type: "Featured Project",
  },
  {
    title: "Portfolio",
    description:
      "Modern, high-performance portfolio with unique geometric design and smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: ImgPortfolio,
    images: [ImgPortfolio],
    type: "Personal Project",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

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
              <span className="text-gradient">Recent Work</span>
            </h2>
            <p className="text-gray-400">A collection of projects I&apos;ve worked on</p>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-12 items-center`}
              >
                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div className="text-accent font-medium tracking-wider text-sm">
                    {project.type}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>

                  <div className="glass-panel p-6 rounded-xl text-gray-300 leading-relaxed shadow-lg">
                    {project.description}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-gray-400 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => openModal(project)}
                      className="text-white hover:text-primary transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </button>
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>

                {/* Project Image */}
                <div
                  className="flex-1 relative group cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  {/* Decorative background element */}
                  <div className={`absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl -z-10 rounded-xl transition-opacity duration-500 ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
                </div>
              </motion.div>
            ))}
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
              className="relative max-w-6xl w-full max-h-[90vh] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
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
                      className="object-contain"
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
                <div className="p-4 bg-black/20 border-t border-white/10">
                  <div className="flex gap-2 justify-center overflow-x-auto">
                    {selectedProject.images.map((img, index) => (
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
