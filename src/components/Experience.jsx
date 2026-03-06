import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { experience } from '../constants/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionTitle 
          title="Work Experience" 
          subtitle="A timeline of my professional journey."
        />
        
        <div className="mt-16 space-y-12">
          {experience.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-0">
              {/* Timeline dot and line connecting them */}
              <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2 mt-8"></div>
              <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-slate-900 transform md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                
                <div className="w-full md:w-5/12 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:border-slate-700">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                    {job.duration}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{job.role}</h3>
                  <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">{job.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {job.description}
                  </p>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
