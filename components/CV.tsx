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
    <section
      id="cv"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 border-4 border-gray-200 transform rotate-45 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-6 text-center">
            <span className="bg-black text-white px-3 py-1 inline-block">
              RESUME / CV
            </span>
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and
            projects
          </p>

          <motion.div
            className="bg-white border-4 border-black p-12 relative group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute top-4 right-4 w-16 h-16 border-2 border-black/20"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
            <div
              className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600/10"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">
                    Fullstack Developer
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Experienced in building scalable web applications with
                    modern technologies. Passionate about clean code,
                    architecture, and user experience.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black" />
                      <span>Frontend & Backend Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black" />
                      <span>Database Design & Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black" />
                      <span>API Development & Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black" />
                      <span>DevOps & Deployment</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={handleDownload}
                  className="bg-black text-white px-10 py-6 font-semibold hover:bg-gray-800 transition-colors relative group/btn flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download CV</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-600 opacity-0 group-hover/btn:opacity-20 transition-opacity"
                    animate={isHovered ? { x: [0, 100, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Alternative: View online CV */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">Or view online</p>
            <motion.a
              href="#contact"
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
              whileHover={{ scale: 1.05 }}
            >
              Contact me for more details
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
