'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Author } from '@/data/authors';
import { ChevronLeft, GraduationCap, Briefcase, Award, BookOpen, PlayCircle, ExternalLink, ArrowRight } from 'lucide-react';
import BentoGrid from './BentoGrid';

interface AuthorProfileProps {
  author: Author;
  onBack: () => void;
  isFocusedMode: boolean;
}

export default function AuthorProfile({ author, onBack, isFocusedMode }: AuthorProfileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Generate initials for the avatar
  const initials = author.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${isFocusedMode ? 'min-h-screen pt-24 pb-32' : 'min-h-[90vh] py-24 border-b border-blue-100'}`}
      id={`author-${author.id}`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-300/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Back Button (Only in Focused Mode) */}
        <AnimatePresence>
          {isFocusedMode && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={onBack}
              className="group flex items-center space-x-2 text-slate-500 hover:text-blue-600 mb-12 transition-colors duration-300 bg-white/60 hover:bg-white px-4 py-2 rounded-full backdrop-blur-md border border-blue-100 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium tracking-wide text-sm uppercase">Επιστροφη στους Συγγραφεις</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-16">
          {/* Avatar Area with Glow */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white border border-blue-100 overflow-hidden flex items-center justify-center shadow-xl backdrop-blur-xl">
              {author.image ? (
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover z-10"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                  <span className="relative text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-cyan-500 tracking-tighter">
                    {initials}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex-1">
            <motion.div style={{ y: isFocusedMode ? 0 : y1, opacity: isFocusedMode ? 1 : opacity }}>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
                {author.name}
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-xl md:text-2xl text-blue-100 font-medium tracking-wide">
                  {author.role}
                </p>
                {author.subtitle && (
                  <p className="text-lg text-blue-100/80 font-light flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-blue-300/50 rounded-full" />
                    {author.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6 text-lg text-blue-50 leading-relaxed font-light">
            {author.fullBio.map((paragraph, idx) => (
              <motion.p 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="hover:text-white transition-colors duration-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md shadow-sm">
              <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Με μια ματια
              </h3>
              <p className="text-blue-50 leading-relaxed">
                {author.shortBio}
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Section */}
        <BentoGrid author={author} />

      </div>
    </motion.div>
  );
}
