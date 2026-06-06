/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const ProfileCard = ({
  image,
  statement,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center space-y-6 ${className}`}
      {...props}
    >
      {/* Portrait Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
        className="relative cursor-pointer"
      >
        <div className="absolute inset-0 bg-accent/5 rounded-full blur-2xl -z-10" />
        
        <div className="p-2 border border-borderPrimary rounded-full bg-cardBg shadow-lg">
          <img
            src={image}
            alt="Khalid Abdillahi Profile"
            className="w-48 h-48 sm:w-52 sm:h-52 rounded-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-550"
          />
        </div>
      </motion.div>

      {/* Engineering statement */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="max-w-xs text-xs font-mono text-textSecondary leading-relaxed border-t border-borderPrimary/60 pt-4"
      >
        &ldquo;{statement}&rdquo;
      </motion.p>
    </div>
  );
};

export default ProfileCard;
