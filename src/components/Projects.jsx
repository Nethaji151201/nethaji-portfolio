import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { ProjectCard } from './common/ProjectCard';
import { projects } from '../constants/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Check out some of my recent work and the side projects I've built."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
