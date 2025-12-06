"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("hero.greeting")}
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Nicky Rabesoa
            <span className="block text-gradient mt-2">{t("hero.role")}</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(157,78,221,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.contactBtn")}
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-white/5 text-foreground border border-foreground/10 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.viewWork")}
            </motion.a>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
