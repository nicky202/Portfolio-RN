"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#38B2AC" },
  { name: "Node.js", color: "#339933" },
  { name: "Figma", color: "#F24E1E" },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">About</span>
          </h2>

          <div className="glass-panel p-8 md:p-12 rounded-2xl mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
              I&apos;m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing JavaScript
              code, I mostly use React, but I can adapt to whatever tools are
              required. I&apos;m based in London, UK, but I&apos;m happy working remotely
              and have experience in remote teams. When I&apos;m not coding, you&apos;ll
              find me outdoors. I love being out in nature whether that&apos;s going
              for a walk, run or cycling. I&apos;d love you to check out my work.
            </p>
          </div>

          {/* Tech Stack Visualization */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Central Node */}
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center z-20 shadow-lg shadow-primary/50 relative"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(157, 78, 221, 0.5)",
                  "0 0 40px rgba(157, 78, 221, 0.8)",
                  "0 0 20px rgba(157, 78, 221, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-3xl font-bold text-white">Σ</span>

              {/* Connecting Lines */}
              {skills.map((_, index) => (
                <motion.div
                  key={`line-${index}`}
                  className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-primary to-transparent origin-left -z-10"
                  style={{
                    width: "140px",
                    transform: `rotate(${index * (360 / skills.length) - 90}deg)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                />
              ))}
            </motion.div>

            {/* Orbiting Skills */}
            {skills.map((skill, index) => {
              const angle = index * (360 / skills.length) - 90;
              const radius = 140; // Distance from center
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={skill.name}
                  className="absolute w-12 h-12 bg-gray-900 border border-white/10 rounded-full flex items-center justify-center z-20"
                  style={{ x, y }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, borderColor: skill.color }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}

            {/* Background Orbit Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] border border-white/5 rounded-full" />
              <div className="w-[400px] h-[400px] border border-white/5 rounded-full opacity-50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
