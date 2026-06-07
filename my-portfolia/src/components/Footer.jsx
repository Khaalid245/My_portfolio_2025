import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, Cpu } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter, FaInstagram as Instagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Lab (Resources)', path: '/lab' },
    { name: 'Blog (Writing)', path: '/blog' },
    { name: 'Now', path: '/now' },
  ];

  const aboutLinks = [
    { name: 'About Me', path: '/about/me' },
    { name: 'Resume', path: '/about/resume' },
    { name: 'Philosophy', path: '/about/philosophy' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Khaalid245?tab=repositories', icon: <Github size={16} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/khalid-abdillahi-269871276/', icon: <Linkedin size={16} /> },
    { name: 'Twitter', href: 'https://twitter.com', icon: <Twitter size={16} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/', icon: <Instagram size={16} /> },
  ];

  return (
    <footer className="py-16 mt-24 border-t border-borderPrimary/60 text-textSecondary font-sans no-print relative overflow-hidden">
      {/* Ambient decorative glow at the bottom */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-borderPrimary/45">
        
        {/* Brand details column (5 cols) */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-accent/5 border border-accent/15 text-accent">
              <Cpu size={16} />
            </span>
            <span className="font-mono text-sm font-bold text-textPrimary uppercase tracking-wider">
              Khalid Abdillahi
            </span>
          </div>
          <p className="text-[13px] text-textSecondary leading-relaxed max-w-sm">
            Full-Stack Systems Engineer specializing in reliable backend services, secure REST APIs, DevOps container workflows, and AI integrations.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/15">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
              Available for Opportunities
            </span>
          </div>
        </div>

        {/* Explore Links column (2 cols) */}
        <div className="md:col-span-2 space-y-3.5 text-left">
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-textPrimary font-bold border-b border-borderPrimary/30 pb-1.5">
            Explore
          </h4>
          <ul className="space-y-2 text-[12px] font-mono">
            {exploreLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="hover:text-accent transition duration-200 block py-0.5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Links column (2 cols) */}
        <div className="md:col-span-2 space-y-3.5 text-left">
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-textPrimary font-bold border-b border-borderPrimary/30 pb-1.5">
            About & Info
          </h4>
          <ul className="space-y-2 text-[12px] font-mono">
            {aboutLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="hover:text-accent transition duration-200 block py-0.5">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect column (3 cols) */}
        <div className="md:col-span-3 space-y-3.5 text-left">
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-textPrimary font-bold border-b border-borderPrimary/30 pb-1.5">
            Connect
          </h4>
          <div className="space-y-3">
            <a 
              href="mailto:khalidabdillahi30@gmail.com" 
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-borderPrimary/85 bg-cardBg/20 hover:bg-accent/5 hover:border-accent/30 text-textSecondary hover:text-textPrimary transition duration-300 font-mono text-[11px] w-full"
            >
              <Mail size={13} className="text-accent" />
              <span className="truncate">khalidabdillahi30@gmail.com</span>
              <ArrowUpRight size={10} className="ml-auto opacity-50 flex-shrink-0" />
            </a>
            
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg border border-borderPrimary bg-cardBg/20 hover:bg-accent/5 hover:border-accent/30 text-textMuted hover:text-textPrimary transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright details */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-textMuted font-mono pt-8">
        <span>&copy; {currentYear} Khalid Abdillahi. All rights reserved.</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>Built with React, Vite & Tailwind CSS</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
