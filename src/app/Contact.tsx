"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.warn(formData);
  };

  return (
    <section className="relative w-full overflow-hidden py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Title Section - 1/3 width */}
          <div className="mb-16 lg:mb-0 lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 font-grotesk text-6xl font-bold lg:text-8xl"
            >
              Let&apos;s <span className="text-primary">Talk</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Ready to start your project? We&apos;re here to help bring your
              vision to life. Drop us a message and let&apos;s create something
              amazing together.
            </motion.p>
          </div>

          {/* Form Section - 2/3 width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-grotesk lg:w-2/3"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8 rounded-lg bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 p-8"
            >
              <div className="flex w-full gap-6">
                <div className="w-1/2">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-b border-gray-200 bg-transparent px-4 py-3 outline-none transition-colors duration-300 focus:border-primary"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b border-gray-200 bg-transparent px-4 py-3 outline-none transition-colors duration-300 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                  }}
                  className="w-full resize-none border-b border-gray-200 bg-transparent px-4 py-3 outline-none transition-colors duration-300 focus:border-primary"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button className="group relative flex items-center overflow-hidden rounded-b-lg border-2 border-primary bg-transparent px-8 py-4 text-xl font-semibold text-primary transition-all hover:text-white">
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 translate-y-full transform bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
                  <svg
                    className="relative z-10 ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
