import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';

const educationList = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Savitribai Phule Pune University",
    years: "2024 – 2027 (Expected)",
    score: "CGPA: 9.73",
    coursework: ["C", "C++", "Python Programming", "AI/ML Fundamentals", "Cybersecurity Fundamentals"]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    years: "2022 – 2024",
    score: "CGPA: 8.30",
    coursework: ["Computer Science", "Information Technology"]
  }
];

const certificates = [
  {
    name: "Defronix Certified Junior Security Practitioner",
    issuer: "Defronix Academy",
    date: "Feb 2025 - Jun 2025",
    link: "#"
  },
  {
    name: "Advanced Backend Web Development",
    issuer: "Udemy",
    date: "Jun 2024 - Dec 2024",
    link: "#"
  },
  {
    name: "Build a Chat Application with Firebase, Flutter and Provider",
    issuer: "Udemy",
    date: "Jun 2025 - Dec 2025",
    link: "#"
  },
  {
    name: "The Complete Python Developer",
    issuer: "Udemy",
    date: "Nov 2025 - May 2026",
    link: "#"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-24 relative bg-slate-50/50 dark:bg-brand-bg/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">Education & Certifications</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-2 sm:ml-4"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <GraduationCap className="text-brand-teal" size={24} />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white transition-colors">Formal Education</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {educationList.map((edu) => (
                <div key={edu.degree} className="glass-card rounded-2xl p-5 sm:p-7 border-l-4 border-l-brand-teal">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <div>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white transition-colors break-words">{edu.degree}</h4>
                      <p className="text-indigo-600 dark:text-brand-violetLight font-medium text-sm sm:text-base mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <span className="font-mono text-xs text-teal-700 dark:text-brand-teal bg-teal-50 dark:bg-brand-teal/10 px-3 py-1 rounded-full border border-teal-200 dark:border-brand-teal/30 self-start sm:self-auto">
                        {edu.years}
                      </span>
                      <span className="font-mono text-xs font-semibold text-slate-600 dark:text-brand-muted">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                  
                  {edu.coursework && (
                    <div className="mt-3">
                      <p className="text-slate-500 dark:text-brand-muted text-[11px] sm:text-xs uppercase tracking-wider font-semibold mb-2">Key Coursework</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {edu.coursework.map(course => (
                          <span key={course} className="text-xs bg-slate-100 dark:bg-brand-card text-slate-700 dark:text-brand-text px-2.5 py-1 rounded-lg border border-slate-200 dark:border-brand-violet/20">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Award className="text-indigo-600 dark:text-brand-violetLight" size={24} />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white transition-colors">Certifications</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card rounded-xl p-4 sm:p-5 flex items-center justify-between gap-3 group hover:border-brand-teal/40 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display font-semibold text-slate-900 dark:text-white text-base sm:text-lg mb-1 group-hover:text-brand-teal transition-colors break-words">
                      {cert.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <span className="text-indigo-600 dark:text-brand-violetLight font-medium">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-brand-muted hidden sm:inline-block"></span>
                      <span className="font-mono text-slate-500 dark:text-brand-muted">{cert.date}</span>
                    </div>
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label={`View ${cert.name}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-brand-bg flex items-center justify-center text-slate-500 dark:text-brand-muted group-hover:text-brand-teal group-hover:bg-teal-50 dark:group-hover:bg-brand-teal/10 transition-all shrink-0"
                  >
                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
