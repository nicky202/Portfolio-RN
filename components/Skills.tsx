"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  iconUrl: string;
}

const skillsByCategory: Record<string, Skill[]> = {
  Frontend: [
    { name: "React", iconUrl: "https://cdn.simpleicons.org/react" },
    { name: "React Native", iconUrl: "https://cdn.simpleicons.org/react" },
    { name: "CSS/Tailwind", iconUrl: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Framer Motion", iconUrl: "https://cdn.simpleicons.org/framer" },
  ],
  Backend: [
    { name: "Django", iconUrl: "https://cdn.simpleicons.org/django" },
    { name: "Laravel", iconUrl: "https://cdn.simpleicons.org/laravel" },
    { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express.js", iconUrl: "https://cdn.simpleicons.org/express" },
  ],
  Fullstack: [
    { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript" },
    { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs" },
    { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript" },
    { name: "Python", iconUrl: "https://cdn.simpleicons.org/python" },
    { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker" },
  ],
  Database: [
    { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb" },
    { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql" },
    { name: "Redis", iconUrl: "https://cdn.simpleicons.org/redis" },
  ],
};

export default function Skills() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
            <span className="text-gradient">{t("skills.title")}</span>
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

                <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-foreground/10 pb-4">
                  {t(`skills.categories.${category}`)}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05
                      }}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="bg-card/5 border border-foreground/10 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all duration-300 cursor-default flex items-center gap-2.5"
                    >
                      <Image
                        src={skill.iconUrl}
                        alt={skill.name}
                        width={18}
                        height={18}
                        className="opacity-70"
                        unoptimized
                      />
                      <span>{skill.name}</span>
                    </motion.div>
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
