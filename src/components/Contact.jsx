import React, { useState } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../constants/personalInfo';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thanks for reaching out, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to collaborate? Let's talk about it."
        />
        
        <div className="max-w-5xl mx-auto mt-12 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4 text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <Mail className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-200">Email</h4>
                <a filter="auto" href={`mailto:${personalInfo.email}`} className="hover:text-primary-500 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <Phone className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-200">Phone</h4>
                <a filter="auto" href={`tel:${personalInfo.phone}`} className="hover:text-primary-500 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <MapPin className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-200">Location</h4>
                <p>{personalInfo.address}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
