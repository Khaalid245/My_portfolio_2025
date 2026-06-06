/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Cpu, BookOpen, Rocket, ChevronRight } from 'lucide-react';

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const searchItems = [
    // Pages
    { title: 'Home', desc: 'Main landing page summary & specialization highlights', path: '/', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'About Me', desc: 'My engineering story, vertical timeline, focus, beyond coding values', path: '/about/me', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'Resume', desc: 'Experience timeline, skills tags, certifications, print PDF', path: '/about/resume', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'Engineering Philosophy', desc: 'Systems thinking diagram, simplicity, future direction', path: '/about/philosophy', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'Portfolio', desc: 'Featured case studies, dynamic categories, system designs', path: '/portfolio', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'Blog', desc: 'Engineering notes, Redis queue articles, devops logs', path: '/blog', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'Lab', desc: 'Boilerplate starters, cheat sheets, workflow stages, tools stack', path: '/lab', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'Contact', desc: 'Accordion FAQs, current status checkmarks, mail form', path: '/contact', category: 'Pages', icon: <FileText size={14} /> },
    { title: 'Now', desc: 'What I\'m currently building, learning, reading, and goals snapshot', path: '/now', category: 'Pages', icon: <FileText size={14} /> },
    
    // Featured Projects
    { title: 'Course Management Platform', desc: 'Case Study: Role allocations, tracking & Redis notification queue workers', path: '/portfolio', category: 'Projects', icon: <Cpu size={14} /> },
    { title: 'Distributed E-Commerce Engine', desc: 'Case Study: Concurrency control, row locking, and Redis cache catalog', path: '/portfolio', category: 'Projects', icon: <Cpu size={14} /> },
    { title: 'Analytics Ingestion Pipeline', desc: 'Case Study: Flask SQLAlchemy, indexing optimization, event query speeds', path: '/portfolio', category: 'Projects', icon: <Cpu size={14} /> },
    
    // Blog articles
    { title: 'Building Redis Notification Systems', desc: 'Redis pub/sub and streams background job orchestration guide', path: '/blog', category: 'Blog Articles', icon: <BookOpen size={14} /> },
    { title: 'JWT Authentication in Node.js', desc: 'Secure token rotations, cookies, and Express gate policies', path: '/blog', category: 'Blog Articles', icon: <BookOpen size={14} /> },
    { title: 'My Journey Into DevOps', desc: 'Transitioning from building frontends to managing containers and cloud systems', path: '/blog', category: 'Blog Articles', icon: <BookOpen size={14} /> },

    // Lab items
    { title: 'Full Stack Starter Boilerplate', desc: 'Next.js, TS, Tailwind, auth, docker starter kit', path: '/lab', category: 'Lab Starters', icon: <Rocket size={14} /> },
    { title: 'Backend API Boilerplate Starter', desc: 'Node, Express, Redis, MySQL, swagger API design template', path: '/lab', category: 'Lab Starters', icon: <Rocket size={14} /> },
    { title: 'Docker Development Environment Stack', desc: 'Compose local stack (Nginx, PostgreSQL, Compose configuration)', path: '/lab', category: 'Lab Starters', icon: <Rocket size={14} /> }
  ];

  // Listen for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  // Focus input when palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (searchRef.current) searchRef.current.focus();
      }, 50);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden'; // prevent background scrolling
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Filter items
  const filtered = searchItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Handle keys inside palette
  const handleKeys = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex].path);
      }
    }
  };

  const handleSelect = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.childNodes[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 no-print">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Search Box Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[50vh]"
          >
            {/* Search Input header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-borderPrimary/60">
              <Search className="text-textMuted text-sm" size={14} />

              <input
                ref={searchRef}
                type="text"
                placeholder="Search projects, blog articles, resources, routes..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeys}
                className="w-full text-sm font-mono focus:outline-none bg-transparent text-lightText dark:text-darkText"
              />
              <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-950 px-2 py-0.5 rounded border border-slate-200/50 dark:border-slate-800/50 select-none">
                ESC
              </span>
            </div>

            {/* Results Area */}
            <div className="flex-1 overflow-y-auto p-2" ref={listRef}>
              {filtered.length > 0 ? (
                filtered.map((item, index) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <div
                      key={index}
                      onClick={() => handleSelect(item.path)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-250 ${
                        isSelected 
                          ? 'bg-lightAccent/5 dark:bg-darkAccent/5 border border-lightAccent/20 dark:border-darkAccent/20' 
                          : 'border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Type Icon */}
                        <span className={`p-2 rounded-lg text-xs ${
                          isSelected 
                            ? 'bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent' 
                            : 'bg-slate-50 dark:bg-slate-950 text-slate-400 dark:text-slate-600'
                        }`}>
                          {item.icon}
                        </span>
                        
                        <div className="space-y-0.5 min-w-0">
                          <h4 className="text-xs font-mono font-bold text-lightText dark:text-darkText truncate">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-slate-100 dark:bg-slate-950 text-slate-450 dark:text-slate-500 rounded border border-slate-200/50 dark:border-slate-800/50 uppercase select-none">
                          {item.category}
                        </span>
                        {isSelected && <ChevronRight className="text-[10px] text-accent" size={12} />}

                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-xs font-mono text-slate-550 dark:text-slate-500">
                  No matching results for &quot;{query}&quot;
                </div>
              )}
            </div>

            {/* Helper Footer */}
            <div className="px-4 py-2 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-950/40 text-[10px] font-mono text-slate-400 flex items-center justify-between select-none">
              <div className="flex gap-4">
                <span><span className="font-bold">&uarr;&darr;</span> Navigate</span>
                <span><span className="font-bold">Enter</span> Select</span>
              </div>
              <span>Search Database</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
