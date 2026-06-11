import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";


export const HERO_CONTENT = {
  title: "Khalid Abdillahi",
  subtitle: "Full-Stack AI Systems Engineer",
  specialization: "Backend & DevOps • Full-Stack AI Systems",
  description: "Backend-focused full-stack developer building modern AI-powered systems and scalable applications.",
  stats: [
    { label: "Experience", value: "2+ Years" },
    { label: "Systems Built", value: "10+" },
    { label: "Primary Focus", value: "Backend & DevOps" },
    { label: "AI Integration", value: "Full-Stack AI Systems" }
  ]
};

export const ENGINEERING_FOCUS = [
  {
    title: "Backend Systems",
    skills: ["REST APIs", "Authentication", "Database Design", "Scalable Architecture"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "CI/CD Pipelines", "Linux Shell", "Nginx Configuration"]
  },
  {
    title: "Full-Stack AI Systems",
    skills: ["Python", "LLM APIs", "Vector Databases", "AI Workflows"]
  }
];

export const PROJECTS = [
  {
    title: "Alif Monitoring System (Capstone Project)",
    image: project1,
    problem: "Educational institutions struggle to monitor student attendance and identify dropout risks early.",
    solution: "Developed an early warning capstone platform utilizing React.js and Django REST Framework to automate attendance tracking workflows and identify risk factors.",
    stack: ["React.js", "Tailwind CSS", "Django REST Framework", "MySQL", "Docker"],
    architecture: "React.js Client / Django REST Framework Backend / MySQL Database / Docker",
    link: "https://github.com/Khaalid245?tab=repositories"
  },
  {
    title: "Femvelle E-Commerce Platform",
    image: project2,
    problem: "Developing a reliable transactional storefront and checkout system that handles payment verifications, high database write contentions, and concurrent orders safely.",
    solution: "Engineered a full-stack React and Django REST platform integrated with Stripe checkout webhooks, Redis performance caching, and duplicate order prevention workflows.",
    stack: ["React.js", "TypeScript", "Django REST Framework", "MySQL", "Redis", "Docker", "Stripe"],
    architecture: "React.js / TypeScript / Django REST Framework / MySQL / Redis / Docker / Stripe",
    link: "https://github.com/Khaalid245/FEMVELLA"
  },
  {
    title: "Course Management Platform — Backend Service",
    image: null,
    problem: "Academic operations struggle with course allocation tracking, activity monitoring, and automated notifications under manual administration workflows.",
    solution: "Built a modular Node.js/Express backend service using Sequelize ORM for MySQL modeling, simple-jwt access guards, and Redis background queues for async notifications.",
    stack: ["Node.js", "Express", "MySQL", "Sequelize", "Redis", "JWT", "Swagger"],
    architecture: "Node.js / Express / MySQL / Sequelize / Redis / JWT / Swagger",
    link: "https://github.com/Khaalid245/Course_managment_backend"
  }
];

export const EXPERIENCES = [
  {
    year: "Oct 2025 — Present",
    role: "Backend Developer Intern",
    company: "InfinityTech",
    bullets: [
      "Currently working on backend systems, scalable APIs, authentication workflows, and deployment practices for full-stack applications.",
      "Gaining hands-on experience with Docker, CI/CD workflows, database optimization, and frontend-backend integration in real development environments."
    ],
    technologies: ["Django REST Framework", "Docker", "GitHub Actions", "MySQL", "React.js", "APIs"]
  },
  {
    year: "Jan 2024 — Sep 2024",
    role: "Backend Developer Intern",
    company: "InfinityTech",
    bullets: [
      "Worked on backend development, REST APIs, and database integration for web applications using Django REST Framework and Node.js.",
      "Collaborated with frontend developers to improve API communication and application performance while learning deployment workflows and debugging practices."
    ],
    technologies: ["Django REST Framework", "Node.js", "MySQL", "REST APIs", "React.js", "Git"]
  },
  {
    year: "2024 — Present",
    role: "Freelance Full-Stack Developer",
    company: "Remote",
    bullets: [
      "Built and deployed full-stack web applications for learning, business, and educational projects.",
      "Worked on frontend interfaces, backend APIs, authentication systems, and responsive user experiences while continuously improving development and deployment skills."
    ],
    technologies: ["React.js", "Tailwind CSS", "Django", "Node.js", "MySQL", "Docker"]
  },
  {
    year: "Aug 2024 — Jan 2025",
    role: "Graphic Designer",
    company: "GAO Uganda Limited",
    bullets: [
      "Created visual designs and digital content for educational and media-related projects.",
      "Worked on branding materials, image editing, layout design, and creative communication."
    ],
    technologies: ["Adobe Photoshop", "Canva", "Graphic Design"]
  },
  {
    year: "Sep 2020 — Apr 2024",
    role: "Camera Man",
    company: "Mega Media Production",
    bullets: [
      "Supported media production activities including video recording, editing support, and event coverage while working in collaborative production environments."
    ],
    technologies: ["Camera Operation", "Adobe Photoshop", "Media Production"]
  }
];

export const LATEST_WRITING = [
  {
    id: "jwt-auth",
    title: "How I Built Secure JWT Authentication with Django REST Framework",
    description: "Securing stateless REST endpoints in Django using HTTP-only cookies, token rotation, and custom middleware protection.",
    link: "/blog",
    date: "May 2026",
    readTime: "8 min read",
    category: "Backend"
  },
  {
    id: "ecommerce-backend",
    title: "What I Learned Building an E-Commerce Backend with Redis and Stripe",
    description: "Managing transaction locking, Redis performance caching, and webhook idempotency under high concurrency checkout workflows.",
    link: "/blog",
    date: "April 2026",
    readTime: "10 min read",
    category: "Full Stack"
  },
  {
    id: "devops-journey",
    title: "My Journey Learning DevOps and Backend Systems as a Software Engineering Student",
    description: "Transitioning from local scripts to server configuration, Docker virtualization, Nginx proxies, and automation pipelines.",
    link: "/blog",
    date: "March 2026",
    readTime: "6 min read",
    category: "DevOps"
  }
];

export const ABOUT_PREVIEW = {
  text: "I’m a software engineering student and backend-focused developer passionate about building scalable web applications and learning how modern systems work behind the scenes.",
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
  email: "khalidabdillahi30@gmail.com"
};
