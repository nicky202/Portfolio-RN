"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "WORK", href: "#projects" },
    { name: "RESUME", href: "#cv" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center md:justify-between">
          <motion.div
            className="text-2xl font-bold hidden md:block text-white"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo placeholder if needed */}
          </motion.div>

          {/* Centered Navigation as per reference image */}
          <div className="flex items-center space-x-8 md:space-x-12 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors relative group tracking-widest"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block w-8">
            {/* Spacer to balance center alignment */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
