import { motion } from 'framer-motion';
import aboutImg from '../assets/aboutme.png';
import { FaServer, FaDocker, FaBrain, FaCompass } from 'react-icons/fa';

const AboutMePage = () => {
  const journeyTimeline = [
    {
      year: '2023',
      title: 'Started learning web development',
      description: 'Began exploring software development by learning HTML, CSS, JavaScript, and building simple web interfaces while developing curiosity about technology and digital products.'
    },
    {
      year: '2024',
      title: 'Built full-stack projects',
      description: 'Started working with React.js, Node.js, Django REST Framework, and databases to build complete web applications and strengthen backend development skills.'
    },
    {
      year: '2025',
      title: 'Focused on backend systems & scalable applications',
      description: 'Worked on backend-focused projects involving APIs, authentication systems, databases, deployment workflows, and frontend-backend integration through internships and practical projects.'
    },
    {
      year: '2026',
      title: 'Improving DevOps & Full-Stack AI Systems',
      description: 'Currently learning Docker, CI/CD workflows, Linux environments, cloud deployment, and exploring full-stack AI systems, LLM APIs, and modern automation workflows.'
    }
  ];

  const focusCards = [
    {
      icon: <FaServer className="text-3xl text-lightAccent dark:text-darkAccent" />,
      title: 'Backend Systems',
      description: 'Building robust APIs, optimizing database query paths, and designing scalable services.'
    },
    {
      icon: <FaDocker className="text-3xl text-lightAccent dark:text-darkAccent" />,
      title: 'DevOps & Infrastructure',
      description: 'Automating builds, configuring Linux servers, containerizing services, and improving infrastructure stability.'
    },
    {
      icon: <FaBrain className="text-3xl text-lightAccent dark:text-darkAccent" />,
      title: 'Full-Stack AI Systems',
      description: 'Integrating language models, vector databases, and AI workflows into complete web systems.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-24 py-10">
      
      {/* Section 1 - Introduction */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 border-b border-slate-200 dark:border-slate-800/60 pb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[35%] flex justify-center lg:justify-start"
        >
          <img 
            src={aboutImg} 
            alt="Khalid Abdillahi" 
            className="w-64 h-88 lg:w-80 lg:h-[440px] rounded-2xl object-cover border border-slate-200 dark:border-slate-800 transition duration-500 shadow-xl"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[65%] space-y-6 text-center lg:text-left lg:max-w-xl"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
              About Me
            </h1>
            <p className="mt-3 text-lg font-medium text-lightAccent dark:text-darkAccent leading-relaxed">
              I&apos;m a Software Engineering student at the African Leadership University and a Mastercard Foundation Scholar passionate about building backend systems and full-stack web applications.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Since starting my software engineering journey in 2023, I&apos;ve worked with React, Django REST Framework, Node.js, MySQL, Redis, Docker, and modern web technologies through academic projects, internships, and personal initiatives.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I enjoy designing practical solutions, developing scalable APIs, working with databases, and exploring DevOps and AI-powered applications.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Currently, I&apos;m focused on strengthening my skills in backend engineering, cloud technologies, and system design through hands-on projects and continuous learning.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
            I believe in building useful software, solving real-world problems, and continuously improving as an engineer.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - Journey Timeline */}
      <section className="border-b border-slate-200 dark:border-slate-800/60 pb-16">
        <h2 className="text-3xl font-bold tracking-tight text-lightText dark:text-darkText font-mono mb-12 text-center lg:text-left">
          My Journey
        </h2>
        
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 lg:ml-6 space-y-12">
          {journeyTimeline.map((item, index) => (
            <motion.div 
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 lg:pl-10"
            >
              <div className="absolute -left-3.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-lightCard dark:bg-darkCard border-2 border-lightAccent dark:border-darkAccent">
                <span className="h-2 w-2 rounded-full bg-lightAccent dark:bg-darkAccent" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-sm font-semibold text-lightAccent dark:text-darkAccent bg-lightAccent/10 dark:bg-darkAccent/10 px-2 py-0.5 rounded">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-lightText dark:text-darkText font-mono mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 - What I'm Working On */}
      <section className="border-b border-slate-200 dark:border-slate-800/60 pb-16">
        <h2 className="text-3xl font-bold tracking-tight text-lightText dark:text-darkText font-mono mb-12 text-center lg:text-left">
          {"What I'm Working On"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusCards.map((card, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-lightCard dark:bg-darkCard p-6 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4"
            >
              <div className="p-3 bg-lightBg dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800/60">
                {card.icon}
              </div>
              <h3 className="font-mono text-lg font-bold text-lightText dark:text-darkText">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4 - Beyond Coding */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-lightCard dark:bg-darkCard p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-lightAccent/10 dark:bg-darkAccent/10 rounded-2xl">
            <FaCompass className="text-4xl text-lightAccent dark:text-darkAccent animate-pulse" />
          </div>
          <div className="space-y-4 flex-1">
            <h2 className="text-2xl font-bold text-lightText dark:text-darkText font-mono">
              Beyond Coding
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Outside software engineering, I enjoy researching technology trends, healthcare innovation, and ways technology can solve operational challenges in developing countries.
            </p>
            <p className="text-sm font-semibold text-lightAccent dark:text-darkAccent">
              I believe software should create measurable impact, not just technical complexity.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutMePage;
