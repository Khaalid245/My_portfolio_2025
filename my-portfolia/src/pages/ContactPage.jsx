import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Mail, Globe, CheckCircle, ChevronDown, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState('idle'); // idle | sending | success | error
  const [formError, setFormError] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    
    setFormState('sending');
    setFormError('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setTimeout(() => {
        setFormState('error');
        setFormError('Live email submissions are not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your local environment.');
      }, 600);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form"
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormState('error');
        setFormError(result.message || 'Submission failed. Please check your key configuration.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('error');
      setFormError('Network error. Please try again or email me directly at khalidabdillahi30@gmail.com.');
    }
  };

  const faqs = [
    {
      q: 'Are you open to full-time roles?',
      a: 'Yes, I am actively seeking entry-level software engineering roles, specifically backend-focused, full-stack, or DevOps exploration positions.'
    },
    {
      q: 'What is your backend toolchain of choice?',
      a: 'I primarily build with Node.js/Express, Django, PostgreSQL, MySQL, and Redis. I containerize local developments using Docker.'
    },
    {
      q: 'Do you collaborate on open-source?',
      a: 'Absolutely. I am interested in collaborating on database libraries, CLI tools, local automation scripts, or developer configurations.'
    },
    {
      q: 'What is your remote/relocation policy?',
      a: 'I am fully set up to work remotely and open to hybrid/on-site roles depending on alignment and location.'
    }
  ];

  const currentStatus = [
    { text: 'Open to Software Engineering Roles', active: true },
    { text: 'Backend & Systems Development', active: true },
    { text: 'Docker & DevOps Exploration', active: true },
    { text: 'Open Source Collaborations', active: true },
    { text: 'Exploring Full-Stack AI Integrations', active: true }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-6">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <span className="font-mono text-xs uppercase tracking-widest text-lightAccent dark:text-darkAccent font-bold block mb-1">
          Contact
        </span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono"
        >
          Let&apos;s Build Something Useful
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans"
        >
          Whether you want to discuss backend architectures, local Docker virtualization, open-source work, or software engineering positions, I&apos;d love to connect.
        </motion.p>

        <div className="flex gap-3 justify-center pt-2 font-mono text-xs">
          <a
            href="mailto:khalidabdillahi30@gmail.com"
            className="rounded-xl bg-lightAccent dark:bg-darkAccent hover:opacity-90 px-4 py-2 text-white font-bold transition duration-200 shadow-sm"
          >
            Email Me
          </a>
          <Link
            to="/about/resume"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900 px-4 py-2 text-lightText dark:text-darkText transition duration-200"
          >
            View Resume
          </Link>
        </div>
      </section>

      {/* 2. Ways to Connect */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Mail */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 space-y-3"
        >
          <div className="p-2 bg-slate-550/5 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <Mail size={16} />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-xs font-bold text-lightText dark:text-darkText">Mail</h3>
            <a href="mailto:khalidabdillahi30@gmail.com" className="text-[10px] text-lightAccent dark:text-darkAccent hover:underline block truncate font-mono">
              khalidabdillahi30@gmail.com
            </a>
            <p className="text-[9px] text-slate-400 dark:text-slate-500">Replies within 24 hours</p>
          </div>
        </motion.div>

        {/* GitHub */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 space-y-3"
        >
          <div className="p-2 bg-slate-550/5 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <Github size={16} />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-xs font-bold text-lightText dark:text-darkText">GitHub</h3>
            <a href="https://github.com/Khaalid245" target="_blank" rel="noopener noreferrer" className="text-[10px] text-lightAccent dark:text-darkAccent hover:underline block font-mono">
              github.com/Khaalid245
            </a>
            <p className="text-[9px] text-slate-400 dark:text-slate-500">View code sandbox repos</p>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 space-y-3"
        >
          <div className="p-2 bg-slate-550/5 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <Linkedin size={16} />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-xs font-bold text-lightText dark:text-darkText">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/khalid-abdillahi-269871276/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-lightAccent dark:text-darkAccent hover:underline block font-mono">
              Connect professionally
            </a>
            <p className="text-[9px] text-slate-400 dark:text-slate-500">Direct networking channel</p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-5 space-y-3"
        >
          <div className="p-2 bg-slate-550/5 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <Globe size={16} />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-xs font-bold text-lightText dark:text-darkText">Location</h3>
            <span className="text-[10px] text-slate-650 dark:text-slate-400 block font-mono">
              Remote / Relocation
            </span>
            <p className="text-[9px] text-slate-400 dark:text-slate-500">Open to global teams</p>
          </div>
        </motion.div>
      </section>

      {/* 3. Contact Form & Current Status */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Form Container */}
        <div className="md:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-[#090D1A] p-6 md:p-8">
          <h2 className="text-lg font-bold text-lightText dark:text-darkText font-mono mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
            Send a Message
          </h2>

          <AnimatePresence mode="wait">
            {formState !== 'success' ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 text-xs font-mono"
              >
                {formError && (
                  <div className="p-3 text-[10px] text-red-500 bg-red-50/5 border border-red-500/20 rounded-xl leading-normal text-center">
                    {formError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState === 'sending'}
                      className="w-full px-4 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formState === 'sending'}
                      className="w-full px-4 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Project Inquiry / Systems Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={formState === 'sending'}
                    className="w-full px-4 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-455 dark:text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    placeholder="Provide details about your project scope, tool stack, or role details..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState === 'sending'}
                    className="w-full px-4 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText text-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full bg-lightAccent dark:bg-darkAccent text-white font-bold py-3 rounded-xl hover:opacity-95 transition disabled:opacity-50 flex items-center justify-center gap-2 text-xs cursor-pointer"
                >
                  <Send size={13} />
                  {formState === 'sending' ? 'Sending Message...' : 'Send Message'}
                </motion.button>

              </motion.form>
            ) : (
              <motion.div
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 space-y-4"
              >
                <CheckCircle className="text-4xl text-green-500 animate-pulse" />
                <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText">Message Dispatched</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed font-sans">
                  Thank you for reaching out! I have received your message and will reply as soon as possible.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-2 font-mono text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. Current Status Container */}
        <div className="md:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 md:p-8 space-y-6">
          <h2 className="text-lg font-bold text-lightText dark:text-darkText font-mono border-b border-slate-200 dark:border-slate-800 pb-2">
            Current Status
          </h2>
          
          <ul className="space-y-4">
            {currentStatus.map((status, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="mt-0.5 shrink-0">
                  {status.active ? (
                    <span className="text-emerald-500 font-bold font-mono">✓</span>
                  ) : (
                    <span className="text-amber-500 font-bold font-mono">●</span>
                  )}
                </span>
                <span className="font-mono text-sm">{status.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. FAQ Section (Accordion) */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isExpanded = activeFaq === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-mono font-bold text-sm text-lightText dark:text-darkText hover:text-lightAccent dark:hover:text-darkAccent transition duration-200 focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`text-xs transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} size={14} />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-850/40 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
