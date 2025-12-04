"use client";

import { motion } from "framer-motion";

const skillsByCategory = {
  Frontend: ["React", "React Native", "CSS/Tailwind", "Framer Motion"],
  Backend: ["Django", "Laravel", "Node.js", "Express.js"],
  Fullstack: ["TypeScript", "Next.js", "JavaScript", "Python", "Docker"],
  Database: ["MongoDB", "PostgreSQL", "Redis"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-colors duration-300"
                whileHover={{
                  y: -5,
                }}
              >
                {/* Decorative gradient blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                      }}
                      className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-primary/50 hover:shadow-[0_0_15px_rgba(157,78,221,0.3)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
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
