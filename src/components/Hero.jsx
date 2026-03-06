import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../constants/personalInfo';
import { SocialLinks } from './common/SocialLinks';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:flex lg:items-center lg:justify-between gap-12">
        <div className="lg:w-1/2 mt-12 lg:mt-0 max-w-2xl">
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7 font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Hi, I'm
            <span className="ml-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Full Stack Developer with 3+ years of experience building scalable fintech
            web applications using Golang, Vue.js, and React.js. Strong expertise in
            RESTful API development, database management (MSSQL, MySQL), and
            financial transaction  systems. Experienced in developing mutual fund
            investment platforms integrated with BSE Star MF.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a filter="auto"
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <SocialLinks links={personalInfo.socialLinks} />
          </div>
        </div>

        {/* Hero Illustration / Abstract Graphic in place of Image */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 hidden lg:flex justify-center relative">
           <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Decorative circles */}
            <div className="absolute inset-0 border-2 border-primary-200 dark:border-primary-800 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-dashed border-primary-300 dark:border-primary-700 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 border border-primary-100 dark:border-primary-900 rounded-full"></div>
            
            {/* Center Content */}
            <div className="absolute inset-12 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full p-2 shadow-2xl overflow-hidden flex items-center justify-center">
               <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-6xl pt-25 font-bold bg-clip-text text-transparent bg-gradient-to-tr from-primary-500 to-indigo-500">
                    <img src="/Professinal_Image.png" alt="" />
                  </span>
               </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-10 -left-5 bg-white dark:bg-slate-800 py-2 px-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 rotate-12 animate-pulse">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Golang</span>
            </div>
            <div className="absolute bottom-20 -right-8 bg-white dark:bg-slate-800 py-2 px-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 -rotate-12 animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-sm font-bold text-[#61DAFB]">React JS</span>
            </div>
            <div className="absolute -bottom-4 left-20 bg-white dark:bg-slate-800 py-2 px-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 rotate-6 animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-sm font-bold text-[#3178C6]">TypeScript</span>
            </div>
            <div className="absolute top-55 -left-8 bg-white dark:bg-slate-800 py-2 px-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 rotate-12 animate-pulse">
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">SQL</span>
            </div>
            <div className="absolute bottom-70 -right-8 bg-white dark:bg-slate-800 py-2 px-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 -rotate-12 animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-sm font-bold text-[#61DAFB]">Vue JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
