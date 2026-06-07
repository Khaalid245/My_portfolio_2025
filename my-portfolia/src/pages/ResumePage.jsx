import { motion } from 'framer-motion';
import { EXPERIENCES, PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaAward, FaExternalLinkAlt, FaPrint, FaUsers, FaLanguage } from 'react-icons/fa';

const ResumePage = () => {
  const handlePrint = () => {
    window.print();
  };

  const skillsData = [
    { category: 'Frontend Development', skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'] },
    { category: 'Backend Development', skills: ['Python', 'Django REST Framework (DRF)', 'Flask', 'Node.js', 'Express.js', 'REST APIs'] },
    { category: 'Databases & Infra', skills: ['MySQL', 'MongoDB', 'Firebase', 'Docker', 'Git', 'Linux', 'Deployment Workflows'] },
    { category: 'Focus Areas', skills: ['AI Engineering Fundamentals', 'Intelligent Systems', 'Scalable Web Apps', 'Technical Documentation'] }
  ];

  const certifications = [
    { title: 'Python Programming', issuer: 'Udemy' },
    { title: 'Django REST Framework (DRF)', issuer: 'Coursera' },
    { title: 'GitHub Actions & CI/CD Fundamentals', issuer: 'Coursera' },
    { title: 'Database Design', issuer: 'DataCamp' },
    { title: 'Linux & Git Fundamentals', issuer: 'Udemy' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10 print-container">
      
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-8 print-section">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Khalid Abdirahman Abdillahi
          </h1>
          <p className="mt-1.5 text-sm font-semibold text-lightAccent dark:text-darkAccent font-mono">
            Backend Developer | Full-Stack Developer
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>📞 +917609958608</span>
            <span>✉️ khalidabdillahi30@gmail.com</span>
            <span>📍 Bhubaneswar, Odisha, India</span>
          </div>
          <div className="mt-2.5 flex gap-4 text-xs font-mono">
            <a href="https://github.com/Khaalid245" target="_blank" rel="noopener noreferrer" className="text-lightAccent dark:text-darkAccent hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/khalid-abdillahi-269871276/" target="_blank" rel="noopener noreferrer" className="text-lightAccent dark:text-darkAccent hover:underline">LinkedIn</a>
          </div>
        </div>
        <div className="no-print flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            download="Khalid_Abdirahman_Resume.pdf"
            className="inline-flex items-center gap-2 rounded border border-lightAccent dark:border-darkAccent bg-lightAccent/10 dark:bg-darkAccent/10 hover:bg-lightAccent/20 dark:hover:bg-darkAccent/20 px-5 py-2.5 font-mono text-sm text-lightText dark:text-darkText hover:text-lightAccent dark:hover:text-darkAccent transition duration-300 shadow-md"
          >
            <FaDownload /> Download PDF
          </a>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard hover:bg-slate-100 dark:hover:bg-slate-800 px-5 py-2.5 font-mono text-sm text-lightText dark:text-darkText transition duration-300 shadow-md"
          >
            <FaPrint /> Print Resume
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
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-sm font-semibold text-lightAccent dark:text-darkAccent">
                African Leadership University – Kigali, Rwanda
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 print-pill">
              May 2023 — July 2026
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Focused on backend systems, API development, and deployment workflows using React.js, Node.js, Python, and Django REST Framework (DRF).
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

      {/* Section 6 - Leadership & Community Engagement */}
      <section className="print-section">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-lightText dark:text-darkText font-mono mb-8 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <FaUsers className="text-lightAccent dark:text-darkAccent" /> Leadership & Community
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6"
          >
            <h3 className="text-base font-bold text-lightText dark:text-darkText font-mono">
              Volunteer Teacher
            </h3>
            <p className="text-xs font-semibold text-lightAccent dark:text-darkAccent mt-1">
              Primary School, Somalia
            </p>
            <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Supported mathematics learning within under-resourced educational environments, helping young learners build a strong numerical foundation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6"
          >
            <h3 className="text-base font-bold text-lightText dark:text-darkText font-mono">
              Technology Mentor
            </h3>
            <p className="text-xs font-semibold text-lightAccent dark:text-darkAccent mt-1">
              Youth Community
            </p>
            <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Mentored students in programming fundamentals and digital learning pathways, fostering interest in technology and software careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 7 - Languages & Interests */}
      <section className="print-section">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-lightText dark:text-darkText font-mono mb-8 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <FaLanguage className="text-lightAccent dark:text-darkAccent" /> Languages & Interests
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6"
          >
            <h3 className="text-sm font-bold text-lightText dark:text-darkText font-mono uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
              Languages
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-lightText dark:text-darkText font-bold">Somali</span>
                <span className="text-slate-500 dark:text-slate-400">Native</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-lightText dark:text-darkText font-bold">English</span>
                <span className="text-slate-500 dark:text-slate-400">Fluent</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="print-card rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6"
          >
            <h3 className="text-sm font-bold text-lightText dark:text-darkText font-mono uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Software Engineering', 'AI & Emerging Tech', 'Football', 'Travel'].map((interest, iIndex) => (
                <span
                  key={iIndex}
                  className="rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ResumePage;
