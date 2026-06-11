import {EXPERIENCES} from "../constants"
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-borderPrimary pb-12">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -20}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl font-bold tracking-tight text-textPrimary"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center gap-2 lg:gap-0">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -20}}
              transition={{duration: 0.5}}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm font-mono text-textMuted">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 20}}
              transition={{duration: 0.5}}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-textPrimary"> 
                {experience.role} - <span className="text-sm font-mono text-accent/90">{experience.company}</span>
              </h3>
              <ul className="mb-4 list-disc pl-4 text-textSecondary text-sm leading-relaxed flex flex-col gap-2">
                {experience.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded border border-borderPrimary bg-bgSecondary/50 px-2 py-0.5 text-xs font-mono text-textSecondary"
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
