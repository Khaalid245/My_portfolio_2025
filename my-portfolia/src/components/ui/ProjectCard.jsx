/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Card from './Card';
import Badge from './Badge';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({
  title,
  image,
  problem,
  stack = [],
  link = '/portfolio',
  architecture,
  ...props
}) => {
  return (
    <Card
      hoverEffect={true}
      className="flex flex-col justify-between h-full group"
      {...props}
    >
      <div>
        {/* Image / Diagram Container */}
        {image && (
          <div className="mb-5 overflow-hidden rounded-xl border border-borderPrimary bg-bgSecondary/30 h-48 relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        )}
        
        {/* Title */}
        <h3 className="mb-2 font-heading text-lg font-bold text-textPrimary leading-tight flex items-start justify-between gap-2">
          <span className="group-hover:text-accent transition-colors duration-300">{title}</span>
          <ArrowUpRight className="text-textMuted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" size={18} />
        </h3>
        
        {/* Architecture snippet if available */}
        {architecture && (
          <div className="font-mono text-[10px] text-accent mb-3 uppercase tracking-wider font-semibold">
            {architecture}
          </div>
        )}

        {/* Problem Description */}
        <p className="text-xs text-textSecondary mb-4 leading-relaxed line-clamp-3 font-mono">
          {problem}
        </p>
      </div>

      {/* Footer / Stack Tag Pills */}
      <div className="flex flex-wrap justify-between items-center gap-3 mt-4 pt-4 border-t border-borderPrimary/60">
        <div className="flex flex-wrap gap-1">
          {stack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="default">
              {tech}
            </Badge>
          ))}
          {stack.length > 3 && (
            <Badge variant="default" className="text-[10px]">
              +{stack.length - 3}
            </Badge>
          )}
        </div>
        <Link
          to={link}
          className="text-xs font-mono text-accent hover:text-accentHover font-semibold transition-colors duration-300"
        >
          Case Study &rarr;
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
