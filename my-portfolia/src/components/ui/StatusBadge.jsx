/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const StatusBadge = ({
  text,
  color = 'blue', // 'blue', 'green', 'amber'
  className = '',
  ...props
}) => {
  const dotColor = {
    blue: 'bg-indigo-550 dark:bg-indigo-450',
    green: 'bg-emerald-500',
    amber: 'bg-amber-500',
  };

  const bgBorderColor = {
    blue: 'bg-indigo-500/5 border-indigo-500/15 text-indigo-650 dark:text-indigo-400',
    green: 'bg-emerald-500/5 border-emerald-500/15 text-emerald-650 dark:text-emerald-400',
    amber: 'bg-amber-500/5 border-amber-500/15 text-amber-655 dark:text-amber-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-tight select-none shadow-sm ${bgBorderColor[color]} ${className}`}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor[color]}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor[color]}`} />
      </span>
      <span>{text}</span>
    </motion.div>
  );
};

export default StatusBadge;
