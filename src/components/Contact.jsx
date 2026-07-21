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
    <section id="contact" className="py-24 relative bg-brand-bg/80">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-brand-teal mb-4 block tracking-wide">What's Next?</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Together</h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer" onClick={handleCopyEmail}>
                  <div className="w-12 h-12 rounded-full bg-brand-violet/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-[#0D1117] transition-all glow-teal">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-brand-muted font-medium mb-1">Email</p>
                    <p className="text-brand-text font-medium group-hover:text-white transition-colors">{email}</p>
                  </div>
                  <button className="text-brand-muted hover:text-brand-teal transition-colors">
                    {copied ? <CheckCircle size={20} className="text-brand-teal" /> : <Copy size={20} />}
                  </button>
                </div>

                <a href="https://www.linkedin.com/in/aashish-bendale-46b39825b/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-violet/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-[#0D1117] transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-muted font-medium mb-1">LinkedIn</p>
                    <p className="text-brand-text font-medium group-hover:text-white transition-colors">linkedin.com/in/aashish-bendale-46b39825b/</p>
                  </div>
                </a>

                <a href="https://github.com/ashishHack2" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-violet/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-[#0D1117] transition-all">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-brand-muted font-medium mb-1">GitHub</p>
                    <p className="text-brand-text font-medium group-hover:text-white transition-colors">github.com/ashishHack2</p>
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
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden">
              {formStatus === 'success' && (
                <div className="absolute inset-0 z-10 bg-brand-card/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                    <CheckCircle size={64} className="text-brand-teal mb-4 mx-auto" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-brand-muted">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-brand-muted">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="bg-[#0D1117]/50 border border-brand-violet/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                    placeholder="Ashish Bendale"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-muted">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="bg-[#0D1117]/50 border border-brand-violet/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"
                    placeholder="ashish@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-brand-muted">Message</label>
                <textarea 
                  id="message" 
                  required 
                  rows={5}
                  className="bg-[#0D1117]/50 border border-brand-violet/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors resize-none"
                  placeholder="Hi Ashish, I have an opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="self-end inline-flex items-center gap-2 px-8 py-3 bg-brand-teal text-[#0D1117] font-semibold rounded-lg hover:bg-white transition-all glow-teal disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
