/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaServer, FaGlobe, FaDocker, FaBrain, FaRegClock, FaCalendarAlt, FaEnvelope, FaCheckCircle, FaSearch } from 'react-icons/fa';

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center bg-slate-950 border border-b-0 border-slate-900 rounded-t-xl px-4 py-2 font-mono text-[10px] text-slate-500 select-none">
        <span>{language.toUpperCase()}</span>
        <button 
          onClick={handleCopy}
          className="hover:text-lightAccent dark:hover:text-darkAccent text-slate-400 transition cursor-pointer font-mono text-[9px] font-bold"
        >
          {copied ? 'COPIED!' : 'COPY'}
        </button>
      </div>
      <pre className="p-4 rounded-b-xl bg-[#090D1A] border border-slate-900 text-[11px] font-mono leading-relaxed overflow-x-auto text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const stats = [
  { label: 'Backend Systems' },
  { label: 'API Design' },
  { label: 'DevOps Learning' },
  { label: 'AI Workflows' },
  { label: 'Database Design' },
  { label: 'Docker & CI/CD' }
];

const categories = [
  {
    title: 'Backend',
    icon: <FaServer className="text-xl text-lightAccent dark:text-darkAccent" />,
    topics: ['Django REST', 'Node.js/Express', 'Sequelize ORM', 'Database Locking']
  },
  {
    title: 'Full Stack',
    icon: <FaGlobe className="text-xl text-lightAccent dark:text-darkAccent" />,
    topics: ['React', 'TypeScript', 'State Management', 'Stripe checkout']
  },
  {
    title: 'DevOps',
    icon: <FaDocker className="text-xl text-lightAccent dark:text-darkAccent" />,
    topics: ['Docker Compose', 'Nginx Proxies', 'CI/CD Pipelines', 'Linux droplets']
  },
  {
    title: 'AI',
    icon: <FaBrain className="text-xl text-lightAccent dark:text-darkAccent" />,
    topics: ['LLM APIs', 'Vector Databases', 'Prompt Eng', 'Retrieval Models']
  }
];

