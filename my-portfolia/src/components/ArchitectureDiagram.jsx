/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

// Helper wrapper for layout nodes
const Node = ({ title, desc }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="w-full md:w-36 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] p-3 text-center shadow-sm hover:border-lightAccent dark:hover:border-darkAccent transition-colors duration-300"
  >
    <div className="text-xs font-mono font-bold text-lightAccent dark:text-darkAccent uppercase tracking-wider">
      {title}
    </div>
    {desc && <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">{desc}</div>}
  </motion.div>
);

const Connector = () => (
  <div className="flex items-center justify-center text-slate-300 dark:text-slate-700 py-1 md:py-0 md:px-1">
    <FaChevronRight className="hidden md:block text-xs" />
    <FaChevronDown className="block md:hidden text-xs" />
  </div>
);

// 1. API Architecture Diagram
export const ApiArchitecture = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-4 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
      <Node title="Client" desc="Web / Mobile" />
      <Connector />
      <Node title="API Gateway" desc="Auth & Rate Limit" />
      <Connector />
      <Node title="Business Logic" desc="Express Services" />
      <Connector />
      <Node title="Database" desc="MySQL / Postgres" />
    </div>
  );
};

// 2. Queue System Diagram
export const QueueSystem = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-4 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
      <Node title="Application" desc="Express Router" />
      <Connector />
      <Node title="Redis Queue" desc="Asynchronous Job" />
      <Connector />
      <Node title="Worker" desc="Node Job Processor" />
      <Connector />
      <Node title="Notification" desc="Email / Slack Dispatch" />
    </div>
  );
};

// 3. AI Workflow Diagram
export const AiWorkflow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-4 bg-slate-50/50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
      <Node title="User Input" desc="Prompt Query" />
      <Connector />
      <Node title="Prompt Layer" desc="Context & RAG" />
      <Connector />
      <Node title="LLM Core" desc="Gemini / OpenAI API" />
      <Connector />
      <Node title="Response Out" desc="Clean Data Output" />
    </div>
  );
};

// Mini project architecture flow for course platform
export const CoursePlatformFlow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200/40 dark:border-slate-800/40 w-full max-w-lg mx-auto">
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        Frontend (React)
      </div>
      <Connector />
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        REST API (Express)
      </div>
      <Connector />
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        MySQL (Sequelize)
      </div>
      <Connector />
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        Redis Queue &rarr; Worker
      </div>
    </div>
  );
};

// Mini project architecture flow for distributed commerce
export const CommerceFlow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200/40 dark:border-slate-800/40 w-full max-w-lg mx-auto">
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        API Gateway
      </div>
      <Connector />
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        Redis Catalog Cache
      </div>
      <Connector />
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        MySQL Lock Layer (InnoDB)
      </div>
    </div>
  );
};

// Mini project architecture flow for event pipeline
export const EventPipelineFlow = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 p-3 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200/40 dark:border-slate-800/40 w-full max-w-lg mx-auto">
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        Flask Queue API
      </div>
      <Connector />
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        MySQL Analytics Index
      </div>
      <Connector />
      <div className="text-[10px] font-mono font-bold px-2 py-1 bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        React Progress Dashboard
      </div>
    </div>
  );
};
