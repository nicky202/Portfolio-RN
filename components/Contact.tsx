"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Try to use API route first (for production email sending)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - form submitted via API
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // If API fails, fallback to mailto
        throw new Error("API failed, using mailto fallback");
      }
    } catch (error) {
      // Fallback to mailto if API route fails or is not configured
      try {
        const subject = encodeURIComponent(
          `Portfolio Contact: ${formData.name}`
        );
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:rabesoanicky@gmail.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        setSubmitStatus({
          type: "success",
          message: "Opening your email client...",
        });

        setFormData({ name: "", email: "", message: "" });
      } catch (mailtoError) {
        setSubmitStatus({
          type: "error",
          message:
            "Something went wrong. Please try again or email me directly at rabesoanicky@gmail.com",
        });
      }
    } finally {
      setIsSubmitting(false);
      // Clear success message after 5 seconds
      if (submitStatus.type === "success") {
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Unique geometric background shapes */}
      <div
        className="absolute top-0 left-0 w-64 h-64 border-2 border-white/20 transform rotate-45 -translate-x-1/2 -translate-y-1/2"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 border-2 border-white/20"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-6 text-center">
            <span className="bg-white text-black px-3 py-1 inline-block">
              CONTACT
            </span>
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Let's work together to bring your ideas to life
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-2 border-white/30 px-4 py-3 focus:border-white focus:outline-none transition-colors"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-2 border-white/30 px-4 py-3 focus:border-white focus:outline-none transition-colors"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border-2 border-white/30 px-4 py-3 focus:border-white focus:outline-none transition-colors resize-none"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-3 ${
                    submitStatus.type === "success"
                      ? "bg-white/20 text-white"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-colors inline-block disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex justify-center space-x-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <span className="text-lg font-semibold">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <span className="text-lg font-semibold">LinkedIn</span>
            </a>
            <a
              href="mailto:rabesoanicky@gmail.com"
              className="hover:opacity-70 transition-opacity"
            >
              <span className="text-lg font-semibold">Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
