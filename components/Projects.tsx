"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Fullstack E-Commerce",
    description:
      "Complete e-commerce solution with React frontend, Node.js backend, and MongoDB database",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with RESTful API and PostgreSQL database",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio with unique geometric design and optimized performance",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  },
];

export default function Projects() {
  return (
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
  );
}
