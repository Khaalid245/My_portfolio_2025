import aboutImg from '../assets/khalid2.jpg';
import { ABOUT_PREVIEW } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-slate-900 pb-16">
      <h1 className="my-20 text-center text-4xl font-bold tracking-tight text-slate-100">
        About <span className="text-slate-400">Me</span>
      </h1>
      <div className="flex flex-wrap lg:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img 
              src={aboutImg} 
              width={220} 
              height={220} 
              alt="about" 
              className="rounded-2xl border border-slate-800/80 grayscale hover:grayscale-0 transition duration-500 shadow-xl w-48 h-48 object-cover" 
            />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity: 1, x:0}}
          initial={{ opacity: 0, x: 20 }}
          transition={{duration:0.5}}
          className="w-full lg:w-2/3 flex items-center mt-6 lg:mt-0"
        >
          <div className="flex flex-col items-center lg:items-start w-full gap-6 px-4">
            <p className="max-w-xl text-slate-400 text-base leading-relaxed text-center lg:text-left">
              {ABOUT_PREVIEW.text}
            </p>
            <a 
              href={ABOUT_PREVIEW.link} 
              className="inline-flex items-center gap-1 font-mono text-sm text-blue-400 hover:text-blue-300 hover:underline transition duration-300"
            >
              Read More →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
