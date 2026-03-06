import React from 'react';
import { personalInfo } from '../constants/personalInfo';
import { SocialLinks } from './common/SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a filter="auto" href="#home" className="text-2xl font-bold text-slate-900 dark:text-white mb-2 inline-block">
              {personalInfo.name}<span className="text-primary-500">.</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Building scalable web applications with passion.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks links={personalInfo.socialLinks} iconSize={20} className="gap-6" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
