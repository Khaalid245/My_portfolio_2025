/* eslint-disable react/prop-types */
const Badge = ({
  children,
  className = '',
  variant = 'default',
  ...props
}) => {
  const baseStyles = "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-mono font-medium tracking-normal select-none transition-colors duration-200";
  
  const variants = {
    default: "bg-bgSecondary border-borderPrimary text-textSecondary hover:border-textMuted",
    accent: "bg-accent/5 border-accent/20 text-accent hover:bg-accent/10",
    success: "bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
