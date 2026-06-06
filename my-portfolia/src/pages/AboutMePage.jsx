import { motion } from 'framer-motion';
import aboutImg from '../assets/khalid2.jpg';
import { FaServer, FaDocker, FaBrain, FaCompass } from 'react-icons/fa';

const AboutMePage = () => {
  const journeyTimeline = [
    {
      year: '2022',
      title: 'Started learning web development',
      description: 'Discovered curiosity about digital products, building basic interfaces and coding foundations.'
    },
    {
      year: '2023',
      title: 'Built full-stack projects',
      description: 'Ventured into React, Node.js, and backend integrations, creating end-to-end applications.'
    },
    {
      year: '2024',
      title: 'Focused on backend engineering',
      description: 'Delved deep into databases, API performance, secure authentication mechanisms, and server-side state.'
    },
    {
      year: '2025',
      title: 'Developed backend & course management systems',
      description: 'Engineered specialized systems (course management, authentication layers, high-throughput APIs) at Ramas Inc.'
    },
    {
      year: '2026',
      title: 'Expanding into DevOps & AI systems',
      description: 'Studying Docker containment, automated CI/CD pipelines, cloud infrastructure orchestration, and LLM integrations.'
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
      title: 'DevOps',
      description: 'Learning Docker containers, CI/CD pipeline automations, Linux administration, and deployment workflows.'
    },
    {
      icon: <FaBrain className="text-3xl text-lightAccent dark:text-darkAccent" />,
      title: 'AI Engineering',
      description: 'Exploring machine learning abstractions, LLM integrations, and building intelligent agents.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-24 py-10">
      
      {/* Section 1 - Introduction */}
      <section className="flex flex-col lg:flex-row items-center gap-12 border-b border-slate-200 dark:border-slate-800/60 pb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 flex justify-center"
        >
          <img 
            src={aboutImg} 
            alt="Khalid Abdillahi" 
            className="w-48 h-48 lg:w-60 lg:h-60 rounded-2xl object-cover border border-slate-200 dark:border-slate-800 grayscale hover:grayscale-0 transition duration-500 shadow-xl"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-2/3 space-y-6 text-center lg:text-left"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
              About Me
            </h1>
            <p className="mt-3 text-lg font-medium text-lightAccent dark:text-darkAccent">
              {"I'm a software engineer focused on building practical systems that solve real-world problems."}
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            My journey into software engineering started with curiosity about how digital products work behind the scenes.
            Over time, I became increasingly interested in backend systems, APIs, databases, and the infrastructure that powers modern applications.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Today, I build full-stack applications while expanding my skills in DevOps and AI engineering, ensuring systems are not only robustly engineered but also scalable and highly maintainable.
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
