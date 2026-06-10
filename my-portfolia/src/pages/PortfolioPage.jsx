import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFolderOpen, FaServer, FaDatabase, FaDocker, FaBrain, FaGlobe, 
  FaShieldAlt, FaBell, FaUsers, FaSearch, FaCode, FaBug, 
  FaRocket, FaProjectDiagram, FaChevronRight,
  FaTerminal, FaBook, FaNetworkWired, FaCheck, FaFolder, FaSync,
  FaExternalLinkAlt, FaPlay, FaChevronDown, FaFileCode
} from 'react-icons/fa';
import { 
  ApiArchitecture, QueueSystem, AiWorkflow, CoursePlatformFlow 
} from '../components/ArchitectureDiagram';

// Capstone actual screenshot imports
import screen2 from '../assets/projects/imageprojects/projectone/2.png';
import screenAdmin1 from '../assets/projects/imageprojects/projectone/admin 1.png';
import screenAdminDashboard from '../assets/projects/imageprojects/projectone/admisn dashbaord.png';
import screenFormMaster from '../assets/projects/imageprojects/projectone/form master.png';
import screenFormMasterDashboard from '../assets/projects/imageprojects/projectone/form mastrer dashbaord.png';
import screenSecuritySetting from '../assets/projects/imageprojects/projectone/security sitting.png';
import screenSetting from '../assets/projects/imageprojects/projectone/sitting.png';
import screenSupervisor from '../assets/projects/imageprojects/projectone/supervisor.png';
import screenTeacherDashboard from '../assets/projects/imageprojects/projectone/teacher dashbaord.png';
import screenTeacherDashboard2 from '../assets/projects/imageprojects/projectone/teacher dashbaord2.png';

// E-Commerce actual screenshot imports
import ecommerce1 from '../assets/projects/Imagetwo/1.png';
import ecommerce2 from '../assets/projects/Imagetwo/2.png';
import ecommerce3 from '../assets/projects/Imagetwo/3.png';
import ecommerce4 from '../assets/projects/Imagetwo/4.png';
import ecommerce6 from '../assets/projects/Imagetwo/6.png';
import ecommerce7 from '../assets/projects/Imagetwo/7.png';
import ecommerce8 from '../assets/projects/Imagetwo/8.png';

