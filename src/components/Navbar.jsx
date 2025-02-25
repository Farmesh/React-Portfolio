import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaBars } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'contact']);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
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
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
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