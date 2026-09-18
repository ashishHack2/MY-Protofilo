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
    <section id="experience" className="py-16 sm:py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">Experience</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-2 sm:ml-4"></div>
          </div>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-5 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-teal before:via-brand-violet/50 before:to-transparent">
          {experience.map((job, idx) => (
            <div key={job.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-4 border-white dark:border-[#0D1117] bg-brand-teal text-white dark:text-[#0D1117] absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 shrink-0 md:order-1 shadow-md z-10 transition-transform group-hover:scale-110">
                <Briefcase size={15} className="sm:w-[18px] sm:h-[18px]" />
              </div>

              {/* Content card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-[calc(100%-2.75rem)] sm:w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] glass-card rounded-2xl p-4 sm:p-6 md:p-8 ml-auto md:ml-0 hover:border-brand-teal/40 transition-colors"
              >
                <div className="flex flex-col mb-3 sm:mb-4">
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors break-words">{job.role}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 gap-1.5 sm:gap-2">
                    <span className="text-indigo-600 dark:text-brand-violetLight font-medium text-sm sm:text-base md:text-lg">{job.company}</span>
                    <span className="font-mono text-[11px] sm:text-xs text-teal-700 dark:text-brand-teal bg-teal-50 dark:bg-brand-teal/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-teal-200 dark:border-brand-teal/30 self-start sm:self-auto">{job.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-slate-600 dark:text-brand-text/90 text-xs sm:text-sm md:text-base leading-relaxed">
                      <span className="text-brand-teal mt-0.5 sm:mt-1 shrink-0">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] sm:text-xs text-slate-600 dark:text-brand-muted bg-slate-100 dark:bg-brand-bg px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-slate-200 dark:border-brand-violet/20">
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
