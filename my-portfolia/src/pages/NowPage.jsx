import { motion } from 'framer-motion';
import { Hammer, Brain, BookOpen, Target, FlaskConical, Terminal } from 'lucide-react';

const NowPage = () => {
  const sections = [
    {
      title: 'Building',
      tag: 'BUILDING',
      icon: <Hammer size={16} className="text-lightAccent dark:text-darkAccent" />,
      desc: 'Improving backend workflows, role allocation systems, notification queues, and database performance within my Course Management Platform.'
    },
    {
      title: 'Learning',
      tag: 'LEARNING',
      icon: <Brain size={16} className="text-lightAccent dark:text-darkAccent" />,
      desc: 'Learning Docker Compose workflows, Linux server administration, database indexing strategies, and practical full-stack AI integration patterns.'
    },
    {
      title: 'Reading',
      tag: 'READING',
      icon: <BookOpen size={16} className="text-lightAccent dark:text-darkAccent" />,
      desc: 'Currently studying data modeling, indexing, replication, and distributed system fundamentals from Designing Data-Intensive Applications.'
    },
    {
      title: 'Current Focus',
      tag: 'FOCUS',
      icon: <Target size={16} className="text-lightAccent dark:text-darkAccent" />,
      desc: 'Backend Systems, DevOps Foundations, Full-Stack AI Integration, Database Performance.'
    },
    {
      title: 'Recent Experiments',
      tag: 'EXPERIMENT',
      icon: <FlaskConical size={16} className="text-lightAccent dark:text-darkAccent" />,
      desc: 'Exploring API integrations, retrieval workflows, and practical full-stack AI application patterns.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-6">
      
      {/* Hero Header */}
      <section className="text-center space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <span className="font-mono text-xs uppercase tracking-widest text-lightAccent dark:text-darkAccent font-bold block mb-1">
          Now
        </span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono"
        >
          /now
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans"
        >
          A minimal snapshot of my current projects, learning objectives, and local infrastructure experiments.
        </motion.p>
        
        <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
          Last Updated: June 2026 &bull; Updated Monthly
        </div>
      </section>

      {/* System Status Dashboard overlay */}
      <section className="space-y-4">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-[#090D1A] p-6 font-mono text-[13px] space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-bold tracking-wider text-lightText dark:text-darkText">LOCAL SANDBOX: ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px]">
              <Terminal size={12} />
              <span>bash (wsl-ubuntu)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-600 dark:text-slate-400">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 block uppercase tracking-wider">Host Environment</span>
              <span className="text-lightText dark:text-darkText block text-xs">Windows 11 (WSL2 Ubuntu)</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 block uppercase tracking-wider">Hypervisor & DBs</span>
              <span className="text-lightText dark:text-darkText block text-xs">Docker Compose / MySQL / Redis</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 block uppercase tracking-wider">Local Toolchain</span>
              <span className="text-lightText dark:text-darkText block text-xs">VS Code (Vim Keys) / PowerShell</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Snapshots Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((item, index) => {
          const isFullWidth = index === sections.length - 1;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between hover:border-slate-350 dark:hover:border-slate-700 transition-colors duration-200 ${
                isFullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
                      {item.icon}
                    </span>
                    <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-450 dark:text-slate-500 uppercase">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Footer / About Section */}
      <section className="text-center space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <p className="text-[10px] font-mono text-slate-400">
          Last updated: June 2026. Inspired by Derek Sivers&apos;{' '}
          <a 
            href="https://nownownow.com/about" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lightAccent dark:text-darkAccent hover:underline"
          >
            /now page movement
          </a>.
        </p>
      </section>

    </div>
  );
};

export default NowPage;
