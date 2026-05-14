import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '../constants';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      href: "https://github.com/Farmesh",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-purple-500"
    },
    {
      href: "https://www.linkedin.com/in/farmeshkumar",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-cyan-500"
    },
    {
      href: "https://www.instagram.com/farmesh_09",
      icon: FaInstagram,
      label: "Instagram",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 pt-20 pb-10">
      <div className="container mx-auto px-8">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-black text-white"
            >
              Let us build your website
            </motion.h2>
            <p className="max-w-xl text-lg leading-8 text-slate-400">
              Tell me what business you run, what pages you need, and your deadline. I will help you plan a professional website that fits your goals.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-slate-400"
              >
                <FaMapMarkerAlt className="text-emerald-300" />
                <span>{CONTACT.address}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 text-slate-400"
              >
                <FaPhone className="text-emerald-300" />
                <a href="tel:+917876602243" className="hover:text-white">{CONTACT.phoneNo}</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-slate-400"
              >
                <FaEnvelope className="text-emerald-300" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </motion.div>
            </div>

            <motion.a
              href="https://wa.me/917876602243?text=Hi%20Farmesh%2C%20I%20want%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300"
            >
              <FaWhatsapp /> Message on WhatsApp
            </motion.a>

            {/* Social Links */} 
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                  className="rounded-full bg-slate-800 p-3 text-slate-400 transition-all hover:bg-slate-700 hover:text-emerald-300"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>

{/* <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
 <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className={`text-xl text-neutral-400 ${social.color} transition-colors`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div> */}

          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 md:p-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-black text-white"
            >
              Request a project callback
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 text-slate-400"
            >
              Share your email and I will contact you about your website requirements.
            </motion.p>

            <form onSubmit={handleSubmit} className="relative mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-full border border-slate-700 bg-slate-800/70 px-6 py-4 pr-36 text-white focus:border-emerald-400 focus:outline-none"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === 'sending'}
                className="absolute right-2 top-2 flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2 font-bold text-slate-950 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaPaperPlane />
                  </motion.div>
                ) : status === 'success' ? (
                  'Thanks!'
                ) : (
                  <>
                    Send
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Business website", "Landing page", "Web app"].map((item) => (
                <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-center text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500"
        >
          <p>© {new Date().getFullYear()} Farmesh Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
