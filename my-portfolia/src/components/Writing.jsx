import { LATEST_WRITING } from '../constants';
import { motion } from 'framer-motion';

const Writing = () => {
  return (
    <div className="border-b border-slate-900 pb-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold tracking-tight text-slate-100"
      >
        Latest Writing
      </motion.h1>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {LATEST_WRITING.map((article, index) => (
          <motion.a
            href={article.link}
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block rounded-2xl border border-slate-900 bg-slate-950/40 p-6 hover:border-slate-800/80 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-slate-100 transition-colors duration-300 font-mono">
                {article.title}
              </h3>
              <div className="flex gap-3 text-xs text-slate-500 font-mono">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              {article.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Writing;
