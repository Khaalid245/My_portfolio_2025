import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTools, FaGraduationCap, FaNetworkWired, FaRocket, FaChevronRight } from 'react-icons/fa';

const EngineeringPhilosophyPage = () => {
  const principles = [
    {
      icon: <FaLeaf className="text-2xl text-lightAccent dark:text-darkAccent" />,
      title: 'Build for Simplicity',
      description: 'Simple codebases are easier to maintain and debug. I prefer flat files and clean logic paths over over-engineered abstractions.'
    },
    {
      icon: <FaTools className="text-2xl text-lightAccent dark:text-darkAccent" />,
      title: 'Solve Real Bottlenecks',
      description: 'Software is a tool to automate tasks and remove friction. I focus on optimizing query times, securing endpoints, and resolving bottlenecks rather than chasing tech hype.'
    },
    {
      icon: <FaGraduationCap className="text-2xl text-lightAccent dark:text-darkAccent" />,
      title: 'Practical Learning',
      description: 'Systems evolve quickly. Staying up to date with database index optimizations, security patches, and deployment workflows keeps code bases robust and reliable.'
    }
  ];

  const systemsThinkingNodes = [
    { label: 'Frontend', desc: 'UI & User Interfaces' },
    { label: 'API', desc: 'API Logic & Routing' },
    { label: 'Database', desc: 'Queries & Storage' },
    { label: 'Infrastructure', desc: 'Docker & Servers' },
    { label: 'Deployment', desc: 'GitHub Actions & CDN' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
          Engineering Philosophy
        </h1>
        <p className="max-w-xl mx-auto text-lg text-slate-500 dark:text-slate-400">
          How I think about software, systems, and problem solving.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-lightCard dark:bg-darkCard p-6 flex flex-col gap-4 hover:border-lightAccent/40 dark:hover:border-darkAccent/40 hover:shadow-lg transition-all duration-300 group cursor-default"
          >
            <div className="p-3 bg-lightBg dark:bg-slate-900 w-fit rounded-xl border border-slate-100 dark:border-slate-800/60 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {p.icon}
            </div>
            <h3 className="font-mono text-lg font-bold text-lightText dark:text-darkText">
              {p.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[92%]">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Systems Thinking Section */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-lightCard dark:bg-darkCard p-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="p-3 bg-lightAccent/10 dark:bg-darkAccent/10 rounded-xl">
            <FaNetworkWired className="text-2xl text-lightAccent dark:text-darkAccent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-lightText dark:text-darkText font-mono">
              Systems Thinking
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              I enjoy understanding how components interact across the entire stack:
            </p>
          </div>
        </div>

        {/* Visual Map of Stack Nodes */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 pt-6">
          {systemsThinkingNodes.map((node, index) => (
            <React.Fragment key={index}>
              {/* Node Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="w-full md:w-36 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-lightBg dark:bg-slate-950 p-4 text-center hover:border-lightAccent dark:hover:border-darkAccent hover:shadow-sm transition-all duration-300 cursor-default"
              >
                <div className="text-xs font-mono font-bold text-lightAccent dark:text-darkAccent uppercase tracking-wide">
                  {node.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  {node.desc}
                </div>
              </motion.div>

              {/* Arrow connector (hidden on last node) */}
              {index < systemsThinkingNodes.length - 1 && (
                <div className="flex items-center justify-center rotate-90 md:rotate-0 my-1 md:my-0 text-slate-300 dark:text-slate-700">
                  <FaChevronRight className="animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Future Direction Section */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-lightCard dark:bg-darkCard p-8 hover:border-lightAccent/20 dark:hover:border-darkAccent/20 transition-colors duration-300 group">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-lightAccent/10 dark:bg-darkAccent/10 rounded-2xl group-hover:scale-105 transition-transform duration-300">
            <FaRocket className="text-4xl text-lightAccent dark:text-darkAccent" />
          </div>
          <div className="space-y-4 flex-1">
            <h2 className="text-2xl font-bold text-lightText dark:text-darkText font-mono">
              Future Direction
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              My long-term goal is to become an engineer capable of designing and deploying complete, resilient systems, from microservices backend architecture to automated cloud infrastructure and AI-powered operational tools.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EngineeringPhilosophyPage;
