/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Server, Settings, Brain } from 'lucide-react';

const MetricCard = ({ category, value, icon: Icon, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, y: -2 }}
      className={`absolute bg-cardBg border border-borderPrimary rounded-xl p-3 shadow-md hover:shadow-lg hover:border-accent/40 transition-all duration-200 hidden lg:flex items-center gap-3 min-w-[165px] max-w-[190px] select-none z-20 ${className}`}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent text-white flex-shrink-0 shadow-sm shadow-accent/20">
        <Icon size={20} />
      </div>
      <div className="flex flex-col text-left justify-center">
        <span className="text-[9px] font-mono text-textMuted uppercase tracking-wider font-bold leading-none mb-1">
          {category}
        </span>
        <span className="text-[13px] font-heading font-bold text-textPrimary leading-tight">
          {value}
        </span>
      </div>
    </motion.div>
  );
};

const CircularProfile = ({ image, className = '' }) => {
  return (
    <div className={`flex items-center justify-center w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[540px] lg:h-[540px] xl:w-[640px] xl:h-[640px] ${className}`}>
      <div className="scale-[0.42] sm:scale-[0.62] lg:scale-[0.84] xl:scale-100 origin-center transition-all duration-300 relative w-[640px] h-[640px] flex items-center justify-center select-none">

        {/* CENTER PORTRAIT (LANDSCAPE) - rounded 3xl */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="p-1.5 border border-borderPrimary/30 rounded-[32px] bg-cardBg/30 shadow-md z-10"
        >
          <img
            src={image}
            alt="Khalid Abdillahi Portrait"
            className="w-[400px] h-[440px] rounded-[24px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-350"
          />
        </motion.div>

        {/* FLOATING METRICS CARDS (OVERLAPPING PORTRAIT EDGES) */}
        
        {/* 1. EXPERIENCE CARD (Top-Left) */}
        <MetricCard
          category="Experience"
          value="2+ Years"
          icon={Briefcase}
          className="top-[125px] left-[65px]"
          delay={0.1}
        />

        {/* 2. PROJECTS CARD (Top-Right) */}
        <MetricCard
          category="Projects"
          value="10+ Built"
          icon={Cpu}
          className="top-[125px] right-[65px]"
          delay={0.15}
        />

        {/* 3. BACKEND CARD (Left-Center) */}
        <MetricCard
          category="Backend"
          value="Node & Go"
          icon={Server}
          className="top-[270px] left-[35px]"
          delay={0.2}
        />

        {/* 4. DEVOPS CARD (Right-Center) */}
        <MetricCard
          category="DevOps"
          value="Docker & AWS"
          icon={Settings}
          className="top-[270px] right-[35px]"
          delay={0.25}
        />

        {/* 5. AI SYSTEMS CARD (Bottom-Center) */}
        <MetricCard
          category="AI Systems"
          value="AI Workflows"
          icon={Brain}
          className="bottom-[100px] left-1/2 -translate-x-1/2"
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default CircularProfile;