const articles = [
  {
    id: 'jwt-auth',
    title: 'How I Built Secure JWT Authentication with Django REST Framework',
    category: 'Backend',
    description: 'Securing stateless REST endpoints in Django using HTTP-only cookies, token rotation, and custom middleware protection.',
    readTime: '8 min read',
    date: 'May 2026',
    featured: true,
    sections: [
      { type: 'paragraph', text: 'In modern stateless backend architectures, JSON Web Tokens (JWT) are widely used for security. However, simple token verification is often implemented insecurely, exposing user sessions to Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF). When building the Somali Early Warning Support capstone system, securing REST API sessions was a critical requirement. Here is how I structured DRF to store access guards safely.' },
      { type: 'heading', text: 'The Core Threat Model: LocalStorage vs HttpOnly Cookies' },
      { type: 'paragraph', text: 'The most common mistake is storing JWTs in browser LocalStorage. If an attacker succeeds in executing an XSS payload via an unescaped text input, they can access the window localStorage database, immediately stealing active session tokens. To mitigate this risk, I opted for a split-storage strategy: the access token is stored in-memory (short lifetime), while the refresh token is stored in an HttpOnly, Secure, and SameSite=Strict cookie. This completely shields the refresh token from Javascript reads.' },
      { type: 'heading', text: 'Custom JWT Cookie Authentication Middleware' },
      { type: 'paragraph', text: 'To implement this in Django REST Framework, SimpleJWT serves as the foundation. I created a custom authentication backend to search incoming request headers first and fall back to cookie inspections if the Authorization headers are empty.' },
      { type: 'code', code: `# custom_auth.py
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.conf import settings

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        header = self.get_header(request)
        if header is None:
            # Fallback to HttpOnly cookie search
            raw_token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])
        else:
            raw_token = self.get_raw_token(header)

        if raw_token is None:
            return None

        validated_token = self.get_validated_token(raw_token)
        return self.get_user(validated_token), validated_token`, language: 'python' },
      { type: 'heading', text: 'Token Rotation and Expiry Management' },
      { type: 'paragraph', text: 'The system uses short-lived access tokens (15 minutes) and long-lived refresh tokens (7 days). When simple actions occur, the client refreshes the session in the background via a POST query to /auth/refresh. The server rotates simple tokens on every refresh request, invalidating the previous refresh token and issuing a new one to prevent replay attacks.' }
    ]
  },
  {
    id: 'ecommerce-backend',
    title: 'What I Learned Building an E-Commerce Backend with Redis and Stripe',
    category: 'Full Stack',
    description: 'Managing transaction locking, Redis performance caching, and webhook idempotency under high concurrency checkout workflows.',
    readTime: '10 min read',
    date: 'April 2026',
    featured: false,
    sections: [
      { type: 'paragraph', text: 'Building the Femvelle modest fashion commerce platform exposed me to real-world database concurrency challenges. When hundreds of users attempt to purchase items simultaneously, legacy systems often suffer stock double-selling, transaction timeout failures, or webhook status mismatch problems. Resolving these concerns required database transaction locking, cache reservation, and idempotent endpoint structures.' },
      { type: 'heading', text: 'Concurrency Defense: Database Row-Locking' },
      { type: 'paragraph', text: 'If two concurrent threads read product stock count simultaneously (e.g. stock is 1), both will see that items are available and proceed to write decreased stocks. This causes double selling. To prevent this, I implemented MySQL database InnoDB transaction row-locking using Sequelize SELECT FOR UPDATE clauses, ensuring that a product row remains locked until order writing completes.' },
      { type: 'code', code: `// orderService.js
const checkoutOrder = async (userId, items) => {
  const transaction = await sequelize.transaction();
  try {
    for (const item of items) {
      // Locking row using FOR UPDATE to prevent concurrent modifications
      const product = await Product.findOne({
        where: { id: item.productId },
        lock: transaction.LOCK.UPDATE,
        transaction
      });
      if (product.stock < item.quantity) {
        throw new Error(\`Insufficient stock for item: \${product.name}\`);
      }
      // Decrement database count
      await product.decrement('stock', { by: item.quantity, transaction });
    }
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};`, language: 'javascript' },
      { type: 'heading', text: 'Caching Static Products and Catalog Listings' },
      { type: 'paragraph', text: 'To avoid hitting MySQL databases on every catalog lookup, I set up a Redis cache-aside caching pattern. When a user requests catalog details, the API queries Redis first. If it is a cache miss, it reads from MySQL and sets the Redis key with a 1-hour expiration duration. When product stocks change, the backend invalidates the corresponding Redis cache keys instantly.' },
      { type: 'heading', text: 'Idempotency and Stripe Webhooks' },
      { type: 'paragraph', text: 'Stripe webhook servers can send duplicate hooks, or network timeouts might cause retries. To prevent duplicate fulfillment charges, I set up an idempotent webhook handler. For each incoming stripe event ID, the system checks a processed_events table. If it is already logged, the server skips processing and responds immediately with 200 OK.' }
    ]
  },
  {
    id: 'devops-journey',
    title: 'My Journey Learning DevOps and Backend Systems as a Software Engineering Student',
    category: 'DevOps',
    description: 'Transitioning from local scripts to server configuration, Docker virtualization, Nginx proxies, and automation pipelines.',
    readTime: '6 min read',
    date: 'March 2026',
    featured: false,
    sections: [
      { type: 'paragraph', text: 'As a software engineering student, I spent my early years focusing on writing backend route logic and building UI grids. However, I soon realized that writing code is only 30% of the software engineering puzzle. The real challenge is packaging, delivering, and keeping systems operational. Moving into DevOps changed how I structure, virtualize, and monitor web services.' },
      { type: 'heading', text: 'Standardizing Environments with Docker' },
      { type: 'paragraph', text: 'The "works on my machine" issue is the first bottleneck students encounter. Containerizing my Express backend and MySQL database services using Docker Compose ensured complete configuration consistency between local testing setups and production droplets. I implemented multi-stage Docker builds to keep final production images tiny and secure.' },
      { type: 'code', code: `# Dockerfile.production
# Build Stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Runner Stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
EXPOSE 5000
CMD ["node", "server.js"]`, language: 'dockerfile' },
      { type: 'heading', text: 'Reverse Proxy Routing with Nginx' },
      { type: 'paragraph', text: 'Deploying direct application endpoints on ports 5000 or 8000 is insecure. I set up an Nginx reverse proxy service on port 80/443 to manage CORS, route traffic to correct Express app instances, configure load-balancing pathways, and handle secure SSL termination configuration safely.' },
      { type: 'heading', text: 'Systems Thinking: Automating the Pipeline' },
      { type: 'paragraph', text: 'Instead of manually uploading code, I wrote automated CI/CD pipelines in GitHub Actions. Every push to main triggers lint checks, unit tests, and packages docker builds, automatically updating staging containers upon successful verification.' }
    ]
  }
];

const learningJourney = [
  { year: '2023', label: 'Learning JavaScript' },
  { year: '2024', label: 'Building Full Stack Applications' },
  { year: '2025', label: 'Backend Systems & APIs' },
  { year: '2026', label: 'Docker • DevOps • Full-Stack AI Systems' }
];

const BlogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    // Check if location state has articleId
    if (location.state?.articleId) {
      const art = articles.find(a => a.id === location.state.articleId);
      if (art) {
        setActiveArticle(art);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    
    // Check URL query param
    const params = new URLSearchParams(location.search);
    const articleId = params.get('article');
    if (articleId) {
      const art = articles.find(a => a.id === articleId);
      if (art) {
        setActiveArticle(art);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    // Otherwise, close the article view
    setActiveArticle(null);
  }, [location]);

  const handleArticleSelect = (art) => {
    setActiveArticle(art);
    navigate(`/blog?article=${art.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToNotes = () => {
    setActiveArticle(null);
    navigate('/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const featuredArticle = articles.find(art => art.featured) || articles[0];

  // If reading an article, render inline article view
  if (activeArticle) {
    return (
      <div className="max-w-3xl mx-auto py-10 space-y-8">
        {/* Back breadcrumb */}
        <button 
          onClick={handleBackToNotes}
          className="inline-flex items-center gap-2 font-mono text-xs text-lightAccent dark:text-darkAccent hover:opacity-80 transition cursor-pointer"
        >
          &larr; Back to Notes
        </button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent px-2.5 py-0.5 rounded border border-lightAccent/20 dark:border-darkAccent/20 font-bold uppercase tracking-wider text-[10px]">
              {activeArticle.category}
            </span>
            <span className="flex items-center gap-1"><FaRegClock /> {activeArticle.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><FaCalendarAlt /> {activeArticle.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-lightText dark:text-darkText font-mono leading-tight">
            {activeArticle.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            {activeArticle.description}
          </p>
        </div>

        {/* Article Body */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 space-y-6">
          {activeArticle.sections.map((section, idx) => {
            if (section.type === 'paragraph') {
              return (
                <p key={idx} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {section.text}
                </p>
              );
            } else if (section.type === 'heading') {
              return (
                <h3 key={idx} className="text-lg font-bold text-lightText dark:text-darkText font-mono pt-4 leading-normal">
                  {section.text}
                </h3>
              );
            } else if (section.type === 'code') {
              return (
                <CodeBlock key={idx} code={section.code} language={section.language} />
              );
            }
            return null;
          })}
        </div>

        {/* Next article link */}
        {(() => {
          const currentIndex = articles.findIndex(a => a.id === activeArticle.id);
          const nextArticle = articles[(currentIndex + 1) % articles.length];
          return (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 space-y-4">
              <h4 className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Next Up
              </h4>
              <div 
                onClick={() => handleArticleSelect(nextArticle)}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 cursor-pointer hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded text-lightAccent dark:text-darkAccent font-bold uppercase tracking-wider">
                    {nextArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {nextArticle.readTime}
                  </span>
                </div>
                <h3 className="font-mono text-base font-bold text-lightText dark:text-darkText leading-tight mt-3 group-hover:text-lightAccent dark:group-hover:text-darkAccent transition-colors">
                  {nextArticle.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans mt-2 line-clamp-2">
                  {nextArticle.description}
                </p>
              </div>
            </div>
          );
        })()}

        {/* Footer actions */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-between items-center font-mono">
          <button 
            onClick={handleBackToNotes}
            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard text-xs text-lightText dark:text-darkText px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-bold"
          >
            &larr; Back to Notes
          </button>
          <span className="text-[10px] text-slate-500">
            Written by Khalid Abdillahi &bull; Engineering Notes
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-6">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <span className="font-mono text-xs uppercase tracking-widest text-lightAccent dark:text-darkAccent font-bold block mb-1">
          SYSTEMS &bull; BACKEND &bull; DEVOPS &bull; AI
        </span>
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
          className="max-w-2xl mx-auto text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans"
        >
          Documenting practical lessons from backend engineering, DevOps learning, and scalable application development.
        </motion.p>
        
        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 pt-2 max-w-4xl mx-auto font-mono"
        >
          {stats.map((stat, index) => (
            <span 
              key={index}
              className="rounded-full border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard px-3 py-0.5 text-[11px] text-slate-600 dark:text-slate-400 font-semibold"
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
                <FaRegClock /> {featuredArticle.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {featuredArticle.date}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-lightText dark:text-darkText font-mono leading-tight">
              {featuredArticle.title}
            </h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl font-sans">
              {featuredArticle.description}
            </p>
            
            <div className="pt-2">
              <button 
                onClick={() => handleArticleSelect(featuredArticle)}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-lightAccent dark:text-darkAccent hover:underline font-bold"
              >
                Read Article &rarr;
              </button>
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
                  ? 'border-lightAccent dark:border-darkAccent bg-lightAccent/[0.02] dark:bg-darkAccent/[0.02] shadow-sm animate-pulse'
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
                    <span className="h-1 w-1 bg-lightAccent dark:bg-darkAccent rounded-full animate-ping" />
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
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500 text-xs">
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
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {art.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-850 mt-6">
                  <span className="text-[10px] font-mono text-slate-450 flex items-center gap-1">
                    <FaCalendarAlt /> {art.date}
                  </span>
                  
                  <button 
                    onClick={() => handleArticleSelect(art)}
                    className="text-xs font-mono text-lightAccent dark:text-darkAccent hover:underline font-bold"
                  >
                    Read More &rarr;
                  </button>
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
              <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                I share practical lessons from projects, backend architecture, DevOps experiments, and full-stack AI systems.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 dark:text-slate-500">
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
                  className="rounded-xl bg-lightAccent dark:bg-darkAccent hover:opacity-90 px-6 py-2.5 font-mono text-sm text-white font-bold transition duration-300 shadow-md whitespace-nowrap cursor-pointer"
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
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed font-sans">
                Thank you for subscribing! I will send you technical insights directly to your inbox.
              </p>
              <button
                onClick={() => setSubscribed(false)}
                className="text-xs font-mono text-slate-400 hover:text-lightAccent dark:hover:text-darkAccent hover:underline cursor-pointer"
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
