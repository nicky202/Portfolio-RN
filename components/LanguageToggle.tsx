"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "fr" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Language"
        >
            <motion.div
                key={i18n.language}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-bold w-6 text-center text-foreground"
            >
                {i18n.language.split('-')[0].toUpperCase()}
            </motion.div>
        </motion.button>
    );
}
