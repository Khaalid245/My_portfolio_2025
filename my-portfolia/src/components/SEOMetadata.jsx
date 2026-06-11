import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://my-portfolio-2025-three.vercel.app';
const defaultImage = 'https://github.com/Khaalid245.png'; // Direct public GitHub avatar for sharing

const seoData = {
  '/': {
    title: 'Khalid Abdillahi | Software Engineering Student & Backend Developer',
    description: 'Software Engineering student at African Leadership University and Mastercard Foundation Scholar. Building scalable APIs, backend database designs, and Docker/DevOps configurations.',
  },
  '/about/me': {
    title: 'About Khalid Abdillahi | Software Engineering Student',
    description: 'Learn more about Khalid Abdillahi, a Software Engineering student at African Leadership University, Mastercard Foundation Scholar, and backend-focused full-stack developer.',
  },
  '/about/resume': {
    title: 'Resume & Technical Experience | Khalid Abdillahi',
    description: 'Explore Khalid Abdillahi\'s software engineering resume, featuring backend developer internships, database modeling, containerization, and academic projects.',
  },
  '/about/philosophy': {
    title: 'Engineering Philosophy | Khalid Abdillahi',
    description: 'Read Khalid Abdillahi\'s developer philosophy: writing clear APIs, robust transactional database structures, and learning containerized development workflows.',
  },
  '/portfolio': {
    title: 'Software Projects Portfolio | Khalid Abdillahi',
    description: 'A showcase of software engineering backend systems, Capstone monitoring platforms, and API codebases built by Khalid Abdillahi.',
  },
  '/blog': {
    title: 'Engineering Notes & Systems Log | Khalid Abdillahi',
    description: 'Read technical writeups and developer notes on JWT authentication cookies, Redis cache-aside, Nginx proxies, and learning DevOps practices.',
  },
  '/lab': {
    title: 'Systems Lab & Backend Sandbox | Khalid Abdillahi',
    description: 'A sandboxed testing playground containing local Nginx proxies, Docker Compose setups, and SQL row-locking concurrency experiments.',
  },
  '/now': {
    title: 'Now | What Khalid Abdillahi is Doing',
    description: 'Explore what Khalid Abdillahi is currently building, studying at ALU, reading, and testing in local containerized development environments.',
  },
  '/contact': {
    title: 'Contact Khalid Abdillahi | Get in Touch',
    description: 'Connect with Khalid Abdillahi for backend software engineering internships, collaborative development projects, and API system building.',
  }
};

const SEOMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    // Determine metadata based on current hash path or pathname
    const currentPath = location.pathname;
    const pageMeta = seoData[currentPath] || seoData['/'];

    // 1. Update Title
    document.title = pageMeta.title;

    // 2. Helper to set meta tags
    const updateMetaTag = (attributeName, attributeValue, contentValue) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 3. Update Meta Description
    updateMetaTag('name', 'description', pageMeta.description);

    // 4. Update Canonical Link
    // Handle both standard and hash paths for accurate indexing link parity
    const canonicalUrl = `${siteUrl}/#${currentPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 5. Update Open Graph (OG) tags
    updateMetaTag('property', 'og:title', pageMeta.title);
    updateMetaTag('property', 'og:description', pageMeta.description);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', defaultImage);
    updateMetaTag('property', 'og:type', 'website');

    // 6. Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', pageMeta.title);
    updateMetaTag('name', 'twitter:description', pageMeta.description);
    updateMetaTag('name', 'twitter:image', defaultImage);

    // 7. Inject JSON-LD Person Structured Data (Schema.org)
    let schemaScript = document.getElementById('jsonld-person-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'jsonld-person-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Khalid Abdillahi',
      'givenName': 'Khalid',
      'familyName': 'Abdillahi',
      'gender': 'Male',
      'jobTitle': 'Backend-Focused Full-Stack Developer',
      'alumniOf': {
        '@type': 'EducationalOrganization',
        'name': 'African Leadership University',
        'sameAs': 'https://www.alueducation.com/'
      },
      'award': 'Mastercard Foundation Scholar',
      'description': pageMeta.description,
      'url': siteUrl,
      'image': defaultImage,
      'sameAs': [
        'https://github.com/Khaalid245',
        'https://www.linkedin.com/in/khalid-abdillahi-269871276/'
      ],
      'knowsAbout': [
        'Software Engineering',
        'Backend Development',
        'Database Design',
        'Docker',
        'DevOps Foundations',
        'Node.js',
        'Django REST Framework'
      ]
    };

    schemaScript.textContent = JSON.stringify(personSchema, null, 2);

  }, [location]);

  return null;
};

export default SEOMetadata;
