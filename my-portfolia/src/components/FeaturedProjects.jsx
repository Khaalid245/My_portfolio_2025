import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Cpu, 
  Globe, 
  Zap, 
  Lock, 
  Database, 
  ShieldCheck, 
  Shuffle, 
  AlertCircle, 
  CheckCircle, 
  Terminal 
} from 'lucide-react';

const FeaturedProjects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const hoverEffect = {
    y: -6,
    transition: { duration: 0.3, ease: 'easeOut' }
  };

  return (
    <div className="border-b border-borderPrimary pb-24 pt-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-heading text-[36px] md:text-[56px] font-extrabold tracking-tight text-textPrimary leading-none">
            Selected Engineering Projects
          </h2>
          <p className="text-[18px] font-body text-textSecondary leading-relaxed">
            A collection of backend systems, full-stack applications, and technical experiments focused on solving real-world problems.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-1.5 text-[15px] font-mono text-accent hover:text-accentHover font-semibold transition-colors duration-300 group"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Asymmetrical Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Large Featured Project: Distributed E-Commerce */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          className="group lg:col-span-2 rounded-[20px] border border-borderPrimary bg-cardBg p-6 lg:p-7 shadow-sm hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.1)] hover:border-accent transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="font-mono text-[10px] text-accent uppercase tracking-widest font-semibold block">
                Featured Case Study &bull; Systems Architecture
              </div>
              <h3 className="font-heading text-[21px] md:text-[23px] font-bold text-textPrimary tracking-tight leading-tight">
                Femvelle E-Commerce Platform
              </h3>
              <p className="text-[14px] md:text-[15px] font-body text-textSecondary leading-relaxed">
                A full-stack modest fashion commerce platform supporting the complete customer journey from product discovery to secure checkout.
              </p>
            </div>

            {/* Problem / Solution fields (2 columns on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-[13px] md:text-[14px]">
              <div className="p-3 bg-bgPrimary/30 border border-borderPrimary/60 rounded-xl space-y-1">
                <span className="flex items-center gap-1.5 text-accent font-semibold text-[11px] uppercase tracking-wider">
                  <AlertCircle size={13} className="text-accent" />
                  Problem
                </span>
                <p className="text-textSecondary leading-relaxed">
                  Handling duplicate orders, database lockups under checkout pressure, and verifying payment webhook transitions.
                </p>
              </div>
              <div className="p-3 bg-bgPrimary/30 border border-borderPrimary/60 rounded-xl space-y-1">
                <span className="flex items-center gap-1.5 text-emerald-500 font-semibold text-[11px] uppercase tracking-wider">
                  <CheckCircle size={13} className="text-emerald-500" />
                  Solution
                </span>
                <p className="text-textSecondary leading-relaxed">
                  Stripe payment webhook verification, Redis task routing, transaction safe DB saves, and custom token rotation rules.
                </p>
              </div>
            </div>

            {/* Horizontal Blueprint Flowbar */}
            <div className="w-full bg-bgPrimary/40 border border-borderPrimary/85 rounded-xl p-3 flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] text-textSecondary select-none transition-all duration-300 group-hover:border-accent/20">
              <div className="text-[8.5px] font-bold text-textMuted uppercase tracking-wider mr-1">Blueprint:</div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-cardBg border border-borderPrimary rounded-lg">
                <Globe size={12} className="text-accent" />
                <span className="font-semibold text-textPrimary text-[9.5px]">React + TS Storefront</span>
                <span className="text-[8px] font-bold px-1 py-0.5 bg-accent/5 border border-accent/10 rounded text-accent">POST</span>
              </div>
              <span className="text-textMuted">&rarr;</span>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-cardBg border border-borderPrimary rounded-lg">
                <Zap size={12} className="text-[#10B981]" />
                <span className="font-semibold text-textPrimary text-[9.5px]">Redis Cache</span>
                <span className="text-[8px] font-bold px-1 py-0.5 bg-emerald-500/5 border border-emerald-500/10 rounded text-emerald-500">HIT</span>
              </div>
              <span className="text-textMuted">&rarr;</span>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-cardBg border border-borderPrimary rounded-lg">
                <Lock size={12} className="text-rose-500" />
                <span className="font-semibold text-textPrimary text-[9.5px]">Django REST + MySQL</span>
                <span className="text-[8px] font-bold px-1 py-0.5 bg-rose-500/5 border border-rose-500/10 rounded text-rose-500">LOCK</span>
              </div>
            </div>
          </div>

          {/* Highlights & Tech Stack & Actions */}
          <div className="space-y-3 border-t border-borderPrimary/60 pt-3 mt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono font-bold text-textMuted uppercase tracking-wider mb-1">Technologies</div>
                <div className="flex flex-wrap gap-1">
                  {["React.js", "TypeScript", "Django REST", "MySQL", "Redis", "Docker", "Stripe"].map((t, i) => (
                    <span key={i} className="text-[12px] font-mono text-textPrimary bg-bgPrimary px-2 py-0.5 rounded-lg border border-borderPrimary select-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 text-[12px] font-mono">
                <Link to="/portfolio" className="inline-flex items-center gap-1 text-accent hover:text-accentHover font-semibold transition-colors duration-200 group/btn">
                  Explore Project <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                </Link>
                <a href="https://github.com/Khaalid245/FEMVELLA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-textSecondary hover:text-textPrimary transition-colors duration-200">
                  GitHub &rarr;
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Project 1: Asynchronous Analytics Ingestion */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          className="group lg:col-span-1 rounded-[20px] border border-borderPrimary bg-cardBg p-6 lg:p-7 shadow-sm hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.1)] hover:border-accent transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4 flex-grow flex flex-col justify-between">
            <div className="space-y-3">
              {/* Architecture Blueprint Flowbar */}
              <div className="w-full bg-bgPrimary/40 border border-borderPrimary/85 rounded-xl p-2.5 flex items-center justify-center gap-2 font-mono text-[9px] text-textSecondary select-none transition-all duration-300 group-hover:border-accent/20">
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-cardBg border border-borderPrimary rounded-md">
                  <Terminal size={10} className="text-accent" />
                  <span className="font-semibold text-textPrimary text-[9px]">Flask API</span>
                  <span className="text-[7.5px] font-bold px-0.5 bg-accent/5 rounded text-accent">PUSH</span>
                </div>
                <span className="text-textMuted">&rarr;</span>
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-cardBg border border-borderPrimary rounded-md">
                  <Database size={10} className="text-[#10B981]" />
                  <span className="font-semibold text-textPrimary text-[9px]">MySQL DB</span>
                  <span className="text-[7.5px] font-bold px-0.5 bg-emerald-500/5 rounded text-emerald-500">INDEX</span>
                </div>
              </div>

              <div className="pt-1">
                <div className="font-mono text-[10px] text-accent uppercase tracking-widest font-semibold block mb-0.5">
                  Queue &amp; Ingestion
                </div>
                <h3 className="font-heading text-[21px] font-bold text-textPrimary tracking-tight leading-tight">
                  Asynchronous Analytics Pipeline
                </h3>
              </div>
              
              <p className="text-[14px] md:text-[15px] font-body text-textSecondary leading-relaxed">
                A write-optimized pipeline offloading heavy calculations from synchronous user requests.
              </p>

              {/* Problem & Solution with Icons */}
              <div className="space-y-2 pt-0.5 text-[13px] md:text-[14px]">
                <div className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-textSecondary leading-relaxed">
                    <span className="font-bold text-textPrimary">Problem:</span> High database write contention delaying learner activity metrics.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-textSecondary leading-relaxed">
                    <span className="font-bold text-textPrimary">Solution:</span> Designed index-matched schemas and Flask queues.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="space-y-3 border-t border-borderPrimary/60 pt-3 mt-3">
              <div>
                <div className="text-[10px] font-mono font-bold text-textMuted uppercase tracking-wider mb-1">Technologies</div>
                <div className="flex flex-wrap gap-1">
                  {["React.js", "Flask", "MySQL", "Tailwind"].map((t, i) => (
                    <span key={i} className="text-[12px] font-mono text-textPrimary bg-bgPrimary px-2 py-0.5 rounded-lg border border-borderPrimary select-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-1 text-[12px] font-mono">
                <Link to="/portfolio" className="inline-flex items-center gap-1 text-accent hover:text-accentHover font-semibold transition-colors duration-200 group/btn">
                  Explore Project <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                </Link>
                <a href="https://github.com/Khaalid245?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-textPrimary transition-colors duration-200">
                  GitHub &rarr;
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Project 2: Decoupled API Gateway */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          className="group lg:col-span-1 rounded-[20px] border border-borderPrimary bg-cardBg p-6 lg:p-7 shadow-sm hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.1)] hover:border-accent transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4 flex-grow flex flex-col justify-between">
            <div className="space-y-3">
              {/* Architecture Blueprint Flowbar */}
              <div className="w-full bg-bgPrimary/40 border border-borderPrimary/85 rounded-xl p-2.5 flex items-center justify-center gap-2 font-mono text-[9px] text-textSecondary select-none transition-all duration-300 group-hover:border-accent/20">
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-cardBg border border-borderPrimary rounded-md">
                  <ShieldCheck size={10} className="text-accent" />
                  <span className="font-semibold text-textPrimary text-[9px]">Client CORS</span>
                  <span className="text-[7.5px] font-bold px-0.5 bg-accent/5 rounded text-accent">GUARD</span>
                </div>
                <span className="text-textMuted">&rarr;</span>
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-cardBg border border-borderPrimary rounded-md">
                  <Shuffle size={10} className="text-[#10B981]" />
                  <span className="font-semibold text-textPrimary text-[9px]">Express Proxy</span>
                  <span className="text-[7.5px] font-bold px-0.5 bg-emerald-500/5 rounded text-emerald-500">JWT</span>
                </div>
              </div>

              <div className="pt-1">
                <div className="font-mono text-[10px] text-accent uppercase tracking-widest font-semibold block mb-0.5">
                  API Security
                </div>
                <h3 className="font-heading text-[21px] font-bold text-textPrimary tracking-tight leading-tight">
                  Decoupled Delivery Gateway
                </h3>
              </div>
              
              <p className="text-[14px] md:text-[15px] font-body text-textSecondary leading-relaxed">
                A secure API gateway proxy managing authentication and access controls for decoupled frontends.
              </p>

              {/* Problem & Solution with Icons */}
              <div className="space-y-2 pt-0.5 text-[13px] md:text-[14px]">
                <div className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-textSecondary leading-relaxed">
                    <span className="font-bold text-textPrimary">Problem:</span> Monolithic token vulnerability risks and coupled service pipelines.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-textSecondary leading-relaxed">
                    <span className="font-bold text-textPrimary">Solution:</span> Express Gateway proxy configuration and secure token rotation.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="space-y-3 border-t border-borderPrimary/60 pt-3 mt-3">
              <div>
                <div className="text-[10px] font-mono font-bold text-textMuted uppercase tracking-wider mb-1">Technologies</div>
                <div className="flex flex-wrap gap-1">
                  {["React.js", "Express", "MySQL", "Sequelize"].map((t, i) => (
                    <span key={i} className="text-[12px] font-mono text-textPrimary bg-bgPrimary px-2 py-0.5 rounded-lg border border-borderPrimary select-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-1 text-[12px] font-mono">
                <Link to="/portfolio" className="inline-flex items-center gap-1 text-accent hover:text-accentHover font-semibold transition-colors duration-200 group/btn">
                  Explore Project <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                </Link>
                <a href="https://github.com/Khaalid245?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-textPrimary transition-colors duration-200">
                  GitHub &rarr;
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Large Visual Portfolio CTA Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          className="group lg:col-span-2 rounded-[20px] border border-borderPrimary bg-cardBg p-6 lg:p-7 shadow-sm hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.1)] hover:border-accent transition-all duration-300 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Ambient background lines for decoration */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M20 0 L100 80 M40 0 L100 60 M60 0 L100 40 M80 0 L100 20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          <div className="w-full lg:w-[62%] space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-bgPrimary border border-borderPrimary/85 group-hover:border-accent/20 rounded-lg block text-accent group-hover:scale-110 transition-all duration-300">
                <Cpu size={20} />
              </span>
              <h3 className="font-heading text-[18px] md:text-[20px] font-bold text-textPrimary tracking-tight">
                Interested in seeing more system designs?
              </h3>
            </div>
            
            <p className="text-[14px] font-body text-textSecondary leading-relaxed">
              {"I've built several database systems, API proxies, DevOps automation pipelines, and machine learning models. You can view all my code logs, deployment pipelines, and architecture diagrams in my full case study index."}
            </p>
          </div>
          
          <div className="w-full lg:w-[32%] flex flex-col sm:flex-row lg:flex-col gap-3 items-stretch lg:items-end justify-center">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accentHover px-5 py-3 font-mono text-[13px] text-white font-bold transition-all duration-350 shadow hover:-translate-y-0.5 w-full text-center whitespace-nowrap"
            >
              Explore All Systems &rarr;
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-lg border border-borderPrimary bg-bgPrimary/40 hover:bg-bgPrimary px-5 py-3 font-mono text-[13px] text-textPrimary font-semibold transition-all duration-350 w-full text-center whitespace-nowrap"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default FeaturedProjects;
