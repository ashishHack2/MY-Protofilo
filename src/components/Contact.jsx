import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, CheckCircle, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const email = "ashishbendale3@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-slate-50/50 dark:bg-brand-bg/80 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="font-mono text-brand-teal mb-2 sm:mb-3 block tracking-wider font-semibold text-sm sm:text-base">What's Next?</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 transition-colors">Let's Build Together</h2>
          <p className="text-slate-600 dark:text-brand-muted text-sm sm:text-lg max-w-2xl mx-auto transition-colors">
            I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="glass-card p-5 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6 transition-colors">Contact Info</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer" onClick={handleCopyEmail}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-50 dark:bg-brand-violet/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all glow-teal shrink-0">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-brand-muted font-medium mb-0.5">Email</p>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-brand-text font-medium group-hover:text-brand-teal transition-colors truncate">{email}</p>
                  </div>
                  <button 
                    className="text-slate-400 hover:text-brand-teal transition-colors shrink-0 p-1"
                    title={copied ? "Copied!" : "Copy Email"}
                    aria-label="Copy Email"
                  >
                    {copied ? <CheckCircle size={18} className="text-brand-teal sm:w-5 sm:h-5" /> : <Copy size={18} className="sm:w-5 sm:h-5" />}
                  </button>
                </div>

                <a href="https://www.linkedin.com/in/aashish-bendale-46b39825b/" target="_blank" rel="noreferrer" className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-50 dark:bg-brand-violet/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shrink-0">
                    <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-brand-muted font-medium mb-0.5">LinkedIn</p>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-brand-text font-medium group-hover:text-brand-teal transition-colors truncate">linkedin.com/in/aashish-bendale-46b39825b/</p>
                  </div>
                </a>

                <a href="https://github.com/ashishHack2" target="_blank" rel="noreferrer" className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-50 dark:bg-brand-violet/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all shrink-0">
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-brand-muted font-medium mb-0.5">GitHub</p>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-brand-text font-medium group-hover:text-brand-teal transition-colors truncate">github.com/ashishHack2</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-8 rounded-2xl flex flex-col gap-5 sm:gap-6 relative overflow-hidden shadow-lg">
              {formStatus === 'success' && (
                <div className="absolute inset-0 z-10 bg-white/95 dark:bg-brand-card/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 sm:p-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                    <CheckCircle size={52} className="text-brand-teal mb-3 sm:mb-4 mx-auto" />
                  </motion.div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-brand-muted text-sm sm:text-base">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-700 dark:text-brand-muted">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="bg-slate-50 dark:bg-[#0D1117]/50 border border-slate-200 dark:border-brand-violet/30 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all placeholder:text-slate-400"
                    placeholder="Ashish Bendale"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-700 dark:text-brand-muted">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="bg-slate-50 dark:bg-[#0D1117]/50 border border-slate-200 dark:border-brand-violet/30 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all placeholder:text-slate-400"
                    placeholder="ashish@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-700 dark:text-brand-muted">Message</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4}
                  className="bg-slate-50 dark:bg-[#0D1117]/50 border border-slate-200 dark:border-brand-violet/30 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-slate-900 dark:text-white text-base sm:text-sm focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all resize-none placeholder:text-slate-400"
                  placeholder="Hi Ashish, I have an opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full sm:w-auto sm:self-end inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-brand-teal text-white font-semibold rounded-xl hover:bg-teal-600 transition-all glow-teal shadow-md shadow-teal-500/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
