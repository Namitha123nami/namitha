import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-950/30 dark:to-secondary-950/30 -z-10"></div>
      
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-neutral-700 dark:text-neutral-300">
            Product Designer & Developer
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto md:mx-0">
            I create engaging digital experiences that connect people and brands through thoughtful design and innovative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary">
              Let's Connect
            </a>
            <a href="#portfolio" className="btn-outline">
              View My Work
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 blur-3xl opacity-20 dark:opacity-30"></div>
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="John Doe portrait" 
              className="rounded-full w-full h-full object-cover border-4 border-white dark:border-neutral-800 shadow-xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;