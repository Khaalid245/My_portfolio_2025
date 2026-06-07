import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Server, Workflow, Brain } from 'lucide-react';

const EngineeringFocus = () => {
  const devopsTags = ["Docker", "CI/CD Pipelines", "Linux Shell", "Nginx"];
  const aiTags = ["Python", "LLM APIs", "Vector Databases", "AI Workflows"];

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const hoverEffect = {
    y: -4,
    transition: { duration: 0.3, ease: 'easeOut' }
  };

  return (
    <div className="border-b border-borderPrimary pb-24 pt-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <h2 className="font-heading text-[36px] md:text-[48px] font-extrabold tracking-tight text-textPrimary leading-none">
          What I Enjoy Building
        </h2>
        <p className="text-[17px] md:text-[19px] font-body text-textSecondary max-w-2xl leading-relaxed">
          I focus on building scalable applications, backend systems, automating DevOps workflows, and integrating practical AI systems.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Large Featured Card (Backend Systems) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          className="group md:col-span-2 rounded-2xl border border-borderPrimary bg-cardBg p-8 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.08)] hover:border-accent transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full w-full">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="p-3 bg-bgPrimary border border-borderPrimary/85 group-hover:border-accent/20 rounded-xl block text-accent group-hover:scale-110 transition-all duration-300">
                    <Server size={32} />
                  </span>
                  <h3 className="font-heading text-[24px] font-bold text-textPrimary tracking-tight">
                    Full-Stack Web Apps
                  </h3>
                </div>
                <p className="text-[17px] font-body text-textSecondary leading-relaxed max-w-xl">
                  I build complete web applications, coordinating responsive frontends, server-side APIs, and database schemas with a focus on reliability and performance.
                </p>
              </div>
              <div>
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center gap-1.5 text-[15px] font-mono text-accent hover:text-accentHover font-semibold transition-colors duration-300 group/link"
                >
                  View My Projects 
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
                </Link>
              </div>
            </div>
            
            {/* Right Architecture Mock Column */}
            <div className="lg:col-span-5 flex items-center h-full">
              <div className="w-full rounded-2xl border border-borderPrimary bg-bgPrimary/40 overflow-hidden shadow-inner font-mono text-[13px] text-textSecondary">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-bgPrimary/60 border-b border-borderPrimary/85">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-textMuted font-mono">sys_arch.json</span>
                  <div className="w-10" />
                </div>
                {/* Window Content */}
                <div className="p-5 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-wider">APIs & Frontend</span>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">React & Next.js</span>
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">REST APIs</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Security & Auth</span>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">JWT Auth</span>
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">Token Rotation</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Data & Cache</span>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">Oracle DB</span>
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">MySQL & PGSQL</span>
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">MongoDB</span>
                      <span className="px-2.5 py-1 bg-cardBg border border-borderPrimary rounded-lg text-[13px] font-medium transition-colors hover:border-accent/30 select-none">Redis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DevOps & Infrastructure Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          className="group rounded-2xl border border-borderPrimary bg-cardBg p-8 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.08)] hover:border-accent transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-6 flex-grow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="p-2.5 bg-bgPrimary border border-borderPrimary/85 group-hover:border-accent/20 rounded-xl block text-accent group-hover:scale-110 transition-all duration-300">
                  <Workflow size={24} />
                </span>
                <h3 className="font-heading text-[24px] font-bold text-textPrimary tracking-tight">
                  DevOps & Infrastructure
                </h3>
              </div>
              <p className="text-[17px] font-body text-textSecondary leading-relaxed">
                I focus on automating build workflows, containerizing applications, and configuring Linux servers to improve development speed and deployment stability.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 mb-6">
              {devopsTags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bgPrimary/60 border border-borderPrimary/80 rounded-lg text-[14px] font-mono text-textSecondary hover:border-accent/30 hover:bg-bgPrimary transition-all duration-300 select-none"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Link 
              to="/lab" 
              className="inline-flex items-center gap-1.5 text-[15px] font-mono text-accent hover:text-accentHover font-semibold transition-colors duration-300 group/link"
            >
              Explore Lab 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>
        </motion.div>

        {/* Practical AI Systems Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={hoverEffect}
          viewport={{ once: true }}
          className="group rounded-2xl border border-borderPrimary bg-cardBg p-8 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.08)] hover:border-accent transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-6 flex-grow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="p-2.5 bg-bgPrimary border border-borderPrimary/85 group-hover:border-accent/20 rounded-xl block text-accent group-hover:scale-110 transition-all duration-300">
                  <Brain size={24} />
                </span>
                <h3 className="font-heading text-[24px] font-bold text-textPrimary tracking-tight">
                  Full-Stack AI Systems
                </h3>
              </div>
              <p className="text-[17px] font-body text-textSecondary leading-relaxed">
                I build applications powered by language models and vector databases, integrating practical AI workflows and data orchestration libraries.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 mb-6">
              {aiTags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bgPrimary/60 border border-borderPrimary/80 rounded-lg text-[14px] font-mono text-textSecondary hover:border-accent/30 hover:bg-bgPrimary transition-all duration-300 select-none"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-1.5 text-[15px] font-mono text-accent hover:text-accentHover font-semibold transition-colors duration-300 group/link"
            >
              Read Experiments 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default EngineeringFocus;
