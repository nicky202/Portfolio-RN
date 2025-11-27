"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* Minimalist black and white geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border-2 border-black rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Diamond */}
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 border-2 border-black"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Square */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-black opacity-30"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Triangle */}
        <motion.div
          className="absolute bottom-32 left-1/3"
          style={{
            width: 0,
            height: 0,
            borderLeft: "30px solid transparent",
            borderRight: "30px solid transparent",
            borderBottom: "52px solid black",
            opacity: 0.2,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block">FULLSTACK</span>
            <span className="block bg-black text-white px-4 py-2 mt-2">
              DEVELOPER
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Building end-to-end solutions with clean code, modern architecture,
            and geometric precision
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#cv"
              className="border-2 border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-colors inline-block relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Download CV
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
