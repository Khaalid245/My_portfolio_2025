/* eslint-disable react/prop-types */
import Card from './Card';
import { Briefcase, Cpu, Server, GitMerge } from 'lucide-react';

const DashboardCard = ({ className = '', ...props }) => {
  const gridItems = [
    {
      value: "2+",
      label: "Years Experience",
      icon: <Briefcase className="text-accent" size={16} />,
    },
    {
      value: "10+",
      label: "Systems Built",
      icon: <Cpu className="text-accent" size={16} />,
    },
    {
      value: "Backend",
      label: "Systems Focus",
      icon: <Server className="text-accent" size={16} />,
    },
    {
      value: "DevOps & AI",
      label: "Continuous Journey",
      icon: <GitMerge className="text-accent" size={16} />,
    },
  ];

  return (
    <Card
      hoverEffect={true}
      className={`p-0 overflow-hidden divide-y divide-borderPrimary border-borderPrimary bg-cardBg shadow-sm ${className}`}
      {...props}
    >
      <div className="grid grid-cols-2 divide-x divide-borderPrimary">
        {/* Cell 1 */}
        <div className="p-5 flex flex-col justify-between h-28 hover:bg-bgSecondary/30 transition-colors duration-200">
          <div className="flex justify-between items-start">
            <span className="text-2xl font-heading font-bold text-accent leading-none">{gridItems[0].value}</span>
            {gridItems[0].icon}
          </div>
          <span className="text-[10px] font-mono font-semibold tracking-tight text-textSecondary uppercase">{gridItems[0].label}</span>
        </div>

        {/* Cell 2 */}
        <div className="p-5 flex flex-col justify-between h-28 hover:bg-bgSecondary/30 transition-colors duration-200">
          <div className="flex justify-between items-start">
            <span className="text-2xl font-heading font-bold text-accent leading-none">{gridItems[1].value}</span>
            {gridItems[1].icon}
          </div>
          <span className="text-[10px] font-mono font-semibold tracking-tight text-textSecondary uppercase">{gridItems[1].label}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-borderPrimary">
        {/* Cell 3 */}
        <div className="p-5 flex flex-col justify-between h-28 hover:bg-bgSecondary/30 transition-colors duration-200">
          <div className="flex justify-between items-start">
            <span className="text-base font-heading font-bold text-textPrimary leading-none">{gridItems[2].value}</span>
            {gridItems[2].icon}
          </div>
          <span className="text-[10px] font-mono font-semibold tracking-tight text-textSecondary uppercase">{gridItems[2].label}</span>
        </div>

        {/* Cell 4 */}
        <div className="p-5 flex flex-col justify-between h-28 hover:bg-bgSecondary/30 transition-colors duration-200">
          <div className="flex justify-between items-start">
            <span className="text-[15px] font-heading font-bold text-textPrimary leading-none">{gridItems[3].value}</span>
            {gridItems[3].icon}
          </div>
          <span className="text-[10px] font-mono font-semibold tracking-tight text-textSecondary uppercase">{gridItems[3].label}</span>
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;
