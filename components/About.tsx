"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function About() {
  const { t } = useTranslation();

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
            <span className="text-gradient">{t("about.title")}</span>
          </h2>

          <div className="glass-panel p-8 md:p-12 rounded-2xl mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-lg md:text-xl text-foreground/80 leading-relaxed relative z-10 space-y-4">
              {(t("about.content", { returnObjects: true }) as string[]).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
