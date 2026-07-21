import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'CGPA', value: '9.82' },
  { label: 'Graduation', value: '2027' },
  { label: 'Certifications', value: '5+' }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">About Me</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="space-y-6 text-brand-text text-lg leading-relaxed">
                <p>
                  I'm a BCA student at Savitribai Phule Pune University with hands-on experience across multiple AI and software development internships. My journey started with a fascination for networking and cybersecurity, which evolved into a deep interest in artificial intelligence, backend systems, and full-stack development.
                </p>
                <p>
                  I specialize in creating seamless user experiences powered by robust backend systems. Comfortable working across the stack with Python, C/C++, Node.js, Django, React.js, and REST APIs, I have independently built and deployed full-stack projects including AI-assisted platforms and intelligence tools.
                </p>
                <p>
                  I'm currently seeking a Backend or Full Stack Developer role where I can apply my experience in AI/ML fundamentals, networking protocols, and team collaboration to production-grade systems.
                </p>
              </div>
            </div>
            
            <div className="relative group mx-auto md:mx-0 w-64 h-64 md:w-full md:h-80">
              <div className="absolute inset-0 bg-brand-teal/20 rounded-2xl blur-xl group-hover:bg-brand-teal/30 transition-all duration-500"></div>
              <div className="relative h-full w-full rounded-2xl glass-card overflow-hidden border border-brand-teal/30 p-2">
                <div className="w-full h-full bg-[#1A202C] rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Placeholder for Photo */}
                  <div className="text-brand-teal font-display text-4xl font-bold opacity-50">AB</div>
                  <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=800" alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center group hover:-translate-y-1 transition-all duration-300 hover:border-brand-teal/50"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-brand-teal transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-mono text-brand-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
