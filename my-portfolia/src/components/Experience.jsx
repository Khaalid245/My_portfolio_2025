import {EXPERIENCES} from "../constants"
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-slate-900 pb-12">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -20}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl font-bold tracking-tight text-slate-100"
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center gap-2 lg:gap-0">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -20}}
              transition={{duration: 0.5}}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm font-mono text-slate-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 20}}
              transition={{duration: 0.5}}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-slate-200"> 
                {experience.role} - <span className="text-sm font-mono text-blue-400/90">{experience.company}</span>
              </h6>
              <ul className="mb-4 list-disc pl-4 text-slate-400 text-sm leading-relaxed flex flex-col gap-2">
                {experience.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded border border-slate-800/80 bg-slate-900/40 px-2 py-0.5 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
