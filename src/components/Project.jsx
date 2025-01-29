import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

function Project() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
           
            <div 
            className="w-full lg:w-1/4">
              <motion.img
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5}}
              className="mb-6 rounded border-2 border-violet-500"  width={180} height={180} src={project.image} />
            </div>
            <motion.div 
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.9}}
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech,index)=>(
                <motion.p 
                whileHover={{scale: 1.2}}
                transition={{duration:0.1}}
                className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 inline-flex border-b-2 cursor-pointer" key={index}>
                    {tech}
                </motion.p>
            ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
