"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.cv"), href: "#cv" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold hidden md:block text-foreground"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo placeholder if needed */}
          </motion.div>

          {/* Centered Navigation */}
          <div className="flex items-center space-x-4 md:space-x-8 bg-background/5 px-6 py-3 rounded-full border border-foreground/10 backdrop-blur-sm">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs md:text-sm font-medium text-foreground/60 hover:text-foreground transition-colors relative group tracking-widest"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Toggles */}
            <div className="flex items-center gap-2 pl-4 border-l border-foreground/10">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="hidden md:block w-8">
            {/* Spacer to balance center alignment */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
