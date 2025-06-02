import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "John completely transformed our digital presence. His strategic approach to design not only made our platform more visually appealing but significantly improved user engagement and conversion rates.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "Novus Tech",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    content: "Working with John was a game-changer for our startup. He understood our vision perfectly and translated it into a compelling brand identity and user experience that has helped us stand out in a competitive market.",
    author: "Michael Rodriguez",
    position: "Founder",
    company: "Altitude Ventures",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    content: "John's attention to detail and user-centric approach made all the difference in our app redesign. He doesn't just create beautiful interfaces; he creates experiences that users love to engage with.",
    author: "Emma Chen",
    position: "Product Manager",
    company: "InterConnect",
    imageUrl: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-white dark:bg-neutral-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote size={300} className="absolute -top-10 -left-10 text-primary-500" />
        <Quote size={300} className="absolute -bottom-10 -right-10 text-primary-500" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle mx-auto">
            I'm proud to have worked with amazing clients who value the strategic 
            and creative approach I bring to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 flex flex-col h-full"
            >
              <div className="mb-6">
                <Quote size={32} className="text-primary-400" />
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;