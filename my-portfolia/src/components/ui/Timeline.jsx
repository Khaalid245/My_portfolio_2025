/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import Badge from './Badge';

const Timeline = ({ items = [] }) => {
  return (
    <div className="relative border-l-2 border-borderPrimary ml-3 pl-8 space-y-12 py-2">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative"
        >
          {/* Vertical timeline node indicator */}
          <div className="absolute -left-[42px] top-1.5 h-5 w-5 rounded-full border-4 border-cardBg bg-accent shadow-sm" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <div>
              <h3 className="font-heading text-lg font-bold text-textPrimary leading-snug">
                {item.title}
              </h3>
              <span className="text-sm font-semibold text-accent">
                {item.subtitle}
              </span>
            </div>
            {item.year && (
              <span className="text-xs font-mono text-textSecondary bg-bgSecondary px-2.5 py-1 rounded-lg border border-borderPrimary">
                {item.year}
              </span>
            )}
          </div>

          {item.bullets && item.bullets.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 mb-4 text-xs font-mono text-textSecondary leading-relaxed">
              {item.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          )}

          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.technologies.map((tech, tIndex) => (
                <Badge key={tIndex} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
