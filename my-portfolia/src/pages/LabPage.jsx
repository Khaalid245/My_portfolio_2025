import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFolderOpen, FaRocket, FaLink, FaSync, FaDocker, 
  FaBrain, FaFileAlt, FaBolt, FaLightbulb, FaSearch, 
  FaProjectDiagram, FaCode, FaBug, FaBookOpen, FaTools, FaFileDownload 
} from 'react-icons/fa';

const LabPage = () => {
  const [downloadState, setDownloadState] = useState(null); // name of download being simulated

  const stats = [
    { label: '20+ Resources', icon: <FaFolderOpen /> },
    { label: '10+ Starter Kits', icon: <FaRocket /> },
    { label: '5+ API Collections', icon: <FaLink /> },
    { label: 'Always Updating', icon: <FaSync className="animate-spin-slow" /> }
  ];

  const featured = [
    {
      title: 'Full Stack Starter',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Authentication', 'Docker'],
      desc: 'Production-ready starter template for modern web applications.',
      linkText: 'Download →',
      type: 'download'
    },
    {
      title: 'Backend API Boilerplate',
      tech: ['Express', 'JWT', 'Redis', 'MySQL', 'Swagger'],
      desc: 'REST API architecture with authentication, logging, and validation.',
      linkText: 'View Repository →',
      type: 'link',
      url: 'https://github.com/Khaalid245?tab=repositories'
    },
    {
      title: 'Docker Development Environment',
      tech: ['Docker', 'Docker Compose', 'Nginx', 'PostgreSQL'],
      desc: 'Ready-to-use local development environment.',
      linkText: 'View Repository →',
      type: 'link',
      url: 'https://github.com/Khaalid245?tab=repositories'
    }
  ];

  const categories = [
    {
      title: 'Templates',
      icon: <FaFileAlt className="text-lightAccent dark:text-darkAccent" />,
      items: ['Portfolio Starter', 'Admin Dashboard', 'Authentication', 'Landing Page']
    },
    {
      title: 'Boilerplates',
      icon: <FaBolt className="text-lightAccent dark:text-darkAccent" />,
      items: ['Node.js API', 'Django REST', 'Express', 'Next.js']
    },
    {
      title: 'API Collections',
      icon: <FaLink className="text-lightAccent dark:text-darkAccent" />,
      items: ['Postman', 'Swagger', 'OpenAPI', 'Testing Collections']
    },
    {
      title: 'DevOps',
      icon: <FaDocker className="text-lightAccent dark:text-darkAccent" />,
      items: ['Docker', 'CI/CD', 'Deployment', 'Linux Notes']
    },
    {
      title: 'AI Resources',
      icon: <FaBrain className="text-lightAccent dark:text-darkAccent" />,
      items: ['Prompt Library', 'RAG Starter', 'LLM Examples', 'Python Notebooks']
    }
  ];

  const productivity = [
    {
      category: 'Development',
      items: ['VS Code', 'Cursor', 'GitHub', 'Docker', 'Postman']
    },
    {
      category: 'Design',
      items: ['Figma', 'Excalidraw', 'Lucide Icons']
    },
    {
      category: 'AI Tools',
      items: ['ChatGPT', 'Claude', 'Gemini']
    },
    {
      category: 'Organization',
      items: ['Notion', 'Obsidian', 'GitHub Projects']
    }
  ];

  const workflow = [
    { step: 'Idea', icon: <FaLightbulb />, desc: 'Conceptualizing system requirements' },
    { step: 'Research', icon: <FaSearch />, desc: 'Investigating trade-offs & query constraints' },
    { step: 'Architecture', icon: <FaProjectDiagram />, desc: 'Structuring databases, API gateways & caches' },
    { step: 'Development', icon: <FaCode />, desc: 'Writing clean modular code and units tests' },
    { step: 'Testing', icon: <FaBug />, desc: 'Profiling query performance & route concurrency' },
    { step: 'Deployment', icon: <FaRocket />, desc: 'Orchestrating containers & configuring CDN proxy' },
    { step: 'Documentation', icon: <FaBookOpen />, desc: 'Authoring clean readme maps and Swagger guides' },
    { step: 'Maintenance', icon: <FaTools />, desc: 'Monitoring logs, database queries & indexes' }
  ];

  const learningDashboard = [
    { topic: 'Docker', status: 'Using in Production', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    { topic: 'Kubernetes', status: 'Learning', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
    { topic: 'AI Engineering', status: 'Practicing', color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' },
    { topic: 'System Design', status: 'Building', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' }
  ];

  const books = [
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', tag: 'System Design' },
    { title: 'Clean Architecture', author: 'Robert C. Martin', tag: 'Structure' },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas', tag: 'Core Craft' },
    { title: 'System Design Interview', author: 'Alex Xu', tag: 'Scaling' }
  ];

  const downloads = [
    { name: 'Resume', file: 'PDF Document' },
    { name: 'System Design Notes', file: 'Markdown Guide' },
    { name: 'API Cheat Sheet', file: 'Cheat Sheet PDF' },
    { name: 'Docker Cheat Sheet', file: 'DevOps PDF' },
    { name: 'Backend Roadmap', file: 'Systems PDF' }
  ];

  const repos = [
    { name: 'Course Management Platform', updated: '2 days ago' },
    { name: 'Healthcare System Research', updated: '5 days ago' },
    { name: 'Blog Platform', updated: '1 week ago' },
    { name: 'AI Playground', updated: '2 weeks ago' },
    { name: 'Docker Templates', updated: '3 weeks ago' }
  ];

  const triggerDownloadSimulate = (name) => {
    setDownloadState(name);
    setTimeout(() => {
      setDownloadState(null);
      // Simulate file download
      const element = document.createElement("a");
      const file = new Blob([`Mock download data for ${name}`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `${name.toLowerCase().replace(/\s+/g, '-')}-starter.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <div className="space-y-24 py-10">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-6 pb-12 border-b border-slate-200 dark:border-slate-800">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono"
        >
          Engineering Lab
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400"
        >
          Tools, templates, starter kits, notes, and reusable resources I use while building software. Built to save time, improve consistency, and share practical knowledge.
        </motion.p>

        {/* Statistics Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-3.5 flex flex-col items-center gap-2"
            >
              <span className="text-lg text-lightAccent dark:text-darkAccent">{stat.icon}</span>
              <span className="text-xs font-mono font-bold text-lightText dark:text-darkText">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="#featured-resources"
            className="rounded-xl bg-lightAccent dark:bg-darkAccent hover:opacity-90 px-6 py-2.5 font-mono text-sm text-white font-bold transition duration-300 shadow-md"
          >
            Browse Resources
          </a>
          <a
            href="https://github.com/Khaalid245?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightBg dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900 px-6 py-2.5 font-mono text-sm text-lightText dark:text-darkText transition duration-300"
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* 2. Featured Resources */}
      <section id="featured-resources" className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Featured Toolkit
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {item.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-mono text-lg font-bold text-lightText dark:text-darkText">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-850 mt-6">
                {item.type === 'download' ? (
                  <button
                    onClick={() => triggerDownloadSimulate(item.title)}
                    disabled={downloadState === item.title}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-lightAccent dark:text-darkAccent hover:underline disabled:opacity-50"
                  >
                    {downloadState === item.title ? 'Downloading...' : item.linkText}
                  </button>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-lightAccent dark:text-darkAccent hover:underline"
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Categories */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Toolkit Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-lightBg dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-850">
                  {cat.icon}
                </span>
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-1.5 pl-2 border-l border-slate-100 dark:border-slate-850">
                {cat.items.map((i, idx) => (
                  <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                    <span className="h-1 w-1 bg-lightAccent dark:bg-darkAccent rounded-full" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Productivity Stack */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Productivity Stack
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productivity.map((stack, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4"
            >
              <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText border-b border-slate-100 dark:border-slate-850 pb-2">
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="rounded border border-slate-200 dark:border-slate-800 bg-lightBg dark:bg-slate-900/60 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Engineering Workflow */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          My Engineering Workflow
        </h2>

        {/* Workflow steps in custom flex nodes layout */}
        <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
          {workflow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-4 flex flex-col items-center justify-between text-center relative hover:border-lightAccent dark:hover:border-darkAccent transition-colors duration-300"
            >
              <div className="space-y-2.5">
                <span className="text-xl text-lightAccent dark:text-darkAccent">
                  {item.icon}
                </span>
                <h3 className="font-mono text-xs font-bold text-lightText dark:text-darkText uppercase tracking-wider">
                  {item.step}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Learning Dashboard */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Learning Dashboard
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {learningDashboard.map((board, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between gap-4"
            >
              <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText">
                {board.topic}
              </h3>
              <div className="w-full flex">
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${board.color}`}>
                  {board.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Books & References */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Books That Changed My Thinking
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-lightAccent dark:text-darkAccent bg-lightAccent/10 dark:bg-darkAccent/10 px-2 py-0.5 rounded uppercase tracking-wider">
                  {book.tag}
                </span>
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText leading-tight">
                  {book.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold border-t border-slate-100 dark:border-slate-850 pt-3">
                {book.author}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Downloads */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Cheat Sheets & roadmaps
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {downloads.map((dl, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText leading-tight">
                  {dl.name}
                </h3>
                <p className="text-[10px] font-mono text-slate-400">
                  {dl.file}
                </p>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-855 pt-3">
                <button
                  onClick={() => triggerDownloadSimulate(dl.name)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-lightAccent dark:text-darkAccent hover:underline"
                >
                  <FaFileDownload /> Get File
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. GitHub Activity */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Recent Repositories
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Updated code logs from system packages and course platform modules.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-bold text-lightText dark:text-darkText leading-tight border-b border-slate-100 dark:border-slate-850 pb-2">
                  {repo.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 block pt-1">
                  Updated {repo.updated}
                </span>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-855 pt-3 mt-4">
                <a
                  href="https://github.com/Khaalid245?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-lightAccent dark:text-darkAccent hover:underline"
                >
                  View Repo &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LabPage;
