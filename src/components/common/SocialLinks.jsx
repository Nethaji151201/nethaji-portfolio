import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { classNames } from '../../utils/helpers';

export function SocialLinks({ links, className, iconSize = 24 }) {
  const socialIcons = {
    github: <Github size={iconSize} />,
    linkedin: <Linkedin size={iconSize} />,
    twitter: <Twitter size={iconSize} />,
    mail: <Mail size={iconSize} />,
  };

  return (
    <div className={classNames("flex items-center gap-4", className)}>
      {Object.entries(links).map(([platform, url]) => (
        socialIcons[platform] &&
        <a filter="auto"
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors duration-200"
          aria-label={`Visit my ${platform}`}
        >
          {socialIcons[platform]}
        </a>
        
      ))}
      {links.email && (
        <a filter="auto"
          href={`mailto:${links.email}`}
          className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors duration-200"
          aria-label="Email me"
        >
          <Mail size={iconSize} />
        </a>
      )}
    </div>
  );
}
