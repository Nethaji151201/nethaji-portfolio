import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { SkillCard } from './common/SkillCard';
import { skills } from '../constants/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Here are the technologies I work with to bring ideas to life."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {skills.map((skillGroup, index) => (
            <SkillCard key={index} {...skillGroup} />
          ))}
        </div>
      </div>
    </section>
  );
}
