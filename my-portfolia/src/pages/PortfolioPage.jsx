import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFolderOpen, FaServer, FaDatabase, FaDocker, FaBrain, FaGlobe, 
  FaShieldAlt, FaBell, FaUsers, FaSearch, FaCode, FaBug, 
  FaRocket, FaProjectDiagram 
} from 'react-icons/fa';
import { 
  ApiArchitecture, QueueSystem, AiWorkflow, 
  CoursePlatformFlow, CommerceFlow, EventPipelineFlow 
} from '../components/ArchitectureDiagram';

const PortfolioPage = () => {
  const stats = [
    { label: '10+ Projects', icon: <FaFolderOpen /> },
    { label: 'Backend Systems', icon: <FaServer /> },
    { label: 'REST APIs', icon: <FaDatabase /> },
    { label: 'Full Stack Apps', icon: <FaGlobe /> },
    { label: 'DevOps Learning', icon: <FaDocker /> },
    { label: 'AI Experiments', icon: <FaBrain /> }
  ];

  const featuredProjects = [
    {
      name: 'Course Management Platform',
      problem: 'Educational institutions struggle to track facilitator activities, allocations, grading status, and communication.',
      solution: 'Built a role-based management platform with activity tracking, Redis notifications, and backend workflow automation.',
      flowComponent: <CoursePlatformFlow />,
      highlights: [
        { label: 'JWT Authentication', icon: <FaShieldAlt className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'MySQL with Sequelize', icon: <FaDatabase className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'Express API Gateway', icon: <FaServer className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'Redis Queue Notifications', icon: <FaBell className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'Role-based Management', icon: <FaUsers className="text-lightAccent dark:text-darkAccent" /> }
      ],
      stack: ['Node.js', 'Express', 'MySQL', 'Redis', 'JWT', 'Sequelize', 'React'],
      github: 'https://github.com/Khaalid245?tab=repositories',
      demo: '#',
      caseStudy: '#'
    },
    {
      name: 'Distributed E-Commerce Orchestration Engine',
      problem: 'Pessimistic concurrency conflicts and database read lockups during high checkout volume.',
      solution: 'Implemented pessimistic row-locking on product inventory and configured a Redis read-through cache.',
      flowComponent: <CommerceFlow />,
      highlights: [
        { label: 'Concurrency Controls', icon: <FaShieldAlt className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'MySQL InnoDB Locks', icon: <FaDatabase className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'Express Gateway API', icon: <FaServer className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'Redis Invalidation Events', icon: <FaBell className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'JWT Token Rotation Sessions', icon: <FaUsers className="text-lightAccent dark:text-darkAccent" /> }
      ],
      stack: ['Node.js', 'Express', 'Redis', 'MySQL', 'JWT', 'Sequelize'],
      github: 'https://github.com/Khaalid245?tab=repositories',
      demo: '#',
      caseStudy: '#'
    },
    {
      name: 'Asynchronous Analytics & Event Pipeline',
      problem: 'Analytics ingestion query paths causing write contention and stalling learner progress trackers.',
      solution: 'Designed index-matched schemas, offloaded calculations asynchronously, and normalized key tables.',
      flowComponent: <EventPipelineFlow />,
      highlights: [
        { label: 'Schema Constraints', icon: <FaShieldAlt className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'MySQL Performance Indexes', icon: <FaDatabase className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'Flask Queue Workers', icon: <FaServer className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'Progress State Machine', icon: <FaBell className="text-lightAccent dark:text-darkAccent" /> },
        { label: 'React Progress Dashboards', icon: <FaUsers className="text-lightAccent dark:text-darkAccent" /> }
      ],
      stack: ['React.js', 'Flask', 'SQLAlchemy', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/Khaalid245?tab=repositories',
      demo: '#',
      caseStudy: '#'
    }
  ];

  const architectureCards = [
    { title: 'API Architecture', desc: 'Gateway proxy layer managing JWT verification, rate limiting, and request routing to Node services.', component: <ApiArchitecture /> },
    { title: 'Queue System', desc: 'Decoupling ingestion endpoints from heavy calculations using Redis-backed asynchronous workers.', component: <QueueSystem /> },
    { title: 'AI Workflow', desc: 'RAG prompt pipeline mapping user parameters, checking semantic vector stores, and parsing LLM output JSON formats.', component: <AiWorkflow /> }
  ];

  const engineeringProcess = [
    { step: 1, title: 'Understand the problem', desc: 'Define operational bottlenecks, query contentions, or infrastructure gaps before touch.', icon: <FaSearch /> },
    { step: 2, title: 'Design the system', desc: 'Model schemas, relational tables, indexing plans, gateways, and distributed caching structures.', icon: <FaProjectDiagram /> },
    { step: 3, title: 'Build the solution', desc: 'Implement clean code modular endpoints, index matching, secure authentication, and queue tasks.', icon: <FaCode /> },
    { step: 4, title: 'Test and improve', desc: 'Measure query latency limits, perform checkout pressure runs, and trace log metrics.', icon: <FaBug /> },
    { step: 5, title: 'Deploy and monitor', desc: 'orchestrate staging containers, configure CDN proxies, and set up automated health pings.', icon: <FaRocket /> }
  ];

  const categories = [
    {
      title: 'Backend Systems',
      icon: <FaServer className="text-xl text-lightAccent dark:text-darkAccent" />,
      projects: ['Course Platform', 'Authentication System', 'API Services']
    },
    {
      title: 'Full Stack Applications',
      icon: <FaGlobe className="text-xl text-lightAccent dark:text-darkAccent" />,
      projects: ['Blog Platform', 'Dashboard Systems', 'Management Systems']
    },
    {
      title: 'DevOps Projects',
      icon: <FaDocker className="text-xl text-lightAccent dark:text-darkAccent" />,
      projects: ['Docker Experiments', 'CI/CD Workflows', 'Deployment Projects']
    },
    {
      title: 'AI Projects',
      icon: <FaBrain className="text-xl text-lightAccent dark:text-darkAccent" />,
      projects: ['Chat Applications', 'RAG Systems', 'AI Integrations']
    }
  ];

  const exploringCards = [
    { title: 'Docker Learning', desc: 'Configuring multi-stage container builds to decrease static production bundles.' },
    { title: 'AI Engineering', desc: 'Developing context-aware agent chains using semantic retrieval models.' },
    { title: 'Machine Learning', desc: 'Exploring data ingestion pipelines and parameter tuning heuristics.' },
    { title: 'System Design', desc: 'Investigating message broker patterns, event-sourcing structures, and load balancing.' },
    { title: 'Open Source', desc: 'Contributing fixes to database connectors and library tooling repositories.' }
  ];

  return (
    <div className="space-y-24 py-10">
      
      {/* 1. Portfolio Hero */}
      <section className="text-center space-y-6 pb-12 border-b border-slate-200 dark:border-slate-800">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono"
        >
          Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400"
        >
          A collection of systems, applications, experiments, and engineering projects I&apos;ve designed and built.
        </motion.p>
        
        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, sIndex) => (
            <div 
              key={sIndex}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-3 flex flex-col items-center gap-2"
            >
              <span className="text-xl text-lightAccent dark:text-darkAccent">{stat.icon}</span>
              <span className="text-xs font-mono font-semibold text-lightText dark:text-darkText">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 2. Featured Projects Section */}
      <section className="space-y-16">
        <h2 className="text-3xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Featured Case Studies
        </h2>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-12 items-stretch ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual Architecture Diagram Area */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center bg-slate-50/50 dark:bg-slate-950/20 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">
                    System Architecture
                  </div>
                  {project.flowComponent}
                </div>

                {/* Details Text Area */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-lightText dark:text-darkText font-mono">
                      {project.name}
                    </h3>
                    
                    <div className="mt-4 space-y-3.5 text-sm leading-relaxed">
                      <p className="text-slate-600 dark:text-slate-400">
                        <span className="font-mono text-xs uppercase tracking-wider text-lightAccent dark:text-darkAccent font-bold mr-2">Problem:</span>
                        {project.problem}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <span className="font-mono text-xs uppercase tracking-wider text-lightAccent dark:text-darkAccent font-bold mr-2">Solution:</span>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Technical Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((hl, hlIdx) => (
                        <div key={hlIdx} className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                          <span className="text-sm">{hl.icon}</span>
                          <span>{hl.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & Links */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2 text-xs font-mono">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-lightAccent dark:text-darkAccent hover:underline flex items-center gap-1"
                      >
                        GitHub &rarr;
                      </a>
                      <a 
                        href={project.demo} 
                        className="text-lightAccent dark:text-darkAccent hover:underline flex items-center gap-1"
                      >
                        Live Demo &rarr;
                      </a>
                      <a 
                        href={project.caseStudy} 
                        className="text-lightAccent dark:text-darkAccent hover:underline flex items-center gap-1"
                      >
                        Case Study &rarr;
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Architecture Showcase */}
      <section className="space-y-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            How I Design Systems
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Showcase of standard API architectures, queue decoupling, and vector store integration flows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {architectureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-6"
            >
              <div>
                <h3 className="font-mono text-lg font-bold text-lightText dark:text-darkText">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="overflow-x-auto pb-2">
                {card.component}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Engineering Process */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          How I Build Software
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-6">
          {engineeringProcess.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl text-lightAccent dark:text-darkAccent">
                    {step.icon}
                  </span>
                  <span className="text-3xl font-bold font-mono text-slate-200 dark:text-slate-800">
                    0{step.step}
                  </span>
                </div>
                <h3 className="font-mono text-base font-bold text-lightText dark:text-darkText mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Project Categories */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Project Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 bg-lightAccent/10 dark:bg-darkAccent/10 rounded-lg border border-slate-100 dark:border-slate-800">
                  {cat.icon}
                </span>
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-2 pl-2 border-l border-slate-100 dark:border-slate-850">
                {cat.projects.map((p, pIdx) => (
                  <li key={pIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                    <span className="h-1 w-1 bg-lightAccent dark:bg-darkAccent rounded-full" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Open Source & Experiments */}
      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Things I&apos;m Exploring
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Active repositories, experiments, and technical learning areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {exploringCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText border-b border-slate-100 dark:border-slate-850 pb-2">
                  {card.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-8 md:p-12 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-lightText dark:text-darkText font-mono">
            Interested in working together?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            I&apos;m open to software engineering, backend development, and full-stack opportunities where I can solve real concurrency, database, or API challenges.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="rounded-xl bg-lightAccent dark:bg-darkAccent hover:opacity-90 px-6 py-2.5 font-mono text-sm text-white font-bold transition duration-300 shadow-md"
            >
              Contact Me
            </Link>
            <Link
              to="/about/resume"
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightBg dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900 px-6 py-2.5 font-mono text-sm text-lightText dark:text-darkText transition duration-300"
            >
              View Resume
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default PortfolioPage;
