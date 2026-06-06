import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = {
  title: "Khalid Abdillahi",
  subtitle: "Full-Stack Systems Engineer",
  specialization: "Backend Systems • DevOps • AI Engineering",
  description: "I build backend systems, APIs, and modern web applications that solve operational problems and scale with growing user needs. I'm interested in designing maintainable software, improving developer workflows, and building products that create measurable value.",
  stats: [
    { label: "Experience", value: "2+ Years" },
    { label: "Systems Built", value: "10+" },
    { label: "Primary Focus", value: "Backend & DevOps" },
    { label: "AI Integration", value: "LLMs & Agents" }
  ]
};

export const ENGINEERING_FOCUS = [
  {
    title: "Backend Systems",
    skills: ["REST APIs", "Authentication", "Database Design", "Scalable Architecture"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "CI/CD Pipeline", "Linux Administration", "Cloud Deployment"]
  },
  {
    title: "AI Engineering",
    skills: ["Python", "LLMs", "AI Integrations", "Machine Learning"]
  }
];

export const PROJECTS = [
  {
    title: "Distributed E-Commerce Orchestration Engine",
    image: project1,
    problem: "Pessimistic concurrency conflicts and database read lockups during high checkout volume.",
    solution: "Implemented pessimistic row-locking on product inventory and configured a Redis read-through cache.",
    stack: ["Node.js", "Express", "Redis", "MySQL", "JWT"],
    architecture: "Express Gateway / Redis Catalog Cache / MySQL InnoDB Lock Layer",
    link: "#"
  },
  {
    title: "Asynchronous Analytics & Event Pipeline",
    image: project2,
    problem: "Analytics ingestion query paths causing write contention and stalling learner progress trackers.",
    solution: "Designed index-matched schemas, offloaded calculations asynchronously, and normalized key tables.",
    stack: ["React.js", "Flask", "SQLAlchemy", "MySQL", "Tailwind CSS"],
    architecture: "Flask Queue / MySQL Assessment Indexes / React Progress Dashboard",
    link: "#"
  },
  {
    title: "Edge-Optimized Static Asset Delivery Pipeline",
    image: project3,
    problem: "High Largest Contentful Paint (LCP) latency and missing edge cache efficiency.",
    solution: "Configured automated WebP compilation, aggressive cache headers, and Cloudflare CDN proxy.",
    stack: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
    architecture: "Vite Static Build / Cloudflare CDN Edge Cache / GitHub Actions CI",
    link: "#"
  },
  {
    title: "Decoupled Content Delivery API & Gateway",
    image: project4,
    problem: "Monolithic token vulnerabilities (CSRF/XSS) and coupled frontend deployment chains.",
    solution: "Decoupled the gateway with Express, strict CORS policies, and secure HTTP-only cookie-based rotation.",
    stack: ["React.js", "Express", "MySQL", "Sequelize", "Tailwind CSS"],
    architecture: "Express Gateway API / Decoupled React Client / Sequelize ORM",
    link: "#"
  }
];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Distributed Systems & Full-Stack Engineer",
    company: "Ramas Inc.",
    bullets: [
      "Architected event-driven backend microservices using Node.js and Redis.",
      "Re-engineered MongoDB database indexes and query paths to eliminate in-memory sorting, reducing query execution latency by 40%.",
      "Introduced semantic RESTful API versioning to decouple frontend components, enabling zero-downtime client-facing migrations."
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "React"]
  },
  {
    year: "2022 - 2023",
    role: "Full-Stack Engineer",
    company: "dhanbaal",
    bullets: [
      "Engineered asset-delivery pipelines and bundle splitting in Next.js, reducing Largest Contentful Paint (LCP) from 3.2s to 1.1s.",
      "Co-designed relational MySQL schemas and matched query execution plans with proper indexes to minimize join query overhead."
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "MySQL"]
  },
  {
    year: "2022 - 2023",
    role: "Backend Engineer",
    company: "Mega",
    bullets: [
      "Designed and optimized relational databases using PostgreSQL and built robust RESTful APIs in Python/Django.",
      "Decoupled monolithic services into domain-driven endpoints, improving maintainability, increasing query throughput, and expanding unit test coverage."
    ],
    technologies: ["Python", "Django", "PostgreSQL", "React.js"]
  },
  {
    year: "2023 - 2023",
    role: "Software Engineer",
    company: "Somali academy",
    bullets: [
      "Designed dynamic progress tracking state machines and built asynchronous task offloaders using Flask and Node.js.",
      "Restructured MongoDB collections from highly nested structures to referenced models, reducing write amplification and increasing analytics throughput."
    ],
    technologies: ["Flask", "React", "Node.js", "MongoDB", "SQL"]
  }
];

export const LATEST_WRITING = [
  {
    title: "Building Redis Notification Systems",
    description: "An architectural guide on using Redis Pub/Sub and Streams to build reliable real-time system alerts.",
    link: "#",
    date: "May 2026",
    readTime: "5 min read",
    category: "System Design"
  },
  {
    title: "JWT Authentication in Node.js",
    description: "Securing Express APIs using HTTP-only cookies, token rotation, and strict CORS policies.",
    link: "#",
    date: "April 2026",
    readTime: "7 min read",
    category: "Security"
  },
  {
    title: "My Journey Into DevOps",
    description: "How transitioning from building frontends to managing deployments and Linux environments changed my engineering mindset.",
    link: "#",
    date: "March 2026",
    readTime: "6 min read",
    category: "DevOps"
  }
];

export const ABOUT_PREVIEW = {
  text: "I enjoy building software that solves real operational problems. From backend APIs to deployment workflows, I'm focused on becoming a systems-oriented engineer.",
  link: "#"
};

export const CONTACT_CTA = {
  title: "Let's Build Something Useful",
  roles: [
    "Software Engineering Roles",
    "Backend Development",
    "Freelance Projects",
    "Collaboration"
  ],
  buttonText: "Contact Me",
  email: "megakhalid@gmail.com"
};
