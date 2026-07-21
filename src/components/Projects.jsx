import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { Github } from './Icons';

const projects = [
  {
    title: "GovSchemes - AI-Assisted Government Scheme Discovery Platform",
    impact: "Web-based assistant for Indian citizens to discover and apply for schemes",
    description: [
      "Built a web-based assistant that helps Indian citizens discover, verify, and apply for government welfare schemes with real-time AI support.",
      "Designed the frontend in React.js and the backend with Node.js and Express.js, connected through REST APIs.",
      "Used MongoDB for scheme data storage and Python for supporting AI/data logic."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "REST API"],
    github: "https://github.com/ashishHack2",
    demo: null,
  },
  {
    title: "AI-Powered Research Paper Summarizer",
    impact: "Tool for parsing PDFs and extracting technical insights",
    description: [
      "Built a tool that parses research paper PDFs and generates structured summaries covering objectives, methods, and conclusions.",
      "Implemented semantic search and a context-aware, multilingual AI chat interface for querying paper content.",
      "Automated extraction of key technical insights to reduce manual reading time for research documents."
    ],
    tech: ["Python", "NLP", "Machine Learning", "AI Chat Interface"],
    github: "https://github.com/ashishHack2",
    demo: null,
  },
  {
    title: "BantaiPlanner - Student Travel Intelligence Platform",
    impact: "AI-driven travel planning tool optimizing Memory-Per-Rupee (MPR)",
    description: [
      "Built an AI-driven travel planning tool for students, optimizing itineraries for Memory-Per-Rupee (MPR) value.",
      "Implemented activity clustering logic to reduce transit costs and time between planned stops.",
      "Built 'Bantai AI,' a multilingual (English/Hindi/Marathi) assistant to help users navigate budget-conscious trip planning."
    ],
    tech: ["Python", "AI Assistant", "Algorithm Design", "Multilingual Support"],
    github: "https://github.com/ashishbendale3",
    demo: null,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-4"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-brand-teal/40 hover:shadow-[0_0_30px_-5px_rgba(42,157,143,0.3)]"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-brand-violet/20 text-brand-teal glow-teal-text">
                    <Folder size={32} />
                  </div>
                  <div className="flex gap-4 items-center">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-teal transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-teal transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-brand-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-violetLight font-medium mb-4 text-sm">
                  {project.impact}
                </p>

                <div className="mb-6 flex-grow">
                  <ul className="space-y-2 text-brand-text/90 text-sm">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-teal mt-1">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-brand-violet/10">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-brand-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-brand-teal hover:text-white transition-colors border-b border-brand-teal/30 hover:border-white pb-1 glow-teal-text"
          >
            View All Projects on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
