import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaServer, FaGlobe, FaDocker, FaBrain, FaRegClock, FaCalendarAlt, FaEnvelope, FaCheckCircle, FaSearch } from 'react-icons/fa';

const BlogPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: '50+ Reading Mins' },
    { label: 'Backend' },
    { label: 'DevOps' },
    { label: 'AI' },
    { label: 'Full Stack' }
  ];

  const categories = [
    {
      title: 'Backend',
      icon: <FaServer className="text-xl text-lightAccent dark:text-darkAccent" />,
      topics: ['REST APIs', 'Authentication', 'Databases', 'Performance']
    },
    {
      title: 'Full Stack',
      icon: <FaGlobe className="text-xl text-lightAccent dark:text-darkAccent" />,
      topics: ['React', 'Next.js', 'Django', 'Node.js']
    },
    {
      title: 'DevOps',
      icon: <FaDocker className="text-xl text-lightAccent dark:text-darkAccent" />,
      topics: ['Docker', 'Linux', 'CI/CD', 'Deployment']
    },
    {
      title: 'AI',
      icon: <FaBrain className="text-xl text-lightAccent dark:text-darkAccent" />,
      topics: ['LLMs', 'Python', 'RAG', 'Machine Learning']
    }
  ];

  const articles = [
    {
      title: 'Building Redis Notification Systems',
      category: 'Backend',
      description: 'An architectural guide on using Redis Pub/Sub and Streams to build reliable real-time system alerts.',
      readTime: '5 min read',
      date: 'May 2026',
      link: '#'
    },
    {
      title: 'JWT Authentication in Node.js',
      category: 'Backend',
      description: 'Securing Express APIs using HTTP-only cookies, token rotation, and strict CORS policies.',
      readTime: '7 min read',
      date: 'April 2026',
      link: '#'
    },
    {
      title: 'My Journey Into DevOps',
      category: 'DevOps',
      description: 'How transitioning from building frontends to managing deployments and Linux environments changed my engineering mindset.',
      readTime: '6 min read',
      date: 'March 2026',
      link: '#'
    }
  ];

  const learningJourney = [
    { year: '2023', label: 'Learning JavaScript' },
    { year: '2024', label: 'Building Full Stack Applications' },
    { year: '2025', label: 'Backend Systems & APIs' },
    { year: '2026', label: 'Docker • DevOps • AI Engineering' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          Engineering Notes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400"
        >
          Thoughts on backend development, system design, DevOps, AI engineering, and lessons learned while building software.
        </motion.p>
        
        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 pt-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <span 
              key={index}
              className="rounded-full border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard px-4 py-1 font-mono text-xs text-slate-600 dark:text-slate-400"
            >
              {stat.label}
            </span>
          ))}
        </motion.div>
      </section>

      {/* 2. Featured Article */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Featured Article
        </h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-8 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent px-2.5 py-0.5 rounded border border-lightAccent/20 dark:border-darkAccent/20 font-bold uppercase tracking-wider text-[10px]">
                Featured
              </span>
              <span className="flex items-center gap-1">
                <FaRegClock /> 8 min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> May 2026
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-lightText dark:text-darkText font-mono leading-tight">
              Building a Redis Notification Queue
            </h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              How I designed and implemented a background notification system using Redis workers, Express, and MySQL.
            </p>
            
            <div className="pt-2">
              <a 
                href="#" 
                className="inline-flex items-center gap-1.5 font-mono text-sm text-lightAccent dark:text-darkAccent hover:underline"
              >
                Read Article &rarr;
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Categories */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Browse by Topic
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedCategory(cat.title === selectedCategory ? 'All' : cat.title)}
              className={`rounded-2xl border p-6 space-y-4 cursor-pointer transition-all duration-300 ${
                selectedCategory === cat.title 
                  ? 'border-lightAccent dark:border-darkAccent bg-lightAccent/[0.02] dark:bg-darkAccent/[0.02] shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="p-2 bg-lightBg dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-850">
                  {cat.icon}
                </span>
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-1.5 pl-2 border-l border-slate-100 dark:border-slate-850">
                {cat.topics.map((t, tIdx) => (
                  <li key={tIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                    <span className="h-1 w-1 bg-lightAccent dark:bg-darkAccent rounded-full" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Latest Articles */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Latest Articles
          </h2>
          
          {/* Simple Search bar */}
          <div className="relative w-full sm:w-60">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-650 text-xs">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-lightCard dark:bg-darkCard border border-slate-200 dark:border-slate-850 rounded-xl font-mono text-xs focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((art, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-lightAccent dark:text-darkAccent font-bold uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegClock /> {art.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-mono text-base font-bold text-lightText dark:text-darkText leading-tight">
                    {art.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {art.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-850 mt-6">
                  <span className="text-[10px] font-mono text-slate-450 flex items-center gap-1">
                    <FaCalendarAlt /> {art.date}
                  </span>
                  
                  <a 
                    href={art.link}
                    className="text-xs font-mono text-lightAccent dark:text-darkAccent hover:underline"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 font-mono text-sm">
              No articles found matching filters.
            </div>
          )}
        </div>
      </section>

      {/* 5. Learning Journey */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Learning Journey
        </h2>

        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-4">
          {learningJourney.map((journey, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-lightAccent dark:text-darkAccent bg-lightAccent/10 dark:bg-darkAccent/10 px-2 py-0.5 rounded border border-lightAccent/20 dark:border-darkAccent/20">
                  {journey.year}
                </span>
                <p className="font-mono text-sm font-bold text-lightText dark:text-darkText pt-2">
                  {journey.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Newsletter / CTA */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-8 md:p-12 text-center max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!subscribed ? (
            <motion.div
              key="subscribe"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-lightText dark:text-darkText font-mono">
                Follow My Engineering Journey
              </h2>
              <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I share practical lessons from projects, backend architecture, DevOps experiments, and AI engineering.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-650">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-lightAccent dark:bg-darkAccent hover:opacity-90 px-6 py-2.5 font-mono text-sm text-white font-bold transition duration-300 shadow-md whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center space-y-4 py-6"
            >
              <FaCheckCircle className="text-5xl text-emerald-500 animate-bounce" />
              <h3 className="text-xl font-bold text-lightText dark:text-darkText font-mono">
                Subscription Confirmed!
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                Thank you for subscribing! I will send you technical insights directly to your inbox.
              </p>
              <button
                onClick={() => setSubscribed(false)}
                className="text-xs font-mono text-slate-400 hover:text-lightAccent dark:hover:text-darkAccent hover:underline"
              >
                Subscribe another email
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  );
};

export default BlogPage;
