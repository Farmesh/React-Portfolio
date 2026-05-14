import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import { FaArrowRight, FaCheckCircle, FaGithub, FaLinkedin, FaPhoneAlt, FaRocket } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Websites for local businesses",
  "Landing pages that bring leads",
  "E-commerce and booking flows",
  "Custom web apps for growing teams"
];

const metrics = [
  { value: "4+", label: "real projects shipped" },
  { value: "100%", label: "responsive layouts" },
  { value: "Fast", label: "delivery mindset" }
];

const included = ["Business-ready design", "Mobile-first build", "SEO-friendly structure"];

export const Hero = () => {
  return (
    <div className="relative mt-16 overflow-hidden border-b border-white/10 pb-16 lg:pb-24">
      <ParticleBackground />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
        <div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200"
            >
              <FaRocket className="text-emerald-300" />
              Freelance website developer for businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl pb-6 text-5xl font-black leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl"
            >
              I build websites that make your business look trusted.
            </motion.h1>

            <TypeWriter words={roles} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-6 max-w-2xl px-4 text-lg leading-8 text-slate-300 lg:px-0"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 px-4 sm:flex-row lg:px-0"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300"
              >
                Start a Website Project <FaArrowRight />
              </motion.a>
              <motion.a
                href="tel:+917876602243"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white hover:bg-white/15"
              >
                <FaPhoneAlt /> Call Now
              </motion.a>
              
              <motion.div className="flex justify-center gap-3">
                <motion.a
                  href="https://github.com/Farmesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-xl text-white hover:bg-slate-700"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/farmesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-xl text-white hover:bg-slate-700"
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>
            </motion.div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {included.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300">
                  <FaCheckCircle className="text-emerald-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 lg:p-8">
          <motion.div 
            className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-emerald-950/30"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Project preview</p>
                <h2 className="text-2xl font-bold text-white">Premium Business Website</h2>
              </div>
              <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-950">Ready to launch</span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
              <img
                className="h-64 w-full object-cover sm:h-80"
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional website planning workspace"
              />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-2xl font-black text-white">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
