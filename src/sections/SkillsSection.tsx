import React from 'react';
import { motion } from 'framer-motion';
import { 
  Figma, 
  Code, 
  Database, 
  LayoutGrid, 
  Lightbulb, 
  PenTool, 
  Shuffle, 
  BarChart3, 
  Zap, 
  Search 
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'design' | 'development' | 'other';
}

const skills: Skill[] = [
  { name: 'UI Design', icon: <LayoutGrid size={24} />, category: 'design' },
  { name: 'UX Research', icon: <Search size={24} />, category: 'design' },
  { name: 'Wireframing', icon: <PenTool size={24} />, category: 'design' },
  { name: 'Prototyping', icon: <Shuffle size={24} />, category: 'design' },
  { name: 'Figma', icon: <Figma size={24} />, category: 'design' },
  { name: 'React', icon: <Code size={24} />, category: 'development' },
  { name: 'TypeScript', icon: <Code size={24} />, category: 'development' },
  { name: 'Node.js', icon: <Database size={24} />, category: 'development' },
  { name: 'Tailwind CSS', icon: <Code size={24} />, category: 'development' },
  { name: 'Analytics', icon: <BarChart3 size={24} />, category: 'other' },
  { name: 'Strategy', icon: <Lightbulb size={24} />, category: 'other' },
  { name: 'Performance', icon: <Zap size={24} />, category: 'other' },
];

const SkillsSection: React.FC = () => {
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
      transition: { duration: 0.4 }
    }
  };

  const designSkills = skills.filter(skill => skill.category === 'design');
  const developmentSkills = skills.filter(skill => skill.category === 'development');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="section bg-neutral-50 dark:bg-neutral-850">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            My diverse skillset allows me to handle projects end-to-end, from concept 
            and strategy through design and implementation.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Design</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            >
              {designSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-4 flex flex-col items-center text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-3 text-primary-600 dark:text-primary-400">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Development</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            >
              {developmentSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-4 flex flex-col items-center text-center hover:bg-secondary-50 dark:hover:bg-secondary-900/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mb-3 text-secondary-600 dark:text-secondary-400">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Strategy & Analysis</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {otherSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-4 flex flex-col items-center text-center hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-3 text-accent-600 dark:text-accent-400">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;