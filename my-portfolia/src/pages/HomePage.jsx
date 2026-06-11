import Hero from '../components/Hero';
import EngineeringFocus from '../components/EngineeringFocus';
import Technologies from '../components/Technologies';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import { LATEST_WRITING } from '../constants';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import BlogCard from '../components/ui/BlogCard';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  // Select top 2 writing pieces for summary homepage
  const featuredWriting = LATEST_WRITING.slice(0, 2);

  return (
    <div className="space-y-20 py-6">
      {/* Hero Section */}
      <Hero />

      {/* Engineering Focus Section */}
      <EngineeringFocus />

      {/* Technical Stack Section */}
      <Technologies />

      {/* Featured Projects Preview */}
      <FeaturedProjects />

      {/* Career Experience Timeline Section */}
      <Experience />

      {/* Featured Writing Preview */}
      <div className="border-b border-borderPrimary pb-16">
        <SectionHeader
          title="Latest Insights"
          description="Technical logs, system analysis, and engineering summaries of lessons learned."
          action={
            <Button to="/blog" variant="outline" icon={<ArrowRight size={14} />} iconPosition="right" className="!py-2.5 !px-4 text-[13px]">
              All Writing
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWriting.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <BlogCard
                title={article.title}
                description={article.description}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                link="/blog"
                state={{ articleId: article.id }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage;
