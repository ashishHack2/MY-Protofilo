import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS", "Marathi", "Hindi", "English"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "NLP", "MLOps", "Predictive Analytics", "Data Preprocessing"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Node.js", "Express.js", "Django", "React.js"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "REST API Integration", "Postman", "DevOps"]
  },
  {
    title: "Other Concepts",
    skills: ["Cybersecurity Fundamentals", "Networking Protocols (TCP/IP, DNS, HTTP)", "Problem-Solving", "Team Collaboration"]
  }
];

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
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-brand-bg/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-4"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border-t-2 border-t-brand-teal/30 hover:border-t-brand-teal transition-all duration-300"
            >
              <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal glow-teal"></span>
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="font-mono text-sm bg-brand-violet/20 text-brand-text px-3 py-1.5 rounded-lg border border-brand-violet/30 hover:bg-brand-teal/20 hover:border-brand-teal/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
