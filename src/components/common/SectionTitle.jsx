import React from 'react';

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 inline-block relative">
        {title}
        <span className="absolute -bottom-2 left-1/2 w-1/2 h-1 bg-primary-500 rounded-full transform -translate-x-1/2"></span>
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}
