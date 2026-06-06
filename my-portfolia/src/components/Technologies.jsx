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
  SiOpenai
} from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-slate-100" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Django", icon: SiDjango, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-slate-200" },
      ],
    },
    {
      title: "Databases",
      skills: [
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
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },
        { name: "Linux", icon: FaLinux, color: "text-slate-300" },
      ],
    },
    {
      title: "AI",
      skills: [
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "OpenAI APIs", icon: SiOpenai, color: "text-green-400" },
        { name: "Vector Databases", icon: FaBrain, color: "text-emerald-500" },
      ],
    },
  ];

  return (
    <div className="border-b border-slate-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold tracking-tight text-slate-100"
      >
        Technical Stack
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="rounded-2xl border border-slate-900 bg-slate-950/40 p-5 shadow-sm hover:border-slate-800/80 transition-colors duration-300"
          >
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-slate-400 border-b border-slate-900 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-col gap-3">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 rounded-xl border border-slate-900 bg-slate-950 px-3 py-2 hover:border-slate-800 hover:bg-slate-900/40 transition duration-300 group"
                  >
                    <IconComponent className={`text-xl ${skill.color} group-hover:scale-110 transition duration-300`} />
                    <span className="text-xs font-medium text-slate-300 group-hover:text-slate-100 transition duration-300">
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
