import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, PencilRuler, BarChart3 } from 'lucide-react';

const skills = [
  { icon: <BrainCircuit className="w-6 h-6 text-primary-600 dark:text-primary-400" />, name: 'Strategy' },
  { icon: <PencilRuler className="w-6 h-6 text-primary-600 dark:text-primary-400" />, name: 'Design' },
  { icon: <BarChart3 className="w-6 h-6 text-primary-600 dark:text-primary-400" />, name: 'Analytics' },
];

const timeline = [
  {
    year: '2023',
    title: 'Senior Product Designer',
    company: 'Tech Innovations Inc',
    description: 'Leading product design initiatives and mentoring junior designers.'
  },
  {
    year: '2020',
    title: 'UX/UI Designer',
    company: 'Creative Solutions',
    description: 'Created user-centered designs for various web and mobile applications.'
  },
  {
    year: '2018',
    title: 'Design Intern',
    company: 'StartUp Studio',
    description: 'Assisted in design projects and learned industry best practices.'
  },
  {
    year: '2017',
    title: 'Bachelor of Design',
    company: 'Design University',
    description: 'Graduated with honors in Interaction Design.'
  }
];

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="section bg-white dark:bg-neutral-900">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">About Me</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mx-auto">
            I'm a passionate designer and developer with over 5 years of experience creating 
            beautiful, functional digital experiences that solve real problems.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                I combine strategic thinking with creative execution to build products that people love. 
                With experience across the entire product development lifecycle, I bring a holistic perspective 
                to every project.
              </p>
              <p className="text-lg mb-6">
                My approach centers on understanding user needs and business goals to create experiences 
                that are both beautiful and effective. I'm passionate about accessibility, performance, 
                and creating systems that scale.
              </p>
              <p className="text-lg">
                When I'm not designing or coding, you'll find me hiking in the mountains, reading science 
                fiction, or experimenting with new cooking recipes.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-full"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">My Journey</h3>
            <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 pb-8 space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-2 border-primary-600 dark:border-primary-400 bg-white dark:bg-neutral-900"></div>
                  <div className="absolute -left-16 mt-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-primary-600 dark:text-primary-400">{item.company}</p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;