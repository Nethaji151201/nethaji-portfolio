import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { personalInfo } from '../constants/personalInfo';

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me and the work I do."
        />
        
        <div className="max-w-4xl mx-auto text-center mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            {personalInfo.about}
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-slate-100 dark:border-slate-700/50">
            <div className="text-center">
              <h4 className="text-4xl font-extrabold text-primary-500 mb-2">3+</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-extrabold text-primary-500 mb-2">10+</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-extrabold text-primary-500 mb-2">5+</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-extrabold text-primary-500 mb-2">∞</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Lines of Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
