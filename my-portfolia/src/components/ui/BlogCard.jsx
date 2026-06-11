/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Card from './Card';
import { BookOpen } from 'lucide-react';

const BlogCard = ({
  title,
  description,
  date,
  readTime,
  link = '/blog',
  category,
  state,
  ...props
}) => {
  return (
    <Card
      hoverEffect={true}
      className="group flex flex-col justify-between"
      {...props}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {category && (
            <span className="text-[10px] font-mono font-bold bg-accent/5 border border-borderPrimary/85 px-2 py-0.5 rounded text-accent uppercase tracking-wider">
              {category}
            </span>
          )}
          <div className="flex items-center gap-2 text-[11px] font-mono text-textMuted ml-auto">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-[18px] md:text-[20px] font-heading font-bold text-textPrimary mb-2 leading-snug group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-[14px] md:text-[15px] font-body text-textSecondary leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="border-t border-borderPrimary/60 pt-4 flex items-center justify-between">
        <Link
          to={link}
          state={state}
          className="text-[13px] font-mono text-accent hover:text-accentHover font-semibold transition-colors duration-300 inline-flex items-center gap-1.5"
        >
          <BookOpen size={13} />
          <span>Read Article</span>
          <span className="group-hover:translate-x-1.5 transition-transform duration-300 inline-block">&rarr;</span>
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
