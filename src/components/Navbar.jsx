import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaPaperPlane } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'skills', 'process', 'projects', 'contact']);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Services" },
    { href: "#skills", label: "Stack" },
    { href: "#process", label: "Process" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" }
  ];

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

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;
    const navbarHeight = 80; // Adjust based on your navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Farmesh.dev
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors relative group
                    ${activeSection === link.href.slice(1) 
                      ? 'text-white' 
                      : 'text-neutral-400 hover:text-white'
                    }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
    </div>

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
            <motion.a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300"
            >
              Hire Me <FaPaperPlane />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            aria-label="Open navigation menu"
          >
            <FaBars className="text-xl" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={[...navLinks, ...socialLinks]}
      />
  </nav>
  );
};

export default Navbar;
