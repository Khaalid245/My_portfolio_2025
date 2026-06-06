import {PROJECTS} from '../constants'
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-slate-900 pb-12">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity:0, y:-20}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl font-bold tracking-tight text-slate-100"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-16 lg:justify-center gap-6 lg:gap-0 border-b border-slate-900/40 pb-8 last:border-0 last:pb-0">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity:0, x:-20}}
              transition={{duration:0.5}}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img 
                src={project.image}
                width={150}
                height={150}
                alt={project.title} 
                className="rounded-lg border border-slate-800 bg-slate-950 object-cover w-40 h-40 grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity:0, x:20}}
              transition={{duration:0.5}}
              className="w-full max-w-xl lg:w-3/4 flex flex-col justify-center"
            >
              <h3 className="mb-3 font-semibold text-xl text-slate-100 font-mono">{project.title}</h3>
              
              <div className="flex flex-col gap-2 mb-4 text-sm leading-relaxed">
                <p className="text-slate-400">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 mr-2">Problem:</span>
                  {project.problem}
                </p>
                <p className="text-slate-300">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 mr-2">Solution:</span>
                  {project.solution}
                </p>
                <p className="text-slate-400 text-xs font-mono">
                  <span className="uppercase tracking-wider text-slate-500 mr-2 font-bold">Architecture:</span>
                  <span className="text-slate-300">{project.architecture}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 items-center justify-between mt-2">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="rounded border border-slate-800/80 bg-slate-900/40 px-2 py-0.5 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="text-sm font-mono text-blue-400 hover:text-blue-300 hover:underline transition duration-300 mt-2 sm:mt-0 flex items-center gap-1"
                >
                  View Case Study →
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
