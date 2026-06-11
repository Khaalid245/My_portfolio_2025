import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const featured = [
  {
    title: 'Course Management platform (Backend)',
    tech: ['Express', 'Node.js', 'Sequelize ORM', 'Redis', 'JWT', 'MySQL'],
    desc: 'A backend service designed to learn role-based allocations, audit logging, and Redis async queue workers under local Docker development.',
    linkText: 'View Repository →',
    url: 'https://github.com/Khaalid245/Course_managment_backend'
  },
  {
    title: 'Femvelle modest commerce platform (Backend)',
    tech: ['Django REST', 'Redis cache', 'InnoDB Row-Locks', 'Stripe checkout', 'MySQL'],
    desc: 'An e-commerce backend built to explore MySQL transaction locks for double-sell protection and Redis cache-aside catalog lookups.',
    linkText: 'View Repository →',
    url: 'https://github.com/Khaalid245/FEMVELLA'
  }
];

const codeFiles = {
  docker: {
    name: 'docker-compose.yml',
    language: 'yaml',
    description: 'A local multi-container development setup orchestrating an Express service, MySQL, Redis, and an Nginx reverse proxy wrapper to standardize environment variables.',
    code: `version: '3.8'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile.production
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
      - REDIS_HOST=cache
    depends_on:
      - db
      - cache

  db:
    image: mysql:8.0
    command: --default-authentication-plugin=mysql_native_password
    volumes:
      - mysql_data:/var/lib/mysql
    environment:
      - MYSQL_DATABASE=course_allocator
      - MYSQL_ROOT_PASSWORD=secret

  cache:
    image: redis:7.0-alpine
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./certbot/conf:/etc/letsencrypt
    depends_on:
      - api

volumes:
  mysql_data:
  redis_data:`
  },
  nginx: {
    name: 'nginx.conf',
    language: 'nginx',
    description: 'Nginx server block configuration for routing local traffic from port 80 to container endpoints, handling CORS headers, and testing location proxy forwards.',
    code: `server {
    listen 80;
    server_name localhost;

    # CORS configurations for local API testing
    add_header 'Access-Control-Allow-Origin' 'http://localhost:5173' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type, X-Requested-With' always;

    location / {
        proxy_pass http://api:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`
  },
  sequelize: {
    name: 'sequelize-lock.js',
    language: 'javascript',
    description: 'An API controller implementation testing database row-level locking (SELECT FOR UPDATE) via Sequelize to prevent simultaneous stock double-booking.',
    code: `// Preventing stock oversells using SELECT FOR UPDATE
const purchaseItem = async (db, orderId, productId, quantity) => {
  const transaction = await db.sequelize.transaction();
  try {
    // Lock product row to prevent concurrency race conditions
    const product = await db.Product.findOne({
      where: { id: productId },
      lock: transaction.LOCK.UPDATE,
      transaction
    });

    if (product.stock < quantity) {
      throw new Error(\`Insufficient stock for product: \${product.name}\`);
    }

    // Decrement stock and log order
    await product.decrement('stock', { by: quantity, transaction });
    const order = await db.Order.create({
      id: orderId,
      productId,
      quantity,
      status: 'reserved'
    }, { transaction });

    await transaction.commit();
    return order;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};`
  },
  django: {
    name: 'django-auth-cookie.py',
    language: 'python',
    description: 'Custom authentication backend code verifying JWT session tokens stored inside secure, HTTP-only cookies in a local testing environment.',
    code: `# Custom token verification middleware fallback to http-only cookies
from django.conf import settings
from rest_framework_simplejwt.authentication import JWTAuthentication

class CustomCookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        # Search for standard Authorization headers first
        header = self.get_header(request)
        if header is not None:
            raw_token = self.get_raw_token(header)
        else:
            # Fallback: check secure HTTP-only cookies
            raw_token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE'])

        if raw_token is None:
            return None

        validated_token = self.get_validated_token(raw_token)
        return self.get_user(validated_token), validated_token`
  }
};

const LabPage = () => {
  const location = useLocation();
  const [selectedFile, setSelectedFile] = useState('docker');
  const [copiedFile, setCopiedFile] = useState(false);

  useEffect(() => {
    if (location.state?.fileId) {
      if (codeFiles[location.state.fileId]) {
        setSelectedFile(location.state.fileId);
      }
    }
  }, [location.state]);

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedFile(true);
    setTimeout(() => setCopiedFile(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-6">
      
      {/* 1. Hero Section */}
      <section className="text-center space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <span className="font-mono text-xs uppercase tracking-widest text-lightAccent dark:text-darkAccent font-bold block mb-1">
          Systems Lab
        </span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight text-lightText dark:text-darkText font-mono"
        >
          Systems Lab
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans"
        >
          A backend-focused sandbox where I document local infrastructure experiments, Nginx server configs, and custom API code structures.
        </motion.p>
      </section>

      {/* 2. Featured Toolkit */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-lightText dark:text-darkText font-mono border-b border-slate-200/60 dark:border-slate-800/40 pb-2">
          Featured Sandbox Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-lightCard dark:bg-darkCard p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {item.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="rounded border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 text-[9px] font-mono text-slate-500 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-mono text-base font-bold text-lightText dark:text-darkText">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-850 mt-6">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-lightAccent dark:text-darkAccent hover:underline font-bold"
                >
                  {item.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Systems Code Explorer */}
      <section className="space-y-6">
        <div className="border-b border-slate-200/60 dark:border-slate-800/40 pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-bold tracking-tight text-lightText dark:text-darkText font-mono">
            Systems Code Explorer
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
            Real configurations from local development experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* File Tabs List */}
          <div className="lg:col-span-4 flex flex-col gap-2 font-mono">
            {Object.entries(codeFiles).map(([key, file]) => {
              const isSelected = selectedFile === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedFile(key)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left text-xs md:text-sm transition duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-lightAccent dark:border-darkAccent bg-lightAccent/5 dark:bg-darkAccent/5 text-lightAccent dark:text-darkAccent font-bold'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span>{file.name}</span>
                  <ChevronRight size={12} className={`transition-transform duration-200 ${isSelected ? 'translate-x-1' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Code Viewer Panel */}
          <div className="lg:col-span-8 flex flex-col justify-between border border-slate-200 dark:border-slate-800 rounded-2xl bg-lightCard dark:bg-[#090D1A] overflow-hidden">
            <div>
              {/* Header */}
              <div className="flex justify-between items-center bg-slate-950 border-b border-slate-900 px-6 py-3 font-mono text-xs text-slate-400 select-none">
                <span>{codeFiles[selectedFile].name}</span>
                <button
                  onClick={() => handleCopyCode(codeFiles[selectedFile].code)}
                  className="hover:text-lightAccent dark:hover:text-darkAccent text-slate-400 transition cursor-pointer font-bold uppercase text-[10px]"
                >
                  {copiedFile ? 'COPIED!' : 'COPY'}
                </button>
              </div>

              {/* Code */}
              <pre className="p-6 text-[12px] font-mono leading-relaxed overflow-x-auto text-green-400 bg-[#090D1A] max-h-[350px]">
                <code>{codeFiles[selectedFile].code}</code>
              </pre>
            </div>

            {/* Description */}
            <div className="p-6 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800/80">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                {codeFiles[selectedFile].description}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LabPage;
