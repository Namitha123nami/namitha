import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { AtSign, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form data:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Message sent successfully! (This is a demo - no actual email was sent)');
    reset();
  };

  return (
    <section id="contact" className="section bg-white dark:bg-neutral-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss potential collaborations? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Whether you have a question, want to start a project, or simply want to connect, 
              feel free to reach out. I'm always open to discussing new projects, creative ideas 
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400 flex-shrink-0">
                  <AtSign size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:hello@johndoe.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                    hello@johndoe.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors dark:bg-neutral-800 dark:border-neutral-700 ${
                      errors.name 
                        ? 'border-error-500 focus:ring-error-500/50' 
                        : 'border-neutral-300 focus:ring-primary-500/50 dark:focus:ring-primary-400/30'
                    }`}
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors dark:bg-neutral-800 dark:border-neutral-700 ${
                      errors.email 
                        ? 'border-error-500 focus:ring-error-500/50' 
                        : 'border-neutral-300 focus:ring-primary-500/50 dark:focus:ring-primary-400/30'
                    }`}
                    placeholder="Your email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors dark:bg-neutral-800 dark:border-neutral-700 ${
                    errors.subject 
                      ? 'border-error-500 focus:ring-error-500/50' 
                      : 'border-neutral-300 focus:ring-primary-500/50 dark:focus:ring-primary-400/30'
                  }`}
                  placeholder="Message subject"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors dark:bg-neutral-800 dark:border-neutral-700 ${
                    errors.message 
                      ? 'border-error-500 focus:ring-error-500/50' 
                      : 'border-neutral-300 focus:ring-primary-500/50 dark:focus:ring-primary-400/30'
                  }`}
                  placeholder="Your message"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    }
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : (
                  <Send size={18} className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;