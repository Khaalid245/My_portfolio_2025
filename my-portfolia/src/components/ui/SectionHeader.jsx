/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const SectionHeader = ({
  title,
  description,
  className = '',
  align = 'left',
  action,
  ...props
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 ${isCenter ? 'items-center text-center mx-auto' : 'items-start'} ${className}`}
      {...props}
    >
      <div className={`space-y-2 max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
        <h2 className="font-heading text-section font-bold tracking-tight text-textPrimary">
          {title}
        </h2>
        {description && (
          <p className="text-sm font-body text-textSecondary/90 max-w-xl">
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className={`flex-shrink-0 ${isCenter ? 'w-full flex justify-center' : ''}`}>
          {action}
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
