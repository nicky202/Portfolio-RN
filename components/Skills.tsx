"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 80, category: "Frontend" },
  { name: "Django", level: 75, category: "Backend" },
  { name: "TypeScript", level: 70, category: "Fullstack" },
  { name: "Next.js", level: 65, category: "Fullstack" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "MongoDB", level: 65, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "CSS/Tailwind", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Fullstack" },
  { name: "Python", level: 80, category: "Fullstack" },
  { name: "Docker", level: 65, category: "Fullstack" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Minimalist black and white geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 border-2 border-black rounded-full opacity-10"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 border-2 border-black"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{ rotate: [0, 360], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-black opacity-20"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-black text-white px-3 py-1 inline-block">
              SKILLS
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 border-2 border-black relative group hover:border-gray-400 transition-colors"
              >
                <div className="absolute top-2 right-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 text-gray-600 font-medium">
                    {skill.category}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-3 mt-4">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-gray-600 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-black"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-700 text-lg">
              Always learning, always building, always improving.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
