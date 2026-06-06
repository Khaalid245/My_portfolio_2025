import { CONTACT_CTA } from "../constants";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_CTA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pb-24 pt-8">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-bold">
                Available for Roles
              </span>
            </div>
            
            <h2 className="text-[32px] md:text-[44px] font-heading font-extrabold tracking-tight text-textPrimary leading-tight">
              {CONTACT_CTA.title}
            </h2>
            
            <p className="text-[14px] md:text-[15px] font-body text-textSecondary leading-relaxed max-w-xl">
              {"I am actively looking for full-time opportunities in distributed systems, backend engineering, and DevOps. If you're a recruiter or hiring manager looking for a developer who understands scalability, API security, and infrastructure pipelines, let's talk."}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href={`mailto:${CONTACT_CTA.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accentHover px-6 py-3 font-body text-[14px] text-white font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Mail size={16} />
                <span>Send Email</span>
              </a>
              
              <button 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-borderPrimary bg-cardBg/40 hover:bg-cardBg px-5 py-3 font-mono text-[13px] text-textSecondary font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Right Column: Roles & Direct Connections Card */}
          <div className="lg:col-span-5">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-borderPrimary bg-cardBg/45 backdrop-blur-sm p-6 md:p-8 text-left shadow-sm space-y-6 relative overflow-hidden"
            >
              {/* Ambient radial accent highlight */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
              
              <div>
                <p className="text-textMuted font-mono text-[10px] uppercase tracking-widest mb-3 border-b border-borderPrimary pb-2">
                  Open to:
                </p>
                <ul className="space-y-3">
                  {CONTACT_CTA.roles.map((role, rIndex) => (
                    <li key={rIndex} className="flex items-center gap-3 text-textSecondary text-[14px] font-medium font-body">
                      <div className="h-5 w-5 rounded-md bg-accent/5 border border-accent/15 flex items-center justify-center flex-shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      </div>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-borderPrimary space-y-3">
                <p className="text-textMuted font-mono text-[10px] uppercase tracking-widest">
                  Direct Connections
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://github.com/Khaalid245" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-borderPrimary/80 bg-cardBg/20 hover:bg-accent/5 hover:border-accent/30 text-textSecondary hover:text-textPrimary transition-all duration-300 font-mono text-[12px]"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                    <ExternalLink size={10} className="ml-auto opacity-50" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/khalid-abdillahi-269871276/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-borderPrimary/80 bg-cardBg/20 hover:bg-accent/5 hover:border-accent/30 text-textSecondary hover:text-textPrimary transition-all duration-300 font-mono text-[12px]"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                    <ExternalLink size={10} className="ml-auto opacity-50" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
