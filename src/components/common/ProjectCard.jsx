import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ title, description, image, techStack, githubLink, liveLink }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group flex flex-col h-full">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a filter="auto"
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors duration-200"
            aria-label="GitHub Repository"
          >
            <Github className="w-6 h-6" />
          </a>
          <a filter="auto"
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-primary-500/80 hover:bg-primary-500/100 rounded-full text-white backdrop-blur-sm transition-colors duration-200"
            aria-label="Live Demo"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 text-xs font-semibold bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
