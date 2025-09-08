// ContactMe.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (API call)
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative w-full min-h-screen py-24 bg-gradient-to-b from-[#0B0F2D] via-[#0D133B] to-[#0B0F2D] text-white overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12 text-center">
          <span className="text-rose-400">Contact</span> Me
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#111533] to-[#0D133B] p-8 rounded-xl shadow-2xl border border-white/10 space-y-6"
        >
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0B0F2D] border border-gray-700 focus:border-rose-400 outline-none transition-all duration-300 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0B0F2D] border border-gray-700 focus:border-rose-400 outline-none transition-all duration-300 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-[#0B0F2D] border border-gray-700 focus:border-rose-400 outline-none transition-all duration-300 text-white resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #F43F5E' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-rose-400 rounded-xl text-white font-semibold shadow-lg transition-all duration-300"
          >
            {submitted ? 'Sent ✅' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Optional Social Links */}
        <div className="mt-12 flex justify-center space-x-6 text-white text-2xl">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="mailto:example@gmail.com" className="hover:text-rose-400 transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
