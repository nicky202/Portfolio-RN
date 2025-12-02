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
  },
  {
    title: "Aligneurs Français – SaaS Platform",
    description:
      "SaaS platform for managing invisible aligner treatments, with practitioner and patient dashboards.",
    tech: ["React.js", "Django", "PostgreSQL", "Docker", "Celery", "Redis"],
    image: ImgLaf,
    images: [ImgLaf, ImgLaf2, ImgLaf3],
  },
  {
    title: "Portfolio",
    description:
      "Modern, high-performance portfolio with unique geometric design and smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: ImgPortfolio,
    images: [ImgPortfolio],
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
      <section id="projects" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="bg-black text-white px-3 py-1 inline-block">
                PROJECTS
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="bg-white h-64 mb-4 relative overflow-hidden border-2 border-black group-hover:border-gray-400 transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white text-xs px-3 py-1 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal/Popup pour afficher les images */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header avec titre et bouton fermer */}
              <div className="flex items-center justify-between p-4 bg-black text-white">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-300 transition-colors text-3xl font-bold leading-none"
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>

              {/* Image principale */}
              <div className="relative w-full h-[70vh] bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Boutons de navigation (si plusieurs images) */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
                      aria-label="Image précédente"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
                      aria-label="Image suivante"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Indicateur d'image (ex: 1/3) */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>

              {/* Miniatures des images (si plusieurs images) */}
              {selectedProject.images.length > 1 && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex gap-2 justify-center overflow-x-auto">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-20 flex-shrink-0 border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-black scale-110"
                            : "border-gray-300 hover:border-gray-500"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Miniature ${index + 1}`}
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
