'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Author } from '@/data/authors';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface AuthorsHeroProps {
  authors: Author[];
  onSelectAuthor: (id: string) => void;
  onScrollDown: () => void;
}

export default function AuthorsHero({ authors, onSelectAuthor, onScrollDown }: AuthorsHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Parallax Background using syggrafeis.jpg */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity filter blur-sm scale-110"
          style={{ backgroundImage: "url('/images/syggrafeis.jpg')" }}
        />
        {/* Gradient Overlay for professional look */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-slate-50/80 to-slate-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-blue-900 to-blue-500 tracking-tighter mb-6">
            Οι Συγγραφείς
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            Γνωρίστε την επιστημονική ομάδα πίσω από το Chemistry Portal. Επιλέξτε έναν συγγραφέα για να δείτε το αναλυτικό του προφίλ, ή κάντε scroll για να τους ανακαλύψετε όλους.
          </p>
        </motion.div>

        {/* Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {authors.map((author, index) => (
            <AuthorSelectCard 
              key={author.id} 
              author={author} 
              index={index} 
              onClick={() => onSelectAuthor(author.id)} 
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={onScrollDown}
          className="mt-24 flex flex-col items-center text-slate-500 hover:text-blue-500 transition-colors duration-300 group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Ανακαλυψτε τους</span>
          <div className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center group-hover:border-blue-400 bg-white/50 backdrop-blur-md shadow-sm">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}

// Sub-component for the interactive selection cards with 3D tilt
function AuthorSelectCard({ author, index, onClick }: { author: Author, index: number, onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const initials = author.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-cyan-100/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        style={{ transform: "translateZ(-20px)" }}
      />
      <div 
        className="relative h-full bg-white/70 border border-blue-100 hover:border-blue-300 rounded-3xl p-6 backdrop-blur-xl overflow-hidden shadow-xl shadow-blue-900/5 transition-colors duration-300 flex flex-col items-center text-center"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-blue-500" />
        </div>
        
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mb-6 shadow-inner border border-blue-100">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-cyan-500">
            {initials}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1">{author.name}</h3>
        <p className="text-xs text-blue-500 font-medium tracking-wide uppercase line-clamp-2">{author.role}</p>
      </div>
    </motion.div>
  );
}
