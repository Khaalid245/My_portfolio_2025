/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  to,
  href,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono font-medium rounded-xl transition-all duration-300 select-none text-caption py-3 px-6 gap-2 border shadow-sm cursor-pointer";
  
  const variants = {
    primary: "bg-accent border-accent text-white dark:text-slate-950 hover:bg-accentHover hover:border-accentHover shadow-indigo-500/10",
    secondary: "bg-bgSecondary border-borderPrimary text-textPrimary hover:bg-bgPrimary hover:border-textMuted",
    outline: "bg-transparent border-borderPrimary text-textPrimary hover:bg-bgSecondary hover:border-textMuted"
  };

  const Component = to ? Link : href ? 'a' : 'button';
  
  const motionProps = {
    whileHover: { y: -2, scale: 1.01 },
    whileTap: { scale: 0.99 },
    transition: { type: 'spring', stiffness: 450, damping: 17 },
  };

  const buttonProps = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    onClick,
    ...props
  };

  if (to) buttonProps.to = to;
  if (href) {
    buttonProps.href = href;
    buttonProps.target = "_blank";
    buttonProps.rel = "noopener noreferrer";
  }
  if (!to && !href) buttonProps.type = type;

  // Render a framer-motion wrapped component
  const MotionComponent = motion(Component);

  return (
    <MotionComponent {...motionProps} {...buttonProps}>
      {icon && iconPosition === 'left' && <span className="text-sm">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="text-sm">{icon}</span>}
    </MotionComponent>
  );
};

export default Button;
