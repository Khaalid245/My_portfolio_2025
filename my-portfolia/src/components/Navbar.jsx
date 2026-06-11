/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/khalid3.webp';
import { Sun, Moon, Menu, X, ChevronDown, Search } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme, onSearchClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: null,
      subItems: [
        { name: 'About Me', path: '/about/me' },
        { name: 'Resume', path: '/about/resume' },
        { name: 'Engineering Philosophy', path: '/about/philosophy' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Engineering Notes', path: '/blog' },
    { name: 'Lab', path: '/lab' },
    { name: 'Now', path: '/now' },
    { name: 'Contact', path: '/contact' }
  ];

  const isAboutActive = location.pathname.startsWith('/about/');

  return (
    <nav className="mb-10 flex items-center justify-between py-6 border-b border-borderPrimary/60 relative no-print">
      {/* Brand logo & name */}
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Khalid Logo" 
            className="w-9 h-9 rounded-full object-cover border border-borderPrimary" 
          />
          <span className="font-heading text-lg font-bold tracking-tight text-textPrimary">
            Khalid <span className="text-textMuted font-normal">Abdillahi</span>
          </span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 text-xs font-mono font-medium">
        {navLinks.map((link, index) => {
          if (link.subItems) {
            // Dropdown Menu Item
            return (
              <div 
                key={index} 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1.5 py-2 relative transition duration-300 cursor-pointer ${
                    isAboutActive ? 'text-accent font-bold' : 'text-textSecondary hover:text-accent'
                  }`}
                >
                  {link.name} <ChevronDown size={11} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  {isAboutActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-56 rounded-xl border border-borderPrimary bg-cardBg shadow-xl py-2 z-50"
                    >
                      {link.subItems.map((sub, sIndex) => (
                        <Link
                          key={sIndex}
                          to={sub.path}
                          className={`block px-4 py-2 text-[11px] text-textSecondary hover:text-accent hover:bg-bgSecondary transition-colors ${
                            location.pathname === sub.path ? 'text-accent bg-bgSecondary font-bold' : ''
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          // Single Link Item
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={index}
              to={link.path}
              className={`py-2 relative transition duration-300 ${
                isActive 
                  ? 'text-accent font-bold' 
                  : 'text-textSecondary hover:text-accent'
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Theme Toggler & Search & Socials & Menu Toggle */}
      <div className="flex items-center space-x-3">
        {/* Search Button */}
        <button
          onClick={onSearchClick}
          aria-label="Open Search Palette"
          className="p-2 rounded-xl bg-bgSecondary hover:bg-bgPrimary text-textSecondary border border-borderPrimary transition-all duration-300 flex items-center gap-1 font-mono text-[9px] select-none cursor-pointer"
        >
          <Search size={13} />
          <span className="hidden sm:inline-block border border-borderPrimary bg-bgPrimary px-1 rounded text-[8px] font-bold">⌘K</span>
        </button>

        {/* Theme Toggler Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="theme-toggle-btn p-2 rounded-xl bg-bgSecondary hover:bg-bgPrimary text-textSecondary border border-borderPrimary transition-all duration-300 cursor-pointer"
        >
          {theme === 'dark' ? (
            <Sun size={15} className="text-amber-400" />
          ) : (
            <Moon size={15} className="text-accent" />
          )}
        </button>

        {/* Social Icons (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-3 text-base border-l border-borderPrimary pl-4 text-textMuted">
          <a href="https://www.linkedin.com/in/khalid-abdillahi-269871276/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hover:text-textPrimary transition duration-200">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/Khaalid245?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="hover:text-textPrimary transition duration-200">
            <Github size={16} />
          </a>
        </div>

        {/* Mobile Hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Drawer"
          className="md:hidden p-2 rounded-xl bg-bgSecondary text-textSecondary border border-borderPrimary hover:bg-bgPrimary cursor-pointer"
        >
          {isOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
      </div>

      {/* Mobile Drawer (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-bgPrimary border-b border-borderPrimary shadow-xl py-6 z-50 md:hidden flex flex-col px-6 space-y-4 font-mono text-sm"
          >
            {navLinks.map((link, index) => {
              if (link.subItems) {
                return (
                  <div key={index} className="space-y-2 border-b border-borderPrimary/40 pb-2">
                    <div className="font-bold text-textMuted uppercase text-[10px] tracking-wider">
                      {link.name}
                    </div>
                    <div className="pl-4 flex flex-col space-y-2.5">
                      {link.subItems.map((sub, sIndex) => (
                        <Link
                          key={sIndex}
                          to={sub.path}
                          className={`block text-textSecondary hover:text-accent ${
                            location.pathname === sub.path ? 'text-accent font-bold' : ''
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`block border-b border-borderPrimary/40 pb-2 hover:text-accent ${
                    isActive ? 'text-accent font-bold' : 'text-textSecondary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Social links (Mobile Only) */}
            <div className="flex items-center gap-4 text-base text-textMuted pt-2 justify-center">
              <a href="https://www.linkedin.com/in/khalid-abdillahi-269871276/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hover:text-accent">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Khaalid245?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="hover:text-accent">
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
