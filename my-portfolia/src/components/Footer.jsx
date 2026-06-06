import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 mt-16 border-t border-borderPrimary/60 text-textSecondary font-mono text-xs no-print">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-borderPrimary/45 mb-8">
        
        {/* Left: Brand Details */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-textPrimary uppercase tracking-wider">
            Khalid Abdillahi
          </h3>
          <p className="text-[11px] text-textMuted font-mono">
            Full-Stack Systems Engineer • Backend Systems • DevOps • AI Engineering
          </p>
        </div>

        {/* Middle: Navigation Grid */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
          <Link to="/" className="hover:text-accent transition duration-200">Home</Link>
          <Link to="/about/me" className="hover:text-accent transition duration-200">About Me</Link>
          <Link to="/about/resume" className="hover:text-accent transition duration-200">Resume</Link>
          <Link to="/about/philosophy" className="hover:text-accent transition duration-200">Philosophy</Link>
          <Link to="/portfolio" className="hover:text-accent transition duration-200">Portfolio</Link>
          <Link to="/blog" className="hover:text-accent transition duration-200">Blog</Link>
          <Link to="/lab" className="hover:text-accent transition duration-200">Lab</Link>
          <Link to="/now" className="hover:text-accent transition duration-200">Now</Link>
          <Link to="/contact" className="hover:text-accent transition duration-200">Contact</Link>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4 text-base text-textMuted">
          <a 
            href="https://github.com/Khaalid245?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-textPrimary transition duration-200"
          >
            <Github size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/in/khalid-abdillahi-269871276/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-textPrimary transition duration-200"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href="mailto:megakhalid@gmail.com" 
            className="hover:text-textPrimary transition duration-200"
          >
            <Mail size={16} />
          </a>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-textMuted">
        <span>&copy; {new Date().getFullYear()} Khalid Abdillahi</span>
        <span>Built with React, Vite & Tailwind CSS</span>
      </div>

    </footer>
  );
};

export default Footer;
