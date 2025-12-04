"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ImgProfile from "@/public/images/about/profile.jpg"; // Reusing the profile image

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h2
            className="text-xl md:text-2xl font-medium text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.h2>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Anurag <span className="text-primary">.</span>
          </motion.h1>
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Front-End Developer
          </motion.h3>
          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A self-taught front-end developer with over 2 years of experience.
            I build responsive and user-friendly websites & apps. I focus on
            clean code and efficient design.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 rounded-full text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 glass-panel rounded-full text-white font-semibold hover:bg-white/10 transition-all border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative w-[400px] h-[400px] mx-auto">
            {/* Abstract Shapes around image */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border-2 border-accent/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 bg-gradient-to-b from-white/5 to-transparent">
              <Image
                src={ImgProfile}
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
