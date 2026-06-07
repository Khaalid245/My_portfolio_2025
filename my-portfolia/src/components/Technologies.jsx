import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaPython, FaDocker, FaLinux, FaBrain } from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiNextdotjs, 
  SiDjango, 
  SiMysql, 
  SiPostgresql,
  SiRedis,
  SiGithubactions,
  SiTypescript,
  SiExpress,
  SiOpenai,
  SiOracle
} from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-textPrimary" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-slate-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Django", icon: SiDjango, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-slate-700 dark:text-slate-200" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "Oracle DB", icon: SiOracle, color: "text-red-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Redis", icon: SiRedis, color: "text-red-500" },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-400" },
        { name: "CI/CD Pipelines", icon: SiGithubactions, color: "text-blue-500" },
        { name: "Linux", icon: FaLinux, color: "text-slate-600 dark:text-slate-300" },
      ],
    },
    {
      title: "AI Systems",
      skills: [
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "LLM APIs", icon: SiOpenai, color: "text-green-400" },
        { name: "Vector Databases", icon: FaBrain, color: "text-emerald-500" },
        { name: "AI Workflows", icon: FaBrain, color: "text-blue-400" },
      ],
    },
  ];

  return (
    <div className="border-b border-borderPrimary pb-20">
      <div className="my-20 text-center space-y-3">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-textPrimary"
        >
          Technical Stack
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-body text-textSecondary max-w-xl mx-auto"
        >
          Technologies and workflows I use to build scalable applications, backend systems, and AI-powered solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="rounded-2xl border border-borderPrimary bg-cardBg/45 p-5 shadow-sm hover:border-accent/30 transition-colors duration-300"
          >
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-textMuted border-b border-borderPrimary/60 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-col gap-3">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 rounded-xl border border-borderPrimary/80 bg-bgSecondary/45 px-3 py-2 hover:border-accent/30 hover:bg-bgSecondary/70 transition duration-300 group"
                  >
                    <IconComponent className={`text-xl ${skill.color} group-hover:scale-110 transition duration-300`} />
                    <span className="text-xs font-sans font-medium text-textSecondary group-hover:text-textPrimary transition duration-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
