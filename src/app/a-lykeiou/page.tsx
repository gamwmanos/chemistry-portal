"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, ArrowRight, Beaker, FileText, Sparkles } from "lucide-react";

import { aLykeiouChapters as chapters } from "@/data/curriculum";

export default function GradeAHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-800 to-indigo-900 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-violet-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-purple-400/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group font-inter text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Επιστροφή στην Αρχική
        </Link>

        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-purple-100 text-sm font-medium mb-6 font-proxima"
            >
              <BookOpen className="w-4 h-4" />
              <span>Τάξη</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-montserrat text-white"
            >
              Α' Λυκείου
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl font-inter"
            >
              Εισαγωγή στον συναρπαστικό κόσμο της Χημείας. Επιλέξτε κεφάλαιο για να ξεκινήσετε τη μελέτη σας, να λύσετε ερωτήσεις και ασκήσεις και να δείτε πειράματα.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <a 
                href="https://ebooksdl.cti.gr/handle/20.500.14040/467"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium hover:from-violet-400 hover:to-fuchsia-400 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-400/40 hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                <span>Διαδραστικό Βιβλίο (Ψηφιακή Βιβλιοθήκη)</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-sm px-6 py-4 rounded-2xl flex flex-col items-center">
              <span className="text-3xl font-bold text-white font-proxima">{chapters.length}</span>
              <span className="text-xs text-purple-200 uppercase tracking-wider mt-1 font-inter">Κεφάλαια</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-sm px-6 py-4 rounded-2xl flex flex-col items-center">
              <span className="text-3xl font-bold text-violet-300 font-proxima">
                {chapters.reduce((sum, ch) => sum + ch.exercises, 0)}+
              </span>
              <span className="text-xs text-purple-200 uppercase tracking-wider mt-1 font-inter">Ερωτήσεις και Ασκήσεις</span>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
            >
              <Link href={`/a-lykeiou/${chapter.id}`} className="block h-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-xl hover:shadow-purple-900/50 group relative overflow-hidden">
                  
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${chapter.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-white group-hover:bg-white/20 transition-colors font-proxima shadow-sm">
                        {chapter.number}
                      </div>
                    </div>
                    
                    <div className="flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-violet-200 transition-colors font-proxima">
                        {chapter.title}
                      </h3>
                      <p className="text-purple-100 mb-6 text-sm leading-relaxed flex-grow font-inter">
                        {chapter.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1.5 text-xs text-purple-200 font-inter font-medium">
                            <FileText className="w-4 h-4" />
                            <span>{chapter.topics} Υποενότητες</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-purple-200 font-inter font-medium">
                            <Sparkles className="w-4 h-4" />
                            <span>{chapter.exercises} Ερωτήσεις και Ασκήσεις</span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-violet-500 group-hover:text-white transition-all shadow-sm">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
