import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, FaGithub, FaLinkedin, FaGlobe, FaCheckCircle, 
  FaChevronDown 
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState('idle'); // idle | sending | success
  
  // Accordion FAQ state (stores the index of the expanded FAQ, or null if collapsed)
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    
    setFormState('sending');
    // Simulate sending message
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Scroll to form helper
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: 'What technologies do you work with?',
      a: 'I specialize in Node.js, Django, React, Next.js, PostgreSQL, MongoDB, Redis, and containerization using Docker.'
    },
    {
      q: 'Are you available for remote work?',
      a: 'Yes, I am fully open to remote software engineering roles and collaboration globally.'
    },
    {
      q: 'Do you work on freelance projects?',
      a: 'Yes, depending on the scope, timeline, and alignment with my backend/systems expertise.'
    },
    {
      q: 'What are you currently learning?',
      a: 'I am actively expanding my skillset in advanced DevOps, cloud orchestration (Docker, CI/CD, Kubernetes), and AI application engineering.'
    }
  ];

  const currentStatus = [
    { text: 'Open to Software Engineering Roles', active: true },
    { text: 'Backend Development Projects', active: true },
    { text: 'Full Stack Freelance Work', active: true },
    { text: 'Open Source Collaboration', active: true },
    { text: 'Learning DevOps & AI Engineering', active: false }
  ];

  const techStack = [
    { name: 'Node.js' },
    { name: 'Django' },
    { name: 'React' },
    { name: 'Docker' },
    { name: 'PostgreSQL' },
    { name: 'Python' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-24 py-10">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-6 pb-12 border-b border-slate-200 dark:border-slate-800">
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
          className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
        >
          Whether you have an idea, an engineering role, or just want to discuss backend systems, DevOps, or AI, I&apos;d love to hear from you.
        </motion.p>

        <div className="flex gap-4 justify-center pt-4">
          <a
            href="mailto:megakhalid@gmail.com"
            className="rounded-xl bg-lightAccent dark:bg-darkAccent hover:opacity-90 px-6 py-2.5 font-mono text-sm text-white font-bold transition duration-300 shadow-md"
          >
            Email Me
          </a>
          <Link
            to="/about/resume"
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightBg dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900 px-6 py-2.5 font-mono text-sm text-lightText dark:text-darkText transition duration-300"
          >
            View Resume
          </Link>
        </div>
      </section>

      {/* 2. Ways to Connect */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Mail */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4"
        >
          <div className="p-3 bg-lightBg dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <FaEnvelope className="text-xl" />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText">Mail</h3>
            <a href="mailto:megakhalid@gmail.com" className="text-xs text-lightAccent dark:text-darkAccent hover:underline block truncate font-mono">
              megakhalid@gmail.com
            </a>
            <p className="text-[10px] text-slate-450 dark:text-slate-500 pt-1">Replies within 24 hours</p>
          </div>
        </motion.div>

        {/* GitHub */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4"
        >
          <div className="p-3 bg-lightBg dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <FaGithub className="text-xl" />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText">GitHub</h3>
            <a href="https://github.com/Khaalid245" target="_blank" rel="noopener noreferrer" className="text-xs text-lightAccent dark:text-darkAccent hover:underline block font-mono">
              github.com/Khaalid245
            </a>
            <p className="text-[10px] text-slate-450 dark:text-slate-500 pt-1">View open source projects</p>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4"
        >
          <div className="p-3 bg-lightBg dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <FaLinkedin className="text-xl" />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/khalid-abdillahi-269871276/" target="_blank" rel="noopener noreferrer" className="text-xs text-lightAccent dark:text-darkAccent hover:underline block font-mono">
              Connect professionally
            </a>
            <p className="text-[10px] text-slate-450 dark:text-slate-500 pt-1">Direct corporate messaging</p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 space-y-4"
        >
          <div className="p-3 bg-lightBg dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850 w-fit text-lightAccent dark:text-darkAccent">
            <FaGlobe className="text-xl" />
          </div>
          <div className="space-y-1">
            <h3 className="font-mono text-sm font-bold text-lightText dark:text-darkText">Location</h3>
            <span className="text-xs text-slate-600 dark:text-slate-400 block font-mono">
              Remote
            </span>
            <p className="text-[10px] text-slate-450 dark:text-slate-500 pt-1">Open worldwide</p>
          </div>
        </motion.div>
      </section>

      {/* 3. Contact Form & 4. Current Status */}
      <section id="contact-form-section" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Form Container */}
        <div className="md:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 md:p-8">
          <h2 className="text-xl font-bold text-lightText dark:text-darkText font-mono mb-6 border-b border-slate-100 dark:border-slate-850 pb-2">
            Send a Message
          </h2>

          <AnimatePresence mode="wait">
            {formState !== 'success' ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-mono font-bold text-slate-500 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState === 'sending'}
                      className="w-full px-4.5 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block font-mono font-bold text-slate-500 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formState === 'sending'}
                      className="w-full px-4.5 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Project Opportunity / Core Query"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={formState === 'sending'}
                    className="w-full px-4.5 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono font-bold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    placeholder="Describe your timeline or system details..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState === 'sending'}
                    className="w-full px-4.5 py-2.5 bg-lightBg dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent text-lightText dark:text-darkText"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full bg-lightAccent dark:bg-darkAccent text-white font-mono font-bold py-3 rounded-xl hover:opacity-95 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
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
                <FaCheckCircle className="text-5xl text-emerald-500 animate-pulse" />
                <h3 className="font-mono text-lg font-bold text-lightText dark:text-darkText">Message Dispatched</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                  Thank you for reaching out! I have received your message and will reply as soon as possible.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-4 py-2 font-mono text-xs text-slate-600 dark:text-slate-400"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. Current Status Container */}
        <div className="md:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-bold text-lightText dark:text-darkText font-mono border-b border-slate-100 dark:border-slate-850 pb-2">
            Current Status
          </h2>
          
          <ul className="space-y-4">
            {currentStatus.map((status, index) => (
              <li key={index} className="flex items-start gap-3 text-xs text-slate-650 dark:text-slate-400">
                <span className="mt-0.5 shrink-0">
                  {status.active ? (
                    <span className="text-emerald-500 font-bold">✓</span>
                  ) : (
                    <span className="text-amber-500 font-bold">●</span>
                  )}
                </span>
                <span className="font-mono">{status.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. FAQ Section (Accordion) */}
      <section className="space-y-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2 text-center md:text-left">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = activeFaq === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-mono font-bold text-sm text-lightText dark:text-darkText hover:text-lightAccent dark:hover:text-darkAccent transition duration-300 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-850/40 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
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

      {/* 6. Tech Stack Preview */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2 text-center md:text-left">
          Tech Stack Preview
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-4 text-center"
            >
              <span className="font-mono text-xs font-bold text-lightText dark:text-darkText">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-8 md:p-12 text-center max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-lightText dark:text-darkText font-mono">
            Thanks for visiting.
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
            I enjoy building software that solves real-world problems and continuously improving my engineering skills. Let&apos;s create something meaningful.
          </p>
          <div className="pt-2">
            <button
              onClick={scrollToForm}
              className="rounded-xl bg-lightAccent dark:bg-darkAccent hover:opacity-90 px-6 py-2.5 font-mono text-sm text-white font-bold transition duration-300 shadow-md"
            >
              Start a Conversation →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
