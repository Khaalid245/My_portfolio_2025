import profilePic from '../assets/khalidProfile.jpg';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import CircularProfile from './ui/CircularProfile';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 8, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };
  return (
    <div className="border-b border-borderPrimary pt-6 pb-20 px-8 lg:px-20 lg:mb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full"
      >
        {/* LEFT COLUMN: Clean Typography, Natural Language Intro, CTAs */}
        <div className="w-full lg:max-w-[580px] flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Hello, I'm */}
          <motion.span 
            variants={itemVariants} 
            className="text-xs font-mono text-textMuted uppercase tracking-widest block font-semibold mb-3"
          >
            Hello, I&apos;m
          </motion.span>
          
          {/* Name */}
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl lg:text-6xl font-heading font-bold tracking-tight text-textPrimary leading-[1.1] mb-5"
          >
            Khalid Abdillahi
          </motion.h1>
          
          {/* Job Title */}
          <motion.p 
            variants={itemVariants} 
            className="text-2xl lg:text-3xl font-heading font-semibold text-textSecondary mb-7"
          >
            Backend-Focused Full-Stack Developer
          </motion.p>
          
          {/* Description Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base text-textSecondary leading-loose max-w-[520px] font-normal mb-9"
          >
            Backend-focused full-stack developer building modern AI-powered systems and scalable applications.
          </motion.p>

          {/* TABLET / MOBILE PORTRAIT (repositioned under description with breathing room) */}
          <motion.div 
            variants={itemVariants} 
            className="lg:hidden w-full flex justify-center py-6 mb-8"
          >
            <CircularProfile image={profilePic} />
          </motion.div>

          {/* Action Buttons & Text Link */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 justify-center lg:justify-start w-full"
          >
            <Button
              to="/portfolio"
              variant="primary"
            >
              View Projects &rarr;
            </Button>
            <Button
              to="/about/resume"
              variant="secondary"
            >
              Resume
            </Button>
            
            <div className="flex items-center gap-4 pl-2 font-mono text-xs uppercase tracking-wider font-semibold">
              <a
                href="https://github.com/Khaalid245?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="text-textSecondary hover:text-accent transition duration-200"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Center visual anchor profile portrait (Desktop Only) */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex lg:flex-1 justify-center lg:justify-end"
        >
          <CircularProfile image={profilePic} />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;
