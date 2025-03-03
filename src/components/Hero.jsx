import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Full Stack Developer(MERN/MEAN)",
  ".Net Developer",
  "UI/UX Enthusiast",
  "Problem Solver"
];

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-35 mt-24">
      <ParticleBackground />
      
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 px-6 lg:px-12">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
            >
              Farmesh Kumar
            </motion.h1>

            <TypeWriter words={roles} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-6 max-w-xl font-light tracking-tighter text-neutral-400 px-4 lg:px-0"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 px-4 lg:px-0"
            >
              <motion.a
                href="https://drive.google.com/file/d/13EYVxaKyYLX2M3972z5AFE9NYprU9TfB/view?usp=sharing"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg hover:shadow-cyan-500/25"
              >
                <FaDownload /> Download CV
              </motion.a>
              
              <motion.div className="flex gap-4">
                <motion.a
                  href="https://github.com/Farmesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl text-white hover:bg-neutral-700"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/farmesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl text-white hover:bg-neutral-700"
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-20" />
            <motion.img
              className="relative rounded-2xl"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
              alt="Farmesh"
              width="100%"
              height="100%"
              style={{ maxWidth: "400px", margin: "0 auto" }}
              whileHover={{
                scale: 1.02,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
