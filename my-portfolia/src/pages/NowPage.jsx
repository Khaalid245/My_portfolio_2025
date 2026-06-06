import { motion } from 'framer-motion';
import { FaHammer, FaBrain, FaBook, FaBullseye, FaFlask } from 'react-icons/fa';

const NowPage = () => {
  const sections = [
    {
      title: 'Building',
      icon: <FaHammer className="text-xl text-lightAccent dark:text-darkAccent" />,
      desc: 'Refining allocation models and notification task workers inside the Course Management Platform. Optimizing database InnoDB locking layers for distributed checkout transactions.'
    },
    {
      title: 'Learning',
      icon: <FaBrain className="text-xl text-lightAccent dark:text-darkAccent" />,
      desc: 'Kubernetes container orchestration, Service Mesh configs, vector databases, and semantic LLM embed embeddings.'
    },
    {
      title: 'Reading',
      icon: <FaBook className="text-xl text-lightAccent dark:text-darkAccent" />,
      desc: 'Designing Data-Intensive Applications by Martin Kleppmann. A deep dive into storage designs, replication, partitioning, and consensus algorithms.'
    },
    {
      title: 'Current Goals',
      icon: <FaBullseye className="text-xl text-lightAccent dark:text-darkAccent" />,
      desc: 'Contributing fixes to database SQL libraries, building multi-stage microservices templates, and documenting lessons on backend reliability.'
    },
    {
      title: 'Recent Experiments',
      icon: <FaFlask className="text-xl text-lightAccent dark:text-darkAccent" />,
      desc: 'Writing optimized multi-stage Dockerfiles for Node APIs, compiling TypeScript edges caching, and testing prompt JSON extraction filters.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
          Now
        </h1>
        <p className="max-w-xl mx-auto text-lg text-slate-500 dark:text-slate-400">
          This is a snapshot of what I&apos;m focused on right now.
        </p>
        <p className="text-xs text-slate-400 font-mono">
          Inspired by the <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-lightAccent dark:text-darkAccent hover:underline">/now page</a> movement by Derek Sivers.
        </p>
      </div>

      {/* Main Snapshots List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((item, index) => {
          const isFullWidth = index === sections.length - 1;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4 hover:shadow-md transition-shadow duration-300 ${
                isFullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-lightBg dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850">
                  {item.icon}
                </span>
                <h3 className="font-mono text-base font-bold text-lightText dark:text-darkText uppercase tracking-wider">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Updated Stamp */}
      <div className="text-center text-[10px] font-mono text-slate-450 dark:text-slate-500 pt-6">
        Last updated: June 2026
      </div>

    </div>
  );
};

export default NowPage;
