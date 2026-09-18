import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    company: "VOIS for Tech",
    role: "Cybersecurity Intern",
    duration: "Aug 2025 – Dec 2025",
    description: [
      "Gained hands-on exposure to multiple operating systems, including Windows and Linux, through practical lab-based exercises.",
      "Studied and applied core networking protocols (TCP/IP, DNS, HTTP/HTTPS) to understand common network attack surfaces.",
      "Worked with industry-standard cybersecurity and network monitoring tools to identify basic vulnerabilities."
    ],
    tech: ["Cybersecurity", "TCP/IP", "DNS", "Linux", "Windows"]
  },
  {
    company: "IBM SkillsBuild Internship",
    role: "AI Intern",
    duration: "Dec 2025 – Feb 2026",
    description: [
      "Developed Python-based AI applications as part of a structured, mentor-guided internship curriculum.",
      "Built and evaluated machine learning models for real-world use cases.",
      "Collaborated with a team on shared assignments, coordinating tasks and reviewing each other's work.",
      "Used Git for version control and maintained a clean commit history across project iterations."
    ],
    tech: ["Python", "Machine Learning", "Git", "Team Collaboration"]
  },
  {
    company: "Infosys Springboard",
    role: "AI/ML Virtual Intern",
    duration: "Dec 2025 – Feb 2026",
    description: [
      "Completed the Infosys Springboard AI Virtual Internship Program, covering model building, data preprocessing, and predictive analytics.",
      "Applied NLP techniques to project-based learning modules using Python.",
      "Worked on real-world datasets to practice the end-to-end machine learning workflow, from cleaning to evaluation."
    ],
    tech: ["AI/ML", "NLP", "Python", "Data Preprocessing", "Predictive Analytics"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">Experience</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-4"></div>
          </div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-teal before:via-brand-violet/50 before:to-transparent">
          {experience.map((job, idx) => (
            <div key={job.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0D1117] bg-brand-teal text-white dark:text-[#0D1117] absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0 md:order-1 shadow-md z-10 transition-transform group-hover:scale-110">
                <Briefcase size={18} />
              </div>

              {/* Content card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card rounded-2xl p-6 md:p-8 ml-auto md:ml-0 hover:border-brand-teal/40 transition-colors"
              >
                <div className="flex flex-col mb-4">
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors">{job.role}</h3>
                  <div className="flex flex-wrap justify-between items-center mt-1 gap-2">
                    <span className="text-indigo-600 dark:text-brand-violetLight font-medium text-base sm:text-lg">{job.company}</span>
                    <span className="font-mono text-xs text-teal-700 dark:text-brand-teal bg-teal-50 dark:bg-brand-teal/10 px-3 py-1 rounded-full border border-teal-200 dark:border-brand-teal/30">{job.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-brand-text/90 text-sm md:text-base leading-relaxed">
                      <span className="text-brand-teal mt-1 shrink-0">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-slate-600 dark:text-brand-muted bg-slate-100 dark:bg-brand-bg px-2.5 py-1 rounded-md border border-slate-200 dark:border-brand-violet/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
