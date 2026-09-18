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
    <section id="projects" className="py-16 sm:py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">Featured Projects</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-2 sm:ml-4"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-5 sm:p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-brand-teal/40 hover:shadow-xl hover:shadow-teal-500/10"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-teal-50 dark:bg-brand-violet/20 text-brand-teal glow-teal-text">
                    <Folder size={26} className="sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex gap-3 sm:gap-4 items-center">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="View Github Repository"
                        className="text-slate-400 hover:text-brand-teal dark:text-brand-muted dark:hover:text-brand-teal transition-colors p-1"
                      >
                        <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Live Demo"
                        className="text-slate-400 hover:text-brand-teal dark:text-brand-muted dark:hover:text-brand-teal transition-colors p-1"
                      >
                        <ExternalLink size={20} className="sm:w-[22px] sm:h-[22px]" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-teal transition-colors break-words">
                  {project.title}
                </h3>
                <p className="text-indigo-600 dark:text-brand-violetLight font-medium mb-4 text-xs sm:text-sm">
                  {project.impact}
                </p>

                <div className="mb-6 flex-grow">
                  <ul className="space-y-2.5 text-slate-600 dark:text-brand-text/90 text-sm">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-teal mt-0.5">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-brand-violet/10">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-slate-600 dark:text-brand-muted bg-slate-100 dark:bg-transparent px-2.5 py-1 rounded border border-slate-200 dark:border-transparent">
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
            href="https://github.com/ashishHack2" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-teal-600 dark:text-brand-teal hover:text-teal-700 dark:hover:text-white transition-colors border-b border-brand-teal/40 hover:border-brand-teal pb-1"
          >
            View All Projects on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
