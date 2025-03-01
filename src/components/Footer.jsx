import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
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
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-thin bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              Get in Touch
            </motion.h2>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-neutral-400"
              >
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>{CONTACT.address}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 text-neutral-400"
              >
                <FaPhone className="text-cyan-400" />
                <span>{CONTACT.phoneNo}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-neutral-400"
              >
                <FaEnvelope className="text-cyan-400" />
                <span>{CONTACT.email}</span>
              </motion.div>
            </div>

            {/* Social Links */}
            {/* <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-neutral-800 rounded-full text-neutral-400 hover:text-cyan-400 hover:bg-neutral-700 transition-all"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div> */}

<div className="flex items-center gap-4">
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
            </div>

          </div>

          {/* Newsletter Section */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-thin bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            >
              Newsletter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-neutral-400"
            >
              Subscribe to my newsletter for the latest tech insights and project updates.
            </motion.p>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-neutral-800/50 border border-neutral-700 focus:outline-none focus:border-cyan-500 pr-36"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === 'sending'}
                className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium flex items-center gap-2"
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
                    Subscribe
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-neutral-500 mt-16 pt-8 border-t border-neutral-800"
        >
          <p>© {new Date().getFullYear()} Farmesh Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 