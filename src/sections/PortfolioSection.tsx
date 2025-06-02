import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Category = 'all' | 'design' | 'development' | 'branding';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: ('design' | 'development' | 'branding')[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    description: 'A complete overhaul of an online retail platform focusing on user experience and conversion optimization.',
    imageUrl: 'https://images.pexels.com/photos/4352190/pexels-photo-4352190.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['design', 'development'],
    link: '#',
  },
  {
    id: 2,
    title: 'Financial App UI',
    description: 'A modern, clean interface for a personal finance management application with data visualization.',
    imageUrl: 'https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['design'],
    link: '#',
  },
  {
    id: 3,
    title: 'Brand Identity System',
    description: 'Comprehensive brand guidelines and visual identity for a tech startup entering the market.',
    imageUrl: 'https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['branding'],
    link: '#',
  },
  {
    id: 4,
    title: 'Social Platform',
    description: 'Full-stack development of a niche social networking platform with real-time features.',
    imageUrl: 'https://images.pexels.com/photos/10772945/pexels-photo-10772945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['development'],
    link: '#',
  },
  {
    id: 5,
    title: 'Mobile App Redesign',
    description: 'Improving usability and visual appeal for an existing health tracking mobile application.',
    imageUrl: 'https://images.pexels.com/photos/6476043/pexels-photo-6476043.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['design', 'development'],
    link: '#',
  },
  {
    id: 6,
    title: 'Startup Branding',
    description: 'Complete brand identity including logo design, color system, and marketing materials.',
    imageUrl: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['branding'],
    link: '#',
  },
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory as any));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="section bg-neutral-50 dark:bg-neutral-850">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="section-title">Selected Work</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mx-auto">
            Explore my recent projects and see how I approach design and development challenges to create 
            effective solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(['all', 'design', 'development', 'branding'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="card group"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <span 
                      key={cat}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;