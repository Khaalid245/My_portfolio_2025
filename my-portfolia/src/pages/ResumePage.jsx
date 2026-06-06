import { motion } from 'framer-motion';
import { EXPERIENCES, PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const ResumePage = () => {
  const handlePrint = () => {
    window.print();
  };

  const skillsData = [
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'Django', 'REST APIs'] },
    { category: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { category: 'DevOps', skills: ['Docker', 'Linux', 'GitHub Actions'] }
  ];

  const certifications = [
    { title: 'Meta Front-End Developer', issuer: 'Coursera / Meta' },
    { title: 'Google Data Analytics', issuer: 'Coursera / Google' },
    { title: 'Docker Fundamentals', issuer: 'Docker' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10 print-container">
      
      {/* Hero Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-8 print-section">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Resume
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Experience, education, projects, and technical expertise.
          </p>
        </div>
        <div className="no-print">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded border border-lightAccent dark:border-darkAccent bg-lightAccent/10 dark:bg-darkAccent/10 hover:bg-lightAccent/20 dark:hover:bg-darkAccent/20 px-5 py-2.5 font-mono text-sm text-lightText dark:text-darkText hover:text-lightAccent dark:hover:text-darkAccent transition duration-300 shadow-md"
          >
            <FaDownload /> Download PDF Resume
          </button>
        </div>
      </div>

      {/* Section 1 - Experience */}
      <section className="print-section">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-lightText dark:text-darkText font-mono mb-8 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <FaBriefcase className="text-lightAccent dark:text-darkAccent" /> Experience
        </h2>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 hover:shadow-sm transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800/40 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-lightText dark:text-darkText font-mono">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-lightAccent dark:text-darkAccent">
                    {exp.company}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 print-pill">
                  {exp.year}
                </span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400 print-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2 - Education */}
      <section className="print-section">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-lightText dark:text-darkText font-mono mb-8 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <FaGraduationCap className="text-lightAccent dark:text-darkAccent" /> Education
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h3 className="text-lg font-bold text-lightText dark:text-darkText font-mono">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm font-semibold text-lightAccent dark:text-darkAccent">
                Amoud University
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 print-pill">
              2020 — 2024
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Specialized in software development paradigms, relational database normalization, computer networks, and algorithms. Graduated with a strong foundation in backend integration patterns and systems design.
          </p>
        </motion.div>
      </section>

      {/* Section 3 - Technical Skills */}
      <section className="print-section">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-lightText dark:text-darkText font-mono mb-8 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <FaCode className="text-lightAccent dark:text-darkAccent" /> Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5"
            >
              <h3 className="text-sm font-bold text-lightText dark:text-darkText font-mono uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400 print-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4 - Certifications */}
      <section className="print-section">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-lightText dark:text-darkText font-mono mb-8 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <FaAward className="text-lightAccent dark:text-darkAccent" /> Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 flex flex-col justify-between"
            >
              <h3 className="text-base font-bold text-lightText dark:text-darkText font-mono">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-semibold">
                Issuer: {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5 - Selected Projects */}
      <section className="print-section">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-lightText dark:text-darkText font-mono mb-8 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <FaExternalLinkAlt className="text-sm text-lightAccent dark:text-darkAccent" /> Selected Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-lightText dark:text-darkText font-mono mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {project.problem}
                </p>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-3 no-print">
                <div className="flex gap-1.5">
                  {project.stack.slice(0, 3).map((s, si) => (
                    <span key={si} className="text-[10px] font-mono bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-slate-500">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to="/portfolio"
                  className="text-xs font-mono text-lightAccent dark:text-darkAccent hover:underline inline-flex items-center gap-1"
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center no-print">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-lightAccent dark:text-darkAccent hover:underline transition duration-300"
          >
            Browse all case studies and detailed systems architecture &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ResumePage;
