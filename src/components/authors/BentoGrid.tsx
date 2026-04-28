'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Author } from '@/data/authors';
import { GraduationCap, Briefcase, Award, BookOpen, PlayCircle } from 'lucide-react';

interface BentoGridProps {
  author: Author;
}

export default function BentoGrid({ author }: BentoGridProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
    >
      {/* Experience Timeline (Large Card) */}
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 row-span-2 bg-white/70 border border-blue-100 hover:border-blue-300 transition-colors duration-500 rounded-3xl p-8 backdrop-blur-sm shadow-sm group">
        <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
            <Briefcase className="w-6 h-6 text-blue-500" />
          </div>
          Πορεία & Εμπειρία
        </h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 before:to-transparent">
          {author.experience.map((exp, idx) => (
            <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group/item is-active">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-slate-50 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd/item:-translate-x-1/2 md:group-even/item:translate-x-1/2 z-10" />
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-2xl bg-white border border-blue-50 shadow-sm backdrop-blur-md group-hover/item:border-blue-300 transition-colors duration-300">
                <div className="flex flex-col mb-2">
                  <time className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-1">{exp.year}</time>
                  <h4 className="text-lg font-bold text-slate-800">{exp.title}</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education (Medium Card) */}
      <motion.div variants={itemVariants} className="col-span-1 bg-gradient-to-br from-blue-50/50 to-white border border-blue-100 hover:border-cyan-300 transition-colors duration-500 rounded-3xl p-8 backdrop-blur-sm shadow-sm group">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div className="p-2 bg-cyan-50 rounded-xl group-hover:bg-cyan-100 transition-colors duration-300">
            <GraduationCap className="w-6 h-6 text-cyan-600" />
          </div>
          Εκπαίδευση
        </h3>
        <ul className="space-y-6">
          {author.education.map((edu, idx) => (
            <li key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-cyan-500">
              <h4 className="font-semibold text-slate-800 mb-1">{edu.title}</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{edu.description}</p>
              {edu.year !== "Άγνωστο" && (
                <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-cyan-50 rounded-md text-cyan-800 border border-cyan-100">{edu.year}</span>
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Publications / Books */}
      <motion.div variants={itemVariants} className="col-span-1 bg-white/70 border border-blue-100 hover:border-purple-300 transition-colors duration-500 rounded-3xl p-8 backdrop-blur-sm shadow-sm group">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors duration-300">
            <BookOpen className="w-6 h-6 text-purple-600" />
          </div>
          Συγγραφικό Έργο
        </h3>
        <ul className="space-y-4">
          {author.publications.map((pub, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-slate-600 font-light">
              <span className="text-purple-500 shrink-0">❖</span>
              <span className="leading-relaxed">{pub}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Achievements / Awards */}
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white/70 border border-blue-100 hover:border-amber-300 transition-colors duration-500 rounded-3xl p-8 backdrop-blur-sm shadow-sm group">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <div className="p-2 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors duration-300">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          Διακρίσεις & Επιτεύγματα
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {author.achievements.map((ach, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-blue-50 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-2">{ach.title}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{ach.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Multimedia / Talks (if any) */}
      {author.multimedia && author.multimedia.length > 0 && (
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 bg-gradient-to-r from-blue-50 to-white border border-blue-200 hover:border-red-300 transition-colors duration-500 rounded-3xl p-8 backdrop-blur-md shadow-sm group">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="p-2 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
              <PlayCircle className="w-6 h-6 text-red-600" />
            </div>
            Πολυμέσα & Δράσεις
          </h3>
          <div className="flex flex-wrap gap-4">
            {author.multimedia.map((media, idx) => (
              <a 
                key={idx} 
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-blue-100 hover:border-red-200 shadow-sm transition-colors duration-300 cursor-pointer group/link"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-blue-50 group-hover/link:bg-red-50 transition-colors">
                  <PlayCircle className="w-5 h-5 text-slate-400 group-hover/link:text-red-500" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">{media.title}</h4>
                  <span className="text-xs text-slate-500 font-light uppercase tracking-widest">{media.type}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      )}

    </motion.div>
  );
}
