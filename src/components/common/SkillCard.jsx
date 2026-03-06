import React from 'react';
import { classNames } from '../../utils/helpers';

export function SkillCard({ category, icon, items }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 group">
      <div className="flex items-center mb-4 text-primary-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
        <h3 className="ml-3 text-xl font-semibold text-slate-800 dark:text-slate-100">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span 
            key={index} 
            className={classNames(
              "px-3 py-1 rounded-full text-sm font-medium",
              "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
              "border border-transparent hover:border-primary-500 transition-colors duration-200"
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
