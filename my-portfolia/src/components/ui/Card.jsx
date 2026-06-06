/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) => {
  const baseStyles = "rounded-2xl border border-borderPrimary bg-cardBg p-6 transition-all duration-300 relative overflow-hidden";
  
  const motionProps = hoverEffect
    ? {
        whileHover: { 
          scale: 1.01,
          y: -3,
          borderColor: 'var(--color-accent)',
          boxShadow: '0 10px 30px -10px rgba(99, 102, 241, 0.15)'
        },
        transition: { type: 'spring', stiffness: 400, damping: 18 }
      }
    : {};

  return (
    <motion.div
      {...motionProps}
      onClick={onClick}
      className={`${baseStyles} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
