"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Minimalist black and white geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-10 h-10 border-2 border-black rounded-full opacity-20"
          animate={{ rotate: [0, 360], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-32 right-20 w-8 h-8 border-2 border-black"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-8 h-8 border-2 border-black opacity-30"
          animate={{ x: [0, 30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-black text-white px-3 py-1 inline-block">
                ABOUT
              </span>
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a passionate{" "}
                <strong className="text-black">fullstack developer</strong>{" "}
                dedicated to creating elegant, functional digital solutions from
                frontend to backend. With expertise in modern technologies and a
                focus on clean code, I build scalable applications that
                transform ideas into interactive experiences.
              </p>
              <p>
                My approach combines technical expertise across the entire stack
                with an eye for minimalist aesthetics, ensuring every project is
                both beautiful, performant, and architecturally sound.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-black text-white px-4 py-2 text-sm font-semibold">
                  Frontend
                </span>
                <span className="bg-black text-white px-4 py-2 text-sm font-semibold">
                  Backend
                </span>
                <span className="bg-black text-white px-4 py-2 text-sm font-semibold">
                  Database
                </span>
                <span className="bg-black text-white px-4 py-2 text-sm font-semibold">
                  DevOps
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Image with minimalist geometric overlay */}
            <div className="w-full h-96 bg-black relative overflow-hidden border-4 border-black">
              {/* Free example image from Unsplash */}
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces"
                alt="Developer Portrait"
                fill
                className="object-cover grayscale"
                unoptimized
              />

              {/* Minimalist black and white geometric shapes overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 border-2 border-white rounded-full opacity-40"
                  animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-8 left-4 w-5 h-5 border-2 border-white opacity-30"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-4 right-8 w-6 h-6 border-2 border-white"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                  animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/40 transform -translate-y-1/2" />
                  <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/40 transform -translate-x-1/2" />
                </motion.div>
              </div>

              {/* Decorative lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-white opacity-30" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-30" />
              <div className="absolute top-0 left-0 h-full w-0.5 bg-white opacity-30" />
              <div className="absolute top-0 right-0 h-full w-0.5 bg-white opacity-30" />
            </div>

            {/* Floating geometric accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-black opacity-20"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
              animate={{ rotate: [0, 360], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
