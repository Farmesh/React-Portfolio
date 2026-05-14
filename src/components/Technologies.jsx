import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {SiMongodb, SiAngular, SiDotnet, SiCplusplus} from 'react-icons/si'
import {SiNodedotjs} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import { motion } from 'framer-motion'

import {SiMysql} from 'react-icons/si'
import {SiStripe} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiNpm} from 'react-icons/si'
import {SiRender} from 'react-icons/si'
import {SiNetlify} from 'react-icons/si'



const technologies = [
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: SiExpress, name: "Express", color: "text-white" },
  { icon: SiCplusplus, name: "C++", color: "text-blue-500" },
  { icon: SiAngular, name: "Angular", color: "text-red-500" },
  { icon: SiDotnet, name: ".NET", color: "text-green-600" },
// { icon: SiCsharp, name: "C#", color: "text-purple-600" },
{ icon: SiMysql, name: "SQL", color: "text-blue-400" },
{ icon: SiStripe, name: "Stripe", color: "text-indigo-500" },
{ icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },  // CSS framework
{ icon: SiNpm, name: "npm", color: "text-green-400" },  // Package manager
{ icon: SiRender, name: "Render", color: "text-indigo-600" },  // Cloud platform for full-stack apps
{ icon: SiNetlify, name: "Netlify", color: "text-teal-500" },  // Hosting and serverless functions
]

const TechCard = ({ icon: Icon, name, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 blur transition duration-500 group-hover:opacity-70" />
    <div className="relative flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 p-6 transition duration-500 group-hover:border-transparent">
      <Icon className={`text-6xl ${color} transition duration-500`} />
      <span className="font-medium text-sm opacity-60 group-hover:opacity-100">{name}</span>
    </div>
  </motion.div>
)

function Technologies() {
  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-4 text-center text-4xl font-black text-white"
      >
        Technology Stack
      </motion.h2>
      <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-400">
        I use proven tools to create websites that are good-looking, maintainable, and ready to grow.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} {...tech} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 text-center text-slate-400"
      >
        <p>Design, frontend, backend, database, payment, and deployment support in one place.</p>
      </motion.div>
    </section>
  )
}

export default Technologies
