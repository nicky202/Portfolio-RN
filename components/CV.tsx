"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CV() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/documents/CV_Rabesoa_Nicky.pdf";
    link.download = "CV_Rabesoa_Nicky.pdf";
    link.click();
  };

  return (
    <section id="cv" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Resume</span>
          </h2>

          <motion.div
            className="glass-panel p-8 md:p-12 rounded-2xl relative group overflow-hidden"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Fullstack Developer
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Master's degree (Master 2) in Computer Science. Experienced in building
                  scalable web applications with modern technologies. Passionate about
                  clean code, architecture, and user experience.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Frontend & Backend
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Database Design
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    API Development
                  </span>
                </div>
              </div>

              <motion.button
                onClick={handleDownload}
                className="relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-primary/25 overflow-hidden group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500">
              Prefer to chat? <a href="#contact" className="text-primary hover:text-accent transition-colors underline decoration-primary/30 hover:decoration-accent">Contact me</a> directly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
