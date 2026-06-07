import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFolderOpen, FaServer, FaDatabase, FaDocker, FaBrain, FaGlobe, 
  FaShieldAlt, FaBell, FaUsers, FaSearch, FaCode, FaBug, 
  FaRocket, FaProjectDiagram, FaChevronRight 
} from 'react-icons/fa';
import { 
  ApiArchitecture, QueueSystem, AiWorkflow 
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
              <a 
                href="#/case-study" 
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Case Study
              </a>
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
            High-Scale E-Commerce Platform
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
                  <span>DRF REST APIs & PostgreSQL database</span>
                </li>
              </ul>
            </div>

            {/* Tech stack badges */}
            <div className="space-y-2.5 border-t border-slate-200/60 dark:border-slate-800/40 pt-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 font-mono">
                {['React', 'Tailwind CSS', 'Django REST', 'PostgreSQL', 'Redis', 'Docker', 'Stripe'].map((tech, techIdx) => (
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
                href="https://github.com/Khaalid245" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                GitHub Code
              </a>
            </div>
          </div>
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

    </div>
  );
};

export default PortfolioPage;