const PortfolioPage = () => {
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [lightboxProject, setLightboxProject] = useState(null); // null, 1, or 2
  const [autoplay1, setAutoplay1] = useState(false);
  const [autoplay2, setAutoplay2] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null); // null, 1 (School), 2 (E-Commerce)
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState('server');

  const screenshotViews = [
    {
      title: 'Admin Dashboard Overview',
      subtitle: 'Summary cards of users, teachers, classes, alerts and key metrics',
      image: screenAdminDashboard,
      category: 'Admin Panel'
    },
    {
      title: 'Admin User Management',
      subtitle: 'Complete control panel managing registration details and user lists',
      image: screenAdmin1,
      category: 'Admin Panel'
    },
    {
      title: 'Teacher Core Workspace',
      subtitle: 'Interactive monitoring grid showing student performance profiles',
      image: screenTeacherDashboard,
      category: 'Teacher View'
    },
    {
      title: 'Form Master Overview',
      subtitle: 'Special supervisor analytics identifying dropouts and warning triggers',
      image: screenFormMasterDashboard,
      category: 'Form Master'
    },
    {
      title: 'System Preferences',
      subtitle: 'Configuring metadata, academic term parameters, and schools info',
      image: screenSetting,
      category: 'Settings'
    },
    {
      title: 'Security Configurations',
      subtitle: 'Session policies, password protocols, and 2FA settings screen',
      image: screenSecuritySetting,
      category: 'Settings'
    }
  ];

  const screenshotViews2 = [
    {
      title: 'Storefront Catalog Interface',
      subtitle: 'Responsive buyer catalog page containing item listings, filters, and tags',
      image: ecommerce1,
      category: 'Storefront'
    },
    {
      title: 'Product Specifications & Details',
      subtitle: 'Detailed product overview with dynamic pricing and configuration selection',
      image: ecommerce2,
      category: 'Storefront'
    },
    {
      title: 'Shopping Basket & Checkout',
      subtitle: 'Secured buyer checkout form matching API transactions processing',
      image: ecommerce3,
      category: 'Checkout'
    },
    {
      title: 'Merchant Dashboard Metrics',
      subtitle: 'Operations dashboard tracing weekly sales volume and processing rates',
      image: ecommerce4,
      category: 'Admin Panel'
    },
    {
      title: 'Merchant Inventory Control Panel',
      subtitle: 'Operations portal to add products, set description details and define tags',
      image: ecommerce6,
      category: 'Admin Panel'
    },
    {
      title: 'User Account & Profile Workspace',
      subtitle: 'Customer dashboard showing order history, profile parameters and security',
      image: ecommerce7,
      category: 'User Account'
    },
    {
      title: 'System Integration Settings',
      subtitle: 'Configuring API keys, shipping methods, general currencies and payment services',
      image: ecommerce8,
      category: 'Settings'
    }
  ];

  useEffect(() => {
    if (!autoplay1) return;
    const interval = setInterval(() => {
      setActiveTab1((prev) => (prev + 1) % screenshotViews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoplay1, screenshotViews.length]);

  useEffect(() => {
    if (!autoplay2) return;
    const interval = setInterval(() => {
      setActiveTab2((prev) => (prev + 1) % screenshotViews2.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoplay2, screenshotViews2.length]);

  useEffect(() => {
    if (lightboxProject === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setZoomScale(1);
        if (lightboxProject === 1) {
          setActiveTab1((prev) => (prev + 1) % screenshotViews.length);
        } else {
          setActiveTab2((prev) => (prev + 1) % screenshotViews2.length);
        }
      } else if (e.key === 'ArrowLeft') {
        setZoomScale(1);
        if (lightboxProject === 1) {
          setActiveTab1((prev) => (prev - 1 + screenshotViews.length) % screenshotViews.length);
        } else {
          setActiveTab2((prev) => (prev - 1 + screenshotViews2.length) % screenshotViews2.length);
        }
      } else if (e.key === 'Escape') {
        setLightboxProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxProject, screenshotViews.length, screenshotViews2.length]);

  const stats = [
    { label: 'Engineering Projects', icon: <FaFolderOpen /> },
    { label: 'Backend Systems', icon: <FaServer /> },
    { label: 'REST APIs', icon: <FaDatabase /> },
    { label: 'Full Stack Apps', icon: <FaGlobe /> },
    { label: 'DevOps Learning', icon: <FaDocker /> },
    { label: 'AI Experiments', icon: <FaBrain /> }
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
    { title: 'Containerization', desc: 'Configuring multi-stage container builds to optimize static production bundles.' },
    { title: 'Full-Stack AI Integration', desc: 'Integrating large language models and vector search into API service layers.' },
    { title: 'Data Pipeline Design', desc: 'Designing efficient data processing scripts and ingestion pipelines for analytics.' },
    { title: 'System Design', desc: 'Investigating message broker patterns, event-sourcing structures, and load balancing.' },
    { title: 'Open Source', desc: 'Contributing fixes to database connectors and library tooling repositories.' }
  ];

  const lightboxViews = lightboxProject === 1 ? screenshotViews : (lightboxProject === 2 ? screenshotViews2 : []);
  const lightboxActiveTab = lightboxProject === 1 ? activeTab1 : (lightboxProject === 2 ? activeTab2 : 0);
  const setLightboxActiveTab = lightboxProject === 1 ? setActiveTab1 : (lightboxProject === 2 ? setActiveTab2 : () => {});

  const caseStudies = {
    1: {
      title: "School Early Warning Support System",
      subtitle: "Capstone Project &bull; Educational Risk Analytics",
      description: "Designed and developed a full-stack platform to help schools monitor attendance, detect academic risk indicators early, and streamline intervention workflows between teachers, form masters, and administrators.",
      techStack: ["React.js", "Tailwind CSS", "Django REST Framework", "MySQL", "Redis", "Docker", "JWT"],
      focuses: [
        "Role-based access control",
        "Transaction-safe backend workflows",
        "Async notification processing",
        "Secure JWT authentication",
        "Scalable REST API architecture"
      ],
      outcome: "Successfully deployed as a capstone platform to automate manual administrative attendance tracking, calculating real-time risk scores that flag supervisor dashboards for early student drop-out prevention."
    },
    2: {
      title: "Femvelle E-Commerce Platform",
      subtitle: "Femvelle &bull; Full-Stack Modest Fashion Commerce Platform",
      description: "Built a full-stack e-commerce platform for a modest fashion brand, supporting the complete customer journey from product discovery to secure checkout, order management, and post-purchase workflows.",
      techStack: ["React.js", "TypeScript", "Django REST Framework", "MySQL", "Redis", "Docker", "Stripe"],
      focuses: [
        "secure JWT authentication and token rotation",
        "Stripe payment integration with webhook verification",
        "Redis caching and async task processing",
        "duplicate order prevention and transaction safety",
        "scalable REST API architecture",
        "performance optimization and query efficiency"
      ],
      outcome: "The project emphasized real-world commerce engineering challenges including concurrency handling, payment reliability, API security, and production-ready deployment workflows."
    },
    3: {
      title: "Course Management Platform — Backend Service",
      subtitle: "Summative Backend Engineering &bull; Course Platform Backend",
      description: "A backend service designed to support academic operations including course allocation, facilitator activity tracking, and structured reporting workflows.",
      techStack: ["Node.js", "Express", "MySQL", "Sequelize", "Redis", "JWT", "Swagger"],
      focuses: [
        "role-based JWT authentication",
        "Redis queue-based notification workflows",
        "modular Express architecture",
        "Swagger API documentation",
        "relational database modeling with Sequelize",
        "async background job processing"
      ],
      outcome: "Developed as an ALU summative backend engineering project focused on workflow automation, maintainable API design, and operational tracking for academic environments."
    }
  };

  return (
    <div className="space-y-16 py-4">
      
      {/* 1. Portfolio Hero */}
      <section className="text-center space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
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

      {/* 2. Featured Case Study - School Early Warning Support System */}
      <section className="space-y-12">
        <div className="border-b border-slate-200/60 dark:border-slate-800/40 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-lightAccent dark:text-darkAccent font-bold block mb-1">
            Featured Capstone Project
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            School Early Warning Support System
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* LEFT COLUMN: Interactive Screenshot Showcase */}
          <div className="w-full lg:w-[48%] flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard/50 dark:bg-darkCard/20 p-5 space-y-5">
            {/* Title, Subtitle, and Current Category header */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-lightAccent dark:text-darkAccent font-bold">
                  Interactive Showcase &bull; Screen {activeTab1 + 1}/{screenshotViews.length}
                </span>
                <span className="px-2 py-0.5 rounded bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent text-[9px] uppercase font-mono font-bold">
                  {screenshotViews[activeTab1].category}
                </span>
              </div>
              <h4 className="font-mono text-sm font-bold text-lightText dark:text-darkText transition-all">
                {screenshotViews[activeTab1].title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal min-h-[32px] transition-all">
                {screenshotViews[activeTab1].subtitle}
              </p>
            </div>

            {/* Mock Browser Container */}
            <div className="flex-1 flex flex-col rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 shadow-lg overflow-hidden relative group">
              {/* Browser Header Bar */}
              <div className="flex items-center gap-3 px-3.5 py-2.5 bg-slate-200/50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-900">
                {/* Windows/Mac control dots */}
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-sm" />
                </div>
                {/* Search / Address Bar */}
                <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto flex items-center justify-between rounded-md bg-white dark:bg-slate-950/80 px-2 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 border border-slate-250 dark:border-slate-850">
                  <div className="flex items-center gap-1 overflow-hidden">
                    <span className="text-[10px]">🔒</span>
                    <span className="text-slate-500 dark:text-slate-400 truncate select-all">
                      {`earlywarning.io/app/${screenshotViews[activeTab1].category.toLowerCase().replace(/\s+/g, '-')}`}
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveTab1(activeTab1)} 
                    className="hover:text-lightAccent dark:hover:text-darkAccent transition-colors text-[9px]"
                    title="Refresh view"
                  >
                    ⟳
                  </button>
                </div>
              </div>

              {/* Active Image Viewport with Next/Prev Arrow Overlays */}
              <div className="relative flex-1 flex items-center justify-center p-3 bg-slate-950/[0.02] dark:bg-slate-950/40 min-h-[260px] max-h-[300px] overflow-hidden">
                {/* Left Arrow overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab1((prev) => (prev - 1 + screenshotViews.length) % screenshotViews.length);
                  }}
                  className="absolute left-2.5 z-10 p-1.5 rounded-full bg-black/55 hover:bg-black/85 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none text-xs font-mono shadow-md"
                  title="Previous image"
                >
                  &#9664;
                </button>

                <motion.img 
                  key={activeTab1}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  src={screenshotViews[activeTab1].image} 
                  alt={screenshotViews[activeTab1].title}
                  className="max-w-full max-h-[240px] object-contain rounded shadow-sm hover:scale-[1.01] transition-transform duration-500 cursor-zoom-in"
                  onClick={() => {
                    setZoomScale(1);
                    setLightboxProject(1);
                  }}
                />

                {/* Right Arrow overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab1((prev) => (prev + 1) % screenshotViews.length);
                  }}
                  className="absolute right-2.5 z-10 p-1.5 rounded-full bg-black/55 hover:bg-black/85 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none text-xs font-mono shadow-md"
                  title="Next image"
                >
                  &#9654;
                </button>

                {/* Hover indicator banner */}
                <div 
                  className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5"
                >
                  <span>🔍 Click to Zoom</span>
                  <span className="border-l border-slate-700 pl-1.5 text-slate-400">
                    {activeTab1 + 1} / {screenshotViews.length}
                  </span>
                </div>
              </div>

              {/* Status and Slideshow Control Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-slate-200/30 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-900 text-xs font-mono">
                {/* Auto Play Slideshow Toggle */}
                <button
                  onClick={() => setAutoplay1(!autoplay1)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-all duration-200 text-[10px] font-bold ${
                    autoplay1 
                      ? "border-lightAccent dark:border-darkAccent bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <span>{autoplay1 ? '⏸ Pause Autoplay' : '▶ Slideshow'}</span>
                </button>

                {/* Current Slide Number */}
                <span className="text-slate-400 text-[10px] font-semibold">
                  {activeTab1 + 1} of {screenshotViews.length}
                </span>
              </div>
            </div>

            {/* Real Image Thumbnails Row */}
            <div className="space-y-1.5 pt-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block font-bold">
                Select Screen Preview (All 10 Screens)
              </span>
              <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent snap-x">
                {screenshotViews.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab1(idx)}
                    className={`relative flex-shrink-0 w-[72px] h-[50px] rounded-lg border-2 overflow-hidden snap-start transition-all duration-200 ${
                      activeTab1 === idx
                        ? "border-lightAccent dark:border-darkAccent scale-105 shadow-md opacity-100"
                        : "border-slate-200 dark:border-slate-800/80 opacity-50 hover:opacity-90 hover:border-slate-400"
                    }`}
                    title={tab.title}
                  >
                    <img 
                      src={tab.image} 
                      alt={tab.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/70 py-0.5 text-[8px] font-mono text-white text-center truncate px-0.5 leading-none">
                      {tab.title.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: Project Info and Highlights */}
          <div className="w-full lg:w-[52%] flex flex-col justify-between space-y-6">
            {/* Overview */}
            <div className="space-y-4">
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-sans">
                A full-stack educational platform designed to help schools monitor attendance, identify academic risk indicators, and support intervention workflows between teachers and administrators.
              </p>

              {/* Problem ➔ Solution Structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <h5 className="font-mono text-[10px] uppercase tracking-wider text-rose-500 font-bold">
                    The Problem
                  </h5>
                  <p className="text-xs text-slate-650 dark:text-slate-450 font-sans leading-relaxed">
                    Schools struggle to monitor attendance patterns manually, leading to delayed academic interventions and increased drop-out rates.
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="font-mono text-[10px] uppercase tracking-wider text-emerald-500 font-bold">
                    The Solution
                  </h5>
                  <p className="text-xs text-slate-650 dark:text-slate-455 font-sans leading-relaxed">
                    Automated event pipelines calculate real-time risk scores, instantly flagging warning indicators to supervisor dashboards for immediate support.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="border-t border-slate-200/60 dark:border-slate-800/40 pt-4 space-y-2.5">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Technical Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>JWT authentication with secure cookies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Redis async task processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Role-based portal permissions workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>DRF REST APIs & MySQL database</span>
                </li>
              </ul>
            </div>

            {/* Tech stack badges */}
            <div className="space-y-2.5 border-t border-slate-200/60 dark:border-slate-800/40 pt-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono">
                {['React', 'Tailwind CSS', 'Django REST', 'MySQL', 'Redis', 'Docker', 'JWT'].map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs text-slate-650 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 font-mono">
              <a 
                href="https://www.alifmonitor.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-lightAccent dark:bg-darkAccent text-white text-xs font-bold px-4 py-2 hover:opacity-90 transition shadow-sm"
              >
                Live Demo &rarr;
              </a>
              <a 
                href="https://github.com/Khaalid245/somali-early-warning-system-school" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                GitHub Code
              </a>
              <button 
                onClick={() => setActiveCaseStudy(1)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-mono font-bold"
              >
                Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. E-Commerce Platform Case Study */}
      <section className="space-y-12">
        <div className="border-b border-slate-200/60 dark:border-slate-800/40 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-lightAccent dark:text-darkAccent font-bold block mb-1">
            Featured E-Commerce Project
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Femvelle E-Commerce Platform
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* LEFT COLUMN: Interactive Screenshot Showcase */}
          <div className="w-full lg:w-[48%] flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard/50 dark:bg-darkCard/20 p-5 space-y-5">
            {/* Title, Subtitle, and Current Category header */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-lightAccent dark:text-darkAccent font-bold">
                  Interactive Showcase &bull; Screen {activeTab2 + 1}/{screenshotViews2.length}
                </span>
                <span className="px-2 py-0.5 rounded bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent text-[9px] uppercase font-mono font-bold">
                  {screenshotViews2[activeTab2].category}
                </span>
              </div>
              <h4 className="font-mono text-sm font-bold text-lightText dark:text-darkText transition-all">
                {screenshotViews2[activeTab2].title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal min-h-[32px] transition-all">
                {screenshotViews2[activeTab2].subtitle}
              </p>
            </div>

            {/* Mock Browser Container */}
            <div className="flex-1 flex flex-col rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 shadow-lg overflow-hidden relative group">
              {/* Browser Header Bar */}
              <div className="flex items-center gap-3 px-3.5 py-2.5 bg-slate-200/50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-900">
                {/* Windows/Mac control dots */}
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-sm" />
                </div>
                {/* Search / Address Bar */}
                <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto flex items-center justify-between rounded-md bg-white dark:bg-slate-950/80 px-2 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 border border-slate-250 dark:border-slate-850">
                  <div className="flex items-center gap-1 overflow-hidden">
                    <span className="text-[10px]">🔒</span>
                    <span className="text-slate-500 dark:text-slate-400 truncate select-all">
                      {`ecommerce.io/app/${screenshotViews2[activeTab2].category.toLowerCase().replace(/\s+/g, '-')}`}
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveTab2(activeTab2)} 
                    className="hover:text-lightAccent dark:hover:text-darkAccent transition-colors text-[9px]"
                    title="Refresh view"
                  >
                    ⟳
                  </button>
                </div>
              </div>

              {/* Active Image Viewport with Next/Prev Arrow Overlays */}
              <div className="relative flex-1 flex items-center justify-center p-3 bg-slate-950/[0.02] dark:bg-slate-950/40 min-h-[260px] max-h-[300px] overflow-hidden">
                {/* Left Arrow overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab2((prev) => (prev - 1 + screenshotViews2.length) % screenshotViews2.length);
                  }}
                  className="absolute left-2.5 z-10 p-1.5 rounded-full bg-black/55 hover:bg-black/85 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none text-xs font-mono shadow-md"
                  title="Previous image"
                >
                  &#9664;
                </button>

                <motion.img 
                  key={activeTab2}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  src={screenshotViews2[activeTab2].image} 
                  alt={screenshotViews2[activeTab2].title}
                  className="max-w-full max-h-[240px] object-contain rounded shadow-sm hover:scale-[1.01] transition-transform duration-500 cursor-zoom-in"
                  onClick={() => {
                    setZoomScale(1);
                    setLightboxProject(2);
                  }}
                />

                {/* Right Arrow overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTab2((prev) => (prev + 1) % screenshotViews2.length);
                  }}
                  className="absolute right-2.5 z-10 p-1.5 rounded-full bg-black/55 hover:bg-black/85 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none text-xs font-mono shadow-md"
                  title="Next image"
                >
                  &#9654;
                </button>

                {/* Hover indicator banner */}
                <div 
                  className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5"
                >
                  <span>🔍 Click to Zoom</span>
                  <span className="border-l border-slate-700 pl-1.5 text-slate-400">
                    {activeTab2 + 1} / {screenshotViews2.length}
                  </span>
                </div>
              </div>

              {/* Status and Slideshow Control Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-slate-200/30 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-900 text-xs font-mono">
                {/* Auto Play Slideshow Toggle */}
                <button
                  onClick={() => setAutoplay2(!autoplay2)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-all duration-200 text-[10px] font-bold ${
                    autoplay2 
                      ? "border-lightAccent dark:border-darkAccent bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent"
                      : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <span>{autoplay2 ? '⏸ Pause Autoplay' : '▶ Slideshow'}</span>
                </button>

                {/* Current Slide Number */}
                <span className="text-slate-400 text-[10px] font-semibold">
                  {activeTab2 + 1} of {screenshotViews2.length}
                </span>
              </div>
            </div>

            {/* Real Image Thumbnails Row */}
            <div className="space-y-1.5 pt-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-450 block font-bold">
                Select Screen Preview (All 7 Screens)
              </span>
              <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent snap-x">
                {screenshotViews2.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab2(idx)}
                    className={`relative flex-shrink-0 w-[72px] h-[50px] rounded-lg border-2 overflow-hidden snap-start transition-all duration-200 ${
                      activeTab2 === idx
                        ? "border-lightAccent dark:border-darkAccent scale-105 shadow-md opacity-100"
                        : "border-slate-200 dark:border-slate-800/80 opacity-50 hover:opacity-90 hover:border-slate-400"
                    }`}
                    title={tab.title}
                  >
                    <img 
                      src={tab.image} 
                      alt={tab.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/70 py-0.5 text-[8px] font-mono text-white text-center truncate px-0.5 leading-none">
                      {tab.title.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: Project Info and Highlights */}
          <div className="w-full lg:w-[52%] flex flex-col justify-between space-y-6">
            {/* Overview */}
            <div className="space-y-4">
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-sans">
                A high-performance e-commerce catalog and checkout platform engineered to handle complex operations, transaction integrity, and robust integrations with payment processing networks.
              </p>

              {/* Problem ➔ Solution Structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <h5 className="font-mono text-[10px] uppercase tracking-wider text-rose-500 font-bold">
                    The Problem
                  </h5>
                  <p className="text-xs text-slate-650 dark:text-slate-450 font-sans leading-relaxed">
                    Legacy checkout systems suffer from inventory race conditions under high load, causing double-selling of items, slow catalog lookup times, and asynchronous webhook delivery failures.
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="font-mono text-[10px] uppercase tracking-wider text-emerald-500 font-bold">
                    The Solution
                  </h5>
                  <p className="text-xs text-slate-650 dark:text-slate-455 font-sans leading-relaxed">
                    Designed a high-concurrency order pipeline utilizing SQL transaction row-locking for stock reservation, Redis caching for fast static search, and idempotent webhook listeners with automatic retries to sync storefront checkout states.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="border-t border-slate-200/60 dark:border-slate-800/40 pt-4 space-y-2.5">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Technical Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Stripe checkout APIs with idempotent webhooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Redis cache-aside queries for product catalog</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Relational database transaction locks for race prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>DRF REST APIs & MySQL database</span>
                </li>
              </ul>
            </div>

            {/* Tech stack badges */}
            <div className="space-y-2.5 border-t border-slate-200/60 dark:border-slate-800/40 pt-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono">
                {['React', 'Tailwind CSS', 'Django REST', 'MySQL', 'Redis', 'Docker', 'Stripe'].map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs text-slate-650 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 font-mono">
              <a 
                href="#/portfolio" 
                className="inline-flex items-center gap-1.5 rounded-lg bg-lightAccent dark:bg-darkAccent text-white text-xs font-bold px-4 py-2 hover:opacity-90 transition shadow-sm"
              >
                Live Demo &rarr;
              </a>
              <a 
                href="https://github.com/Khaalid245/FEMVELLA" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                GitHub Code
              </a>
              <button 
                onClick={() => setActiveCaseStudy(2)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-mono font-bold"
              >
                Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Course Management Platform - Backend Service Case Study */}
      <section className="space-y-12">
        <div className="border-b border-slate-200/60 dark:border-slate-800/40 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-lightAccent dark:text-darkAccent font-bold block mb-1">
            Summative Backend Project
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Course Management Platform — Backend Service
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* LEFT COLUMN: Interactive Backend Explorer */}
          <div className="w-full lg:w-[48%] flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard/50 dark:bg-darkCard/20 p-5 space-y-5">
            <BackendVisualExplorer onTriggerWalkthrough={() => setWalkthroughOpen(true)} />
          </div>

          {/* RIGHT COLUMN: Project Info and Highlights */}
          <div className="w-full lg:w-[52%] flex flex-col justify-between space-y-6">
            {/* Overview */}
            <div className="space-y-4 font-sans">
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                A backend service designed to support academic operations including course allocation, facilitator activity tracking, and structured reporting workflows.
              </p>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                Built with Node.js, Express, MySQL, Redis, and JWT authentication, the platform manages role-based access control for managers, facilitators, and students while supporting asynchronous notification pipelines and modular API architecture.
              </p>

              {/* Problem ➔ Solution Structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <h5 className="font-mono text-[10px] uppercase tracking-wider text-rose-500 font-bold">
                    The Problem
                  </h5>
                  <p className="text-xs text-slate-650 dark:text-slate-450 leading-relaxed">
                    Academic operations struggle with course allocation tracking, activity monitoring, and automated notifications under manual administration workflows.
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="font-mono text-[10px] uppercase tracking-wider text-emerald-500 font-bold">
                    The Solution
                  </h5>
                  <p className="text-xs text-slate-650 dark:text-slate-455 leading-relaxed">
                    Built a modular Node.js/Express backend service using Sequelize ORM for MySQL modeling, simple-jwt access guards, and Redis background queues for async notifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="border-t border-slate-200/60 dark:border-slate-800/40 pt-4 space-y-2.5">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Engineering Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>JWT authentication with RBAC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Redis-powered notification queues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Modular Express architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Swagger API documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">✔</span>
                  <span>Async facilitator reporting workflows</span>
                </li>
              </ul>
            </div>

            {/* Tech stack badges */}
            <div className="space-y-2.5 border-t border-slate-200/60 dark:border-slate-800/40 pt-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono">
                {['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'Redis', 'JWT', 'Swagger', 'Jest / Mocha'].map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs text-slate-650 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Metadata */}
            <div className="space-y-2.5 border-t border-slate-200/60 dark:border-slate-800/40 pt-4">
              <div className="grid grid-cols-3 gap-4 font-mono text-[10px] text-slate-400">
                <div>
                  <span className="block font-bold uppercase">Role:</span>
                  <span className="text-xs text-lightText dark:text-darkText font-medium">Backend Developer</span>
                </div>
                <div>
                  <span className="block font-bold uppercase">Project Type:</span>
                  <span className="text-xs text-lightText dark:text-darkText font-medium">ALU Summative Project</span>
                </div>
                <div>
                  <span className="block font-bold uppercase">Status:</span>
                  <span className="text-xs text-lightText dark:text-darkText font-medium">System Completed</span>
                </div>
              </div>
            </div>

            {/* Links and Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 font-mono">
              <a 
                href="https://github.com/Khaalid245/Course_managment_backend" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-lightAccent dark:bg-darkAccent text-white text-xs font-bold px-4 py-2 hover:opacity-90 transition shadow-sm"
              >
                GitHub Code
              </a>
              <a 
                href="https://www.youtube.com/watch?v=l9glh6fZ3-w" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-mono font-bold"
              >
                Backend Walkthrough
              </a>
              <button 
                onClick={() => setWalkthroughOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-mono font-bold"
              >
                Code Walkthrough
              </button>
              <button 
                onClick={() => setActiveCaseStudy(3)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-mono font-bold"
              >
                Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Engineering Process */}
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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4 hover:border-lightAccent/40 dark:hover:border-darkAccent/40 hover:shadow-lg transition-all duration-300 cursor-default group"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 bg-lightAccent/10 dark:bg-darkAccent/10 rounded-lg border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform duration-300">
                  {cat.icon}
                </span>
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-2 pl-2 border-l border-slate-100 dark:border-slate-850">
                {cat.projects.map((p, pIdx) => (
                  <li key={pIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                    <span className="h-1 w-1 bg-lightAccent dark:bg-darkAccent rounded-full animate-pulse" />
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

      {/* Lightbox Modal */}
      {lightboxProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 transition-opacity duration-300 select-none"
          onClick={() => setLightboxProject(null)}
        >
          {/* Header Bar */}
          <div 
            className="flex items-center justify-between p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-white font-mono text-xs z-10 gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                {lightboxViews[lightboxActiveTab]?.category} &bull; Screen {lightboxActiveTab + 1} of {lightboxViews.length}
              </span>
              <span className="text-sm font-bold text-slate-200">
                {lightboxViews[lightboxActiveTab]?.title}
              </span>
            </div>

            {/* Lightbox Toolbar Controls */}
            <div className="flex items-center gap-2">
              {/* Zoom Out Button */}
              <button
                onClick={() => setZoomScale((prev) => Math.max(0.75, prev - 0.25))}
                className="p-1.5 px-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 transition"
                title="Zoom Out"
              >
                ➖
              </button>
              
              {/* Scale Indicator */}
              <span className="px-2 font-mono text-[11px] text-slate-400 font-bold min-w-[50px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>

              {/* Zoom In Button */}
              <button
                onClick={() => setZoomScale((prev) => Math.min(3.0, prev + 0.25))}
                className="p-1.5 px-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 transition"
                title="Zoom In"
              >
                ➕
              </button>

              {/* Reset Zoom Button */}
              <button
                onClick={() => setZoomScale(1)}
                className="p-1.5 px-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 transition font-mono text-[10px]"
                title="Reset Zoom"
              >
                ↺ Reset
              </button>

              {/* Separator */}
              <span className="h-5 w-[1px] bg-slate-800 mx-1" />

              {/* Close Button */}
              <button 
                className="text-white hover:text-rose-400 bg-rose-950/20 border border-rose-900/50 rounded-md px-3 py-1.5 focus:outline-none transition duration-300 font-bold"
                onClick={() => setLightboxProject(null)}
              >
                ✕ Close
              </button>
            </div>
          </div>

          {/* Central Main Viewport Wrapper with Chevron Buttons */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
            {/* Left navigation chevron */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomScale(1);
                setLightboxActiveTab((prev) => (prev - 1 + lightboxViews.length) % lightboxViews.length);
              }}
              className="absolute left-4 z-10 p-3 rounded-full bg-slate-900/80 border border-slate-850 text-white hover:bg-slate-850 hover:scale-105 transition-all focus:outline-none"
              title="Previous screen (Left Arrow)"
            >
              &#9664;
            </button>

            {/* Scrollable image container for panning when zoomed */}
            <div 
              className="w-full h-full flex items-center justify-center overflow-auto p-4 cursor-zoom-in"
              onClick={() => setLightboxProject(null)}
            >
              <motion.img 
                key={`${lightboxActiveTab}-${zoomScale}`}
                initial={{ scale: 0.95 * zoomScale, opacity: 0 }}
                animate={{ scale: zoomScale, opacity: 1 }}
                transition={{ duration: 0.2 }}
                src={lightboxViews[lightboxActiveTab]?.image} 
                alt={lightboxViews[lightboxActiveTab]?.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-transform duration-200"
                style={{ transform: `scale(${zoomScale})`, transformOrigin: 'center center' }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Click to toggle zoom between 1x and 1.75x
                  setZoomScale((prev) => (prev === 1 ? 1.75 : 1.0));
                }}
              />
            </div>

            {/* Right navigation chevron */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomScale(1);
                setLightboxActiveTab((prev) => (prev + 1) % lightboxViews.length);
              }}
              className="absolute right-4 z-10 p-3 rounded-full bg-slate-900/80 border border-slate-855 text-white hover:bg-slate-855 hover:scale-105 transition-all focus:outline-none"
              title="Next screen (Right Arrow)"
            >
              &#9654;
            </button>
          </div>

          {/* Bottom Thumbnail Navigation Strip inside Lightbox */}
          <div 
            className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-white font-mono text-xs z-10 flex flex-col items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-2 overflow-x-auto max-w-full pb-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {lightboxViews.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setZoomScale(1);
                    setLightboxActiveTab(idx);
                  }}
                  className={`relative flex-shrink-0 w-14 h-10 rounded border overflow-hidden transition-all duration-200 ${
                    lightboxActiveTab === idx
                      ? "border-lightAccent dark:border-darkAccent scale-105 opacity-100"
                      : "border-slate-800 opacity-40 hover:opacity-85"
                  }`}
                  title={tab.title}
                >
                  <img src={tab.image} alt={tab.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 text-center">
              💡 Keyboard shortcut: Use <kbd className="bg-slate-950 px-1 py-0.5 rounded text-slate-400 font-bold border border-slate-800">←</kbd> and <kbd className="bg-slate-950 px-1 py-0.5 rounded text-slate-400 font-bold border border-slate-800">→</kbd> keys to navigate. Click screen image to toggle zoom.
            </p>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] p-6 sm:p-8 text-lightText dark:text-darkText font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-900 pb-4 mb-6">
                <div className="space-y-1">
                  <span 
                    className="font-mono text-[10px] uppercase tracking-wider text-lightAccent dark:text-darkAccent font-bold"
                    dangerouslySetInnerHTML={{ __html: caseStudies[activeCaseStudy].subtitle }}
                  />
                  <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
                    {caseStudies[activeCaseStudy].title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors font-bold font-mono"
                  title="Close Case Study"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto space-y-6 pr-1.5 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-900 scrollbar-track-transparent">
                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider">
                    Overview
                  </h4>
                  <p className="text-sm text-slate-650 dark:text-slate-405 leading-relaxed">
                    {caseStudies[activeCaseStudy].description}
                  </p>
                </div>

                {/* Technology Stack */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider">
                    Engineering Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {caseStudies[activeCaseStudy].techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded border border-slate-200 dark:border-slate-850 bg-slate-100 dark:bg-slate-900/60 px-2.5 py-0.5 text-xs text-slate-650 dark:text-slate-405"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Focuses */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider">
                    Key Engineering Focuses
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-650 dark:text-slate-405 font-mono">
                    {caseStudies[activeCaseStudy].focuses.map((focus, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 dark:text-emerald-400 font-bold flex-shrink-0">✔</span>
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-900">
                  <h4 className="text-xs font-mono font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider">
                    System Outcome
                  </h4>
                  <p className="text-xs text-slate-650 dark:text-slate-405 leading-relaxed">
                    {caseStudies[activeCaseStudy].outcome}
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end pt-6 border-t border-slate-100 dark:border-slate-900 mt-6 font-mono">
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="rounded-lg bg-lightAccent dark:bg-darkAccent text-white text-xs font-bold px-4 py-2.5 hover:opacity-90 transition shadow-sm"
                >
                  Got it &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Backend Walkthrough Modal */}
      <AnimatePresence>
        {walkthroughOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWalkthroughOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col h-[85vh] text-lightText dark:text-darkText font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-900 p-6">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-lightAccent dark:text-darkAccent font-bold">
                    Interactive Walkthrough &bull; Codebase Structure
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
                    Backend Architecture &amp; File Explorer
                  </h3>
                </div>
                <button
                  onClick={() => setWalkthroughOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors font-bold font-mono"
                  title="Close Walkthrough"
                >
                  ✕
                </button>
              </div>

              {/* Content Panel: 2 Columns */}
              <div className="flex-1 flex overflow-hidden">
                {/* Left side: Folder tree */}
                <div className="w-[30%] border-r border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/40 p-4 overflow-y-auto">
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Workspace Root
                  </h4>
                  <div className="space-y-1 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-slate-650 dark:text-slate-400 p-1 font-bold">
                      <FaFolder size={12} className="text-amber-500" />
                      <span>config/</span>
                    </div>
                    <button 
                      onClick={() => setSelectedFile('database')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'database' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-450'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>database.js</span>
                    </button>
                    <button 
                      onClick={() => setSelectedFile('redis')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'redis' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-455'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>redis.js</span>
                    </button>

                    <div className="flex items-center gap-1.5 text-slate-650 dark:text-slate-400 p-1 font-bold pt-2">
                      <FaFolder size={12} className="text-amber-500" />
                      <span>controllers/</span>
                    </div>
                    <button 
                      onClick={() => setSelectedFile('authController')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'authController' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-450'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>authController.js</span>
                    </button>
                    <button 
                      onClick={() => setSelectedFile('courseController')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'courseController' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-450'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>courseController.js</span>
                    </button>
                    <button 
                      onClick={() => setSelectedFile('reportController')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'reportController' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-450'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>reportController.js</span>
                    </button>

                    <div className="flex items-center gap-1.5 text-slate-650 dark:text-slate-400 p-1 font-bold pt-2">
                      <FaFolder size={12} className="text-amber-500" />
                      <span>models/</span>
                    </div>
                    <button 
                      onClick={() => setSelectedFile('userModel')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'userModel' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-450'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>User.js</span>
                    </button>
                    <button 
                      onClick={() => setSelectedFile('allocationModel')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'allocationModel' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-450'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>Allocation.js</span>
                    </button>

                    <div className="flex items-center gap-1.5 text-slate-650 dark:text-slate-400 p-1 font-bold pt-2">
                      <FaFolder size={12} className="text-amber-500" />
                      <span>workers/</span>
                    </div>
                    <button 
                      onClick={() => setSelectedFile('worker')}
                      className={`w-full flex items-center gap-1.5 pl-6 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition ${
                        selectedFile === 'worker' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-550 dark:text-slate-450'
                      }`}
                    >
                      <FaFileCode size={11} className="text-slate-400" />
                      <span>notificationWorker.js</span>
                    </button>

                    <div className="pt-2">
                      <button 
                        onClick={() => setSelectedFile('server')}
                        className={`w-full flex items-center gap-1.5 p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-900 text-left transition font-bold ${
                          selectedFile === 'server' ? 'text-lightAccent dark:text-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 border-l-2 border-lightAccent dark:border-darkAccent' : 'text-slate-650 dark:text-slate-400'
                        }`}
                      >
                        <FaFileCode size={11} className="text-slate-400 mr-0.5" />
                        <span>server.js</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right side: Code viewer and architecture context */}
                <div className="w-[70%] p-6 overflow-y-auto flex flex-col justify-between bg-slate-950 text-slate-300">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                      <span className="font-mono text-xs text-slate-400">
                        {walkthroughFiles[selectedFile].path}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-500 font-mono text-[9px] uppercase font-bold">
                        JavaScript
                      </span>
                    </div>
                    
                    <p className="text-xs font-sans text-slate-400 italic">
                      {walkthroughFiles[selectedFile].description}
                    </p>

                    <pre className="p-4 rounded-xl bg-[#090D1A] border border-slate-900 text-[11px] font-mono leading-relaxed overflow-x-auto text-green-400">
                      <code>
                        {walkthroughFiles[selectedFile].code}
                      </code>
                    </pre>
                  </div>
                  
                  <div className="border-t border-slate-900 pt-4 mt-4 font-mono text-[10px] text-slate-500 flex justify-between items-center">
                    <span>💡 Use file explorer on the left to see different modules of the backend service architecture.</span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end p-6 border-t border-slate-100 dark:border-slate-900 font-mono bg-slate-50 dark:bg-slate-950/40">
                <button
                  onClick={() => setWalkthroughOpen(false)}
                  className="rounded-lg bg-lightAccent dark:bg-darkAccent text-white text-xs font-bold px-4 py-2.5 hover:opacity-90 transition shadow-sm"
                >
                  Got it &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

// HELPER COMPONENT: BackendVisualExplorer
const BackendVisualExplorer = ({ onTriggerWalkthrough }) => {
  const [activeTab, setActiveTab] = React.useState('terminal'); // 'terminal', 'swagger', 'architecture'
  const [terminalLogs, setTerminalLogs] = React.useState([
    { text: '$ npm run start:dev', type: 'command' },
    { text: '[node] Starting Course Management Platform Backend Service...', type: 'info' },
    { text: '[node] Loading environment variables...', type: 'info' },
    { text: '[node] Express application initialized on port 5000.', type: 'info' },
    { text: '[sequelize] Connecting to MySQL database at localhost:3306...', type: 'info' },
    { text: '[sequelize] Connection successfully established.', type: 'success' },
    { text: '[sequelize] Database models synced: User, Course, Facilitator, Allocation.', type: 'success' },
    { text: '[redis] Connecting to Redis queue server...', type: 'info' },
    { text: '[redis] Redis client connected on redis://127.0.0.1:6379.', type: 'success' },
    { text: '[redis] Queue "notification_queue" is ready to process jobs.', type: 'success' },
    { text: '[system] Server status: READY & LISTENING.', type: 'success' },
  ]);

  const [activeEndpoint, setActiveEndpoint] = React.useState(null); // API reference toggle
  const [activeArchNode, setActiveArchNode] = React.useState(null); // Node explanation toggle
  const terminalEndRef = React.useRef(null);

  React.useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  const runLogSequence = (type) => {
    let newLogs = [];
    if (type === 'login') {
      newLogs = [
        { text: '\n$ curl -X POST /api/v1/auth/login -d \'{"email":"manager@alu.edu"}\'', type: 'command' },
        { text: '[http] POST /api/v1/auth/login - incoming request from 127.0.0.1', type: 'info' },
        { text: '[authService] Validating user: manager@alu.edu', type: 'info' },
        { text: '[dbQuery] SELECT id, name, email, password_hash, role FROM Users WHERE email = \'manager@alu.edu\' LIMIT 1;', type: 'db' },
        { text: '[authService] Credentials verified (bcrypt validation passed).', type: 'success' },
        { text: '[jwt] Generating tokens for User ID 4 [role: manager].', type: 'info' },
        { text: '[jwt] Created access token (expires in 15m). Signed by authorization server.', type: 'success' },
        { text: '[http] 200 OK - 32ms', type: 'success' }
      ];
    } else if (type === 'allocate') {
      newLogs = [
        { text: '\n$ curl -X POST /api/v1/courses/allocate -H "Authorization: Bearer eyJhbG..." -d \'{"courseId":101,"facilitatorId":8}\'', type: 'command' },
        { text: '[http] POST /api/v1/courses/allocate - incoming request from 127.0.0.1', type: 'info' },
        { text: '[authGuard] JWT verified successfully. Subject ID: 4. Role: manager.', type: 'success' },
        { text: '[dbQuery] SELECT * FROM Courses WHERE id = 101 LIMIT 1;', type: 'db' },
        { text: '[dbQuery] SELECT * FROM Users WHERE id = 8 AND role = \'facilitator\' LIMIT 1;', type: 'db' },
        { text: '[dbQuery] START TRANSACTION;', type: 'db' },
        { text: '[dbQuery] INSERT INTO Allocations (course_id, facilitator_id, status) VALUES (101, 8, \'active\');', type: 'db' },
        { text: '[dbQuery] COMMIT;', type: 'db' },
        { text: '[redis] Enqueuing background task: notification_queue', type: 'info' },
        { text: '[redis] LPUSH notification_queue \'{"type":"COURSE_ASSIGNED","facilitatorId":8,"courseId":101}\'', type: 'redis' },
        { text: '[redis] Job enqueued: job_alloc_101_8', type: 'success' },
        { text: '[http] 201 Created - 21ms', type: 'success' },
        { text: '[worker] [Redis Worker 1] Popped job_alloc_101_8. Processing...', type: 'worker' },
        { text: '[worker] Fetching email for facilitator ID 8...', type: 'worker' },
        { text: '[dbQuery] SELECT email, name FROM Users WHERE id = 8 LIMIT 1;', type: 'db' },
        { text: '[worker] Sending email via SMTP payload to facilitator_8@alu.edu...', type: 'worker' },
        { text: '[worker] Email successfully dispatched. Status Code 250.', type: 'success' }
      ];
    } else if (type === 'report') {
      newLogs = [
        { text: '\n$ curl -X POST /api/v1/reports/facilitators/generate -H "Authorization: Bearer eyJhbG..."', type: 'command' },
        { text: '[http] POST /api/v1/reports/facilitators/generate - incoming request from 127.0.0.1', type: 'info' },
        { text: '[authGuard] JWT verified successfully. Subject ID: 8. Role: facilitator.', type: 'success' },
        { text: '[reportService] Offloading heavy activity summary task to async queue.', type: 'info' },
        { text: '[redis] LPUSH notification_queue \'{"type":"GENERATE_REPORT","facilitatorId":8}\'', type: 'redis' },
        { text: '[redis] Job enqueued: job_report_fac_8', type: 'success' },
        { text: '[http] 202 Accepted - 11ms - Task ID: job_report_fac_8', type: 'success' },
        { text: '[worker] [Redis Worker 2] Popped job_report_fac_8. Processing...', type: 'worker' },
        { text: '[worker] Aggregating facilitator log details...', type: 'worker' },
        { text: '[dbQuery] SELECT count(*) FROM Allocations WHERE facilitator_id = 8;', type: 'db' },
        { text: '[dbQuery] SELECT * FROM Logins WHERE user_id = 8 ORDER BY created_at DESC LIMIT 10;', type: 'db' },
        { text: '[worker] Compiling report dataset and generating PDF archive...', type: 'worker' },
        { text: '[worker] Report built successfully: uploads/reports/report_fac_8.pdf', type: 'success' },
        { text: '[worker] Email notification queueing for user 8...', type: 'worker' },
        { text: '[worker] SMTP report delivered to facilitator_8@alu.edu.', type: 'success' }
      ];
    } else if (type === 'reset') {
      setTerminalLogs([
        { text: '$ npm run start:dev', type: 'command' },
        { text: '[node] Starting Course Management Platform Backend Service...', type: 'info' },
        { text: '[node] Express application initialized on port 5000.', type: 'info' },
        { text: '[sequelize] Connecting to MySQL database at localhost:3306...', type: 'info' },
        { text: '[sequelize] Connection successfully established.', type: 'success' },
        { text: '[sequelize] Database models synced: User, Course, Facilitator, Allocation.', type: 'success' },
        { text: '[redis] Connecting to Redis queue server...', type: 'info' },
        { text: '[redis] Redis client connected on redis://127.0.0.1:6379.', type: 'success' },
        { text: '[system] Server status: READY & LISTENING.', type: 'success' }
      ]);
      return;
    }

    // Append logs line-by-line with a slight animation/delay
    newLogs.forEach((log, idx) => {
      setTimeout(() => {
        setTerminalLogs(prev => [...prev, log]);
      }, idx * 80);
    });
  };

  const getLogStyle = (type) => {
    switch (type) {
      case 'command': return 'text-slate-100 font-bold';
      case 'info': return 'text-sky-400';
      case 'success': return 'text-emerald-400';
      case 'db': return 'text-amber-400 italic';
      case 'redis': return 'text-pink-400';
      case 'worker': return 'text-purple-400';
      default: return 'text-slate-400';
    }
  };

  const archNodes = [
    { id: 'client', name: 'Postman / Client', details: 'Handles incoming API HTTP requests, routing parameters, and JWT headers securely.' },
    { id: 'express', name: 'Express Server', details: 'Implements REST API endpoints, JWT access validations, controllers, and error handling middlewares.' },
    { id: 'db', name: 'MySQL (Sequelize)', details: 'Relational database layer configured via Sequelize ORM for schema mappings and query execution.' },
    { id: 'redis', name: 'Redis Job Queue', details: 'BullMQ-backed asynchronous in-memory list broker that buffers report generations and notification tasks.' },
    { id: 'worker', name: 'Background Workers', details: 'Node.js processes running separate event loops to fetch background tasks from Redis and process them.' },
    { id: 'email', name: 'SMTP Service', details: 'relays transaction-safe emails and reporting archives directly to facilitators and managers.' }
  ];

  return (
    <div className="flex flex-col h-[380px] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-inner text-xs font-mono">
      {/* Visual Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] text-slate-500 font-mono ml-2">Console Service &bull; port 5000</span>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-1.5">
          <button 
            onClick={() => setActiveTab('terminal')}
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition ${
              activeTab === 'terminal' ? 'bg-lightAccent dark:bg-darkAccent text-white' : 'bg-slate-900 text-slate-500 hover:text-slate-350'
            }`}
          >
            Terminal
          </button>
          <button 
            onClick={() => setActiveTab('swagger')}
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition ${
              activeTab === 'swagger' ? 'bg-lightAccent dark:bg-darkAccent text-white' : 'bg-slate-900 text-slate-500 hover:text-slate-350'
            }`}
          >
            Swagger
          </button>
          <button 
            onClick={() => setActiveTab('architecture')}
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition ${
              activeTab === 'architecture' ? 'bg-lightAccent dark:bg-darkAccent text-white' : 'bg-slate-900 text-slate-500 hover:text-slate-350'
            }`}
          >
            Architecture
          </button>
          <button 
            onClick={() => setActiveTab('video')}
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition ${
              activeTab === 'video' ? 'bg-lightAccent dark:bg-darkAccent text-white' : 'bg-slate-900 text-slate-500 hover:text-slate-350'
            }`}
          >
            Video
          </button>
        </div>
      </div>

      {/* Main Tab Viewports */}
      <div className="flex-1 overflow-hidden relative bg-[#060A14] p-4 text-slate-300">
        
        {/* Terminal Tab */}
        {activeTab === 'terminal' && (
          <div className="flex flex-col h-full justify-between gap-3">
            {/* Scrollable logs console */}
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-1.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={`${getLogStyle(log.type)} whitespace-pre-wrap leading-relaxed`}>
                  {log.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Actions Panel */}
            <div className="flex flex-wrap gap-2 pt-2.5 border-t border-slate-900 bg-slate-950/20">
              <button 
                onClick={() => runLogSequence('login')}
                className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-bold text-sky-400"
              >
                POST /auth/login
              </button>
              <button 
                onClick={() => runLogSequence('allocate')}
                className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-bold text-emerald-400"
              >
                POST /courses/allocate
              </button>
              <button 
                onClick={() => runLogSequence('report')}
                className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-bold text-pink-400"
              >
                POST /reports/generate
              </button>
              <button 
                onClick={() => runLogSequence('reset')}
                className="px-2 py-1 rounded bg-slate-950 hover:bg-slate-900 border border-slate-900 text-[10px] font-bold text-slate-500 ml-auto"
                title="Reset log screen"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Swagger Tab */}
        {activeTab === 'swagger' && (
          <div className="h-full overflow-y-auto space-y-3.5 pr-1.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            <div className="flex items-center justify-between pb-1 border-b border-slate-900">
              <span className="text-[10px] font-bold uppercase text-slate-500">API Endpoint List</span>
              <span className="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">OAS v3.0</span>
            </div>

            {/* Route List */}
            <div className="space-y-2.5">
              {/* Endpoint 1: Auth */}
              <div className="border border-slate-900 rounded-lg overflow-hidden bg-slate-950/40">
                <button 
                  onClick={() => setActiveEndpoint(activeEndpoint === 'auth' ? null : 'auth')}
                  className="w-full flex items-center justify-between p-2 hover:bg-slate-950/60 transition text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-400 text-[9px] font-bold uppercase">POST</span>
                    <span className="font-bold text-slate-200">/api/v1/auth/login</span>
                  </div>
                  <span className="text-slate-600 text-[9px]">{activeEndpoint === 'auth' ? '▲' : '▼'}</span>
                </button>
                {activeEndpoint === 'auth' && (
                  <div className="p-3 border-t border-slate-900 bg-slate-950/80 space-y-2 text-[10px] leading-relaxed">
                    <p className="text-slate-400">Generates secure JWT session access tokens for verified multi-role accounts.</p>
                    <div className="font-bold text-slate-500 mt-2">REQUEST SCHEMA:</div>
                    <pre className="p-2 rounded bg-slate-900 text-sky-400">
                      {`{
  "email": "manager@alu.edu",
  "password": "••••••••••"
}`}
                    </pre>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-500">RESPONSE (200 OK):</span>
                      <button 
                        onClick={() => {
                          setActiveTab('terminal');
                          runLogSequence('login');
                        }}
                        className="px-2 py-0.5 rounded bg-sky-600 text-white font-bold hover:bg-sky-500 transition text-[9px]"
                      >
                        Try it Out &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Endpoint 2: Allocate */}
              <div className="border border-slate-900 rounded-lg overflow-hidden bg-slate-950/40">
                <button 
                  onClick={() => setActiveEndpoint(activeEndpoint === 'allocate' ? null : 'allocate')}
                  className="w-full flex items-center justify-between p-2 hover:bg-slate-950/60 transition text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[9px] font-bold uppercase">POST</span>
                    <span className="font-bold text-slate-200">/api/v1/courses/allocate</span>
                  </div>
                  <span className="text-slate-600 text-[9px]">{activeEndpoint === 'allocate' ? '▲' : '▼'}</span>
                </button>
                {activeEndpoint === 'allocate' && (
                  <div className="p-3 border-t border-slate-900 bg-slate-950/80 space-y-2 text-[10px] leading-relaxed">
                    <p className="text-slate-400">Allocates a course to a facilitator. Guarded by Manager role checks. Triggers async notification queues.</p>
                    <div className="font-bold text-slate-500 mt-2">HEADERS:</div>
                    <pre className="p-2 rounded bg-slate-900 text-amber-500">Authorization: Bearer &lt;JWT_TOKEN&gt;</pre>
                    <div className="font-bold text-slate-500 mt-2">REQUEST SCHEMA:</div>
                    <pre className="p-2 rounded bg-slate-900 text-emerald-400">
                      {`{
  "courseId": 101,
  "facilitatorId": 8
}`}
                    </pre>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-500">RESPONSE (201 Created):</span>
                      <button 
                        onClick={() => {
                          setActiveTab('terminal');
                          runLogSequence('allocate');
                        }}
                        className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition text-[9px]"
                      >
                        Try it Out &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Endpoint 3: Reports */}
              <div className="border border-slate-900 rounded-lg overflow-hidden bg-slate-950/40">
                <button 
                  onClick={() => setActiveEndpoint(activeEndpoint === 'reports' ? null : 'reports')}
                  className="w-full flex items-center justify-between p-2 hover:bg-slate-950/60 transition text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-pink-500/15 text-pink-400 text-[9px] font-bold uppercase">POST</span>
                    <span className="font-bold text-slate-200">/api/v1/reports/facilitators/generate</span>
                  </div>
                  <span className="text-slate-600 text-[9px]">{activeEndpoint === 'reports' ? '▲' : '▼'}</span>
                </button>
                {activeEndpoint === 'reports' && (
                  <div className="p-3 border-t border-slate-900 bg-slate-950/80 space-y-2 text-[10px] leading-relaxed">
                    <p className="text-slate-400">Triggers an asynchronous facilitator activity report compiled by background Redis queue workers.</p>
                    <div className="font-bold text-slate-500 mt-2">HEADERS:</div>
                    <pre className="p-2 rounded bg-slate-900 text-amber-500">Authorization: Bearer &lt;JWT_TOKEN&gt;</pre>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-500">RESPONSE (202 Accepted):</span>
                      <button 
                        onClick={() => {
                          setActiveTab('terminal');
                          runLogSequence('report');
                        }}
                        className="px-2 py-0.5 rounded bg-pink-600 text-white font-bold hover:bg-pink-500 transition text-[9px]"
                      >
                        Try it Out &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Architecture Tab */}
        {activeTab === 'architecture' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1 border-b border-slate-900 mb-3">
              <span className="text-[10px] font-bold uppercase text-slate-500">System Architecture Flow</span>
              <span className="text-[9px] text-slate-500">Click a node to inspect</span>
            </div>

            {/* Interactive Flow Grid */}
            <div className="grid grid-cols-3 gap-2 py-2">
              {archNodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveArchNode(node.id === activeArchNode ? null : node.id)}
                  className={`p-2 rounded border text-center transition flex flex-col justify-center items-center gap-1 ${
                    node.id === activeArchNode 
                      ? 'border-lightAccent dark:border-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 font-bold text-white' 
                      : 'border-slate-850 hover:border-slate-800 bg-slate-950/60'
                  }`}
                >
                  <span className="text-[9px] text-lightAccent dark:text-darkAccent uppercase font-bold tracking-wider">{node.name.split(' ')[0]}</span>
                  <span className="text-[8px] text-slate-500 leading-tight truncate w-full">{node.name.split(' ').slice(1).join(' ') || 'Layer'}</span>
                </button>
              ))}
            </div>

            {/* Info Drawer */}
            <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-900 min-h-[75px] flex items-center justify-center">
              {activeArchNode ? (
                <p className="text-[11px] text-slate-350 leading-relaxed font-sans">
                  <strong>{archNodes.find(n => n.id === activeArchNode)?.name}:</strong>{' '}
                  {archNodes.find(n => n.id === activeArchNode)?.details}
                </p>
              ) : (
                <p className="text-[10px] text-slate-500 text-center italic font-sans">
                  💡 Click on any component node above to inspect its architecture function, database synchronization, or queue integration details.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Video Tab */}
        {activeTab === 'video' && (
          <div className="h-full flex flex-col justify-between items-center bg-slate-950/45 rounded-lg border border-slate-900 p-6 text-center select-none">
            <div className="space-y-2 max-w-sm pt-2">
              <span className="text-[10px] text-lightAccent dark:text-darkAccent font-bold uppercase tracking-wider block">
                SUMMATIVE SHOWCASE
              </span>
              <h4 className="text-slate-200 font-bold text-sm">Backend Walkthrough Demo Video</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                Watch a comprehensive 10-minute video walkthrough of the backend systems, route handler architectures, Redis background job dispatchers, and Postman query runs.
              </p>
            </div>
            
            <a
              href="https://www.youtube.com/watch?v=l9glh6fZ3-w"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-red-650 hover:bg-red-700 active:scale-98 text-white px-6 py-3 rounded-xl shadow-lg shadow-red-950/25 border border-red-800 transition-all font-sans font-bold text-xs"
            >
              <FaPlay className="text-sm group-hover:scale-110 transition-transform" />
              <span>Watch Video Walkthrough</span>
            </a>

            <div className="text-[10px] text-slate-500 font-mono">
              🎥 Opens walkthrough on YouTube &bull; watch system in action
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// STATIC DATA: walkthroughFiles
const walkthroughFiles = {
  server: {
    path: 'server.js',
    description: 'Express Application Entrypoint - configures middleware, database connection, and mounts the API router.',
    code: `const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());

// Main API Router Mounting
app.use('/api/v1', apiRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(\`[ERROR] \${err.message}\`);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(\`[node] Express app running on port \${PORT}\`);
  });
});`
  },
  database: {
    path: 'config/database.js',
    description: 'Sequelize ORM Initialization - establishes a pool-managed connection to the MySQL relational database.',
    code: `const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = sequelize;`
  },
  redis: {
    path: 'config/redis.js',
    description: 'Redis client initialization for managing background task broker messaging queues.',
    code: `const Redis = require('ioredis');

const redisClient = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  maxRetriesPerRequest: null
});

redisClient.on('connect', () => {
  console.log('[redis] Client connected to server.');
});

redisClient.on('error', (err) => {
  console.error('[redis] Connection error:', err);
});

module.exports = redisClient;`
  },
  authController: {
    path: 'controllers/authController.js',
    description: 'User Authentication Handler - verifies credentials via bcrypt, checks RBAC roles, and signs JWT tokens.',
    code: `const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    
    res.json({
      token: accessToken,
      user: { name: user.name, role: user.role }
    });
  } catch (err) {
    next(err);
  }
};`
  },
  courseController: {
    path: 'controllers/courseController.js',
    description: 'Course Allocator Handler - saves allocation record to MySQL database and enqueues Redis background jobs.',
    code: `const Allocation = require('../models/Allocation');
const Course = require('../models/Course');
const User = require('../models/User');
const redisQueue = require('../config/redis');

exports.allocate = async (req, res, next) => {
  try {
    const { courseId, facilitatorId } = req.body;
    
    const allocation = await Allocation.create({
      courseId,
      facilitatorId,
      status: 'assigned'
    });

    // Enqueue background email dispatch task using Redis list push (LPUSH)
    await redisQueue.lpush('notification_queue', JSON.stringify({
      type: 'COURSE_ALLOCATED',
      courseId,
      facilitatorId
    }));

    res.status(201).json({
      message: 'Course allocated successfully',
      allocation
    });
  } catch (err) {
    next(err);
  }
};`
  },
  reportController: {
    path: 'controllers/reportController.js',
    description: 'Facilitator Reporting Handler - triggers async reports compilation by offloading heavy execution to workers.',
    code: `const redisQueue = require('../config/redis');

exports.generateReport = async (req, res, next) => {
  try {
    const facilitatorId = req.user.id;
    
    // Enqueue report generation payload asynchronously
    const jobPayload = { type: 'GENERATE_REPORT', facilitatorId };
    await redisQueue.lpush('notification_queue', JSON.stringify(jobPayload));

    // Respond immediately with 202 Accepted status for async processing
    res.status(202).json({ 
      message: 'Report generation request accepted',
      status: 'processing_async'
    });
  } catch (err) {
    next(err);
  }
};`
  },
  userModel: {
    path: 'models/User.js',
    description: 'Sequelize relational model defining credentials schema and ENUM role privileges.',
    code: `const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } },
  password_hash: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('manager', 'facilitator', 'student'), defaultValue: 'student' }
});

module.exports = User;`
  },
  allocationModel: {
    path: 'models/Allocation.js',
    description: 'Sequelize junction model representing course allocations mapping facilitators and course IDs.',
    code: `const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Allocation = sequelize.define('Allocation', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  courseId: { type: DataTypes.INTEGER, allowNull: false },
  facilitatorId: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'active' }
});

module.exports = Allocation;`
  },
  worker: {
    path: 'workers/notificationWorker.js',
    description: 'Redis Queue Worker - continuous event loop polling jobs and dispatching email notifications.',
    code: `const redisQueue = require('../config/redis');
const User = require('../models/User');
const emailService = require('../services/emailService');

async function startWorker() {
  console.log('[worker] Background worker listening for jobs...');
  while (true) {
    // Block pop (BRPOP) waits indefinitely until a job is pushed onto queue
    const jobData = await redisQueue.brpop('notification_queue', 0);
    try {
      const job = JSON.parse(jobData[1]);
      console.log(\`[worker] Processing job: \${job.type}\`);
      
      if (job.type === 'COURSE_ALLOCATED') {
        const fac = await User.findByPk(job.facilitatorId);
        await emailService.send({
          to: fac.email,
          subject: 'New Course Allocation Assigned',
          body: \`Hi \${fac.name}, you have been assigned to course ID \${job.courseId}.\`
        });
      }
    } catch (err) {
      console.error('[worker] Job processing failed:', err);
    }
  }
}

startWorker();`
  }
};

export default PortfolioPage;
