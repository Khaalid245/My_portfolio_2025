/* eslint-disable react/prop-types */
import Card from './Card';

const StatCard = ({
  value,
  label,
  className = '',
  ...props
}) => {
  return (
    <Card
      hoverEffect={true}
      className={`p-4 text-center bg-bgSecondary/20 hover:border-accent/40 flex flex-col justify-center items-center ${className}`}
      {...props}
    >
      <div className="font-heading text-card font-bold text-accent mb-1">
        {value}
      </div>
      <div className="font-mono text-[11px] text-textMuted uppercase tracking-wider font-semibold">
        {label}
      </div>
    </Card>
  );
};

export default StatCard;
