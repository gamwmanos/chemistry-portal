"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle, FileText, Share2, Smartphone } from "lucide-react";

export default function DigitalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for different UI floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-10, 5]);

  return (
    <section ref={containerRef} className="py-40 bg-[#1e293b] relative overflow-hidden min-h-[120vh] flex items-center">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-blue-dark/20 rounded-full blur-[150px] pointer-events-none" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-8">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold tracking-widest uppercase text-cyan-400">
                Ψηφιακο Οικοσυστημα
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-montserrat text-white leading-tight">
              Η Τάξη σας, στο <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-blue-light">Κινητό τους</span>
            </h2>
            
            <p className="text-xl text-white/70 font-lora leading-relaxed mb-10">
              Μέσω <strong>κωδικών QR</strong> σε κάθε ενότητα, οι μαθητές αποκτούν άμεση πρόσβαση σε βιντεοσκοπημένα πειράματα, διαδραστικούς χάρτες και κουίζ. 
              Ακόμα και όταν το εργαστήριο δεν είναι διαθέσιμο, το πείραμα έρχεται στην οθόνη τους με απόλυτη ασφάλεια.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById("materials")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
              >
                Δείτε Δείγμα Υλικού
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Floating Parallax Elements */}
        <div className="w-full lg:w-7/12 relative h-[600px] lg:h-[800px] flex items-center justify-center">
          
          {/* Main Device / Player Mockup */}
          <motion.div 
            style={{ y: y1, rotate: rotate1 }}
            className="absolute z-20 w-[90%] md:w-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 bg-slate-800/80 backdrop-blur-xl"
          >
            {/* Mock Header */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2 bg-slate-900/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="mx-auto px-4 py-1 rounded-md bg-black/40 text-xs text-white/40 font-mono">
                ph-experiment-01.mp4
              </div>
            </div>
            
            {/* Video Player Area */}
            <div className="relative aspect-video bg-black flex items-center justify-center group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark/40 to-brand-blue-dark/40 opacity-50 group-hover:opacity-80 transition-opacity" />
              
              {/* Fake Video Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform"
                >
                  <PlayCircle className="w-12 h-12 text-white" />
                </motion.div>
              </div>

              {/* Progress Bar Mock */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-cyan-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 1: QR Code */}
          <motion.div 
            style={{ y: y2, rotate: rotate2 }}
            className="absolute top-[10%] right-[0%] md:-right-[10%] z-30 w-48 p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="w-full aspect-square bg-white rounded-lg p-2 mb-3">
              <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover bg-center opacity-80" />
            </div>
            <p className="text-xs text-white/80 font-inter text-center font-semibold">
              Σκανάρετε για το πείραμα
            </p>
          </motion.div>

          {/* Floating Widget 2: Quiz Score */}
          <motion.div 
            style={{ y: y3 }}
            className="absolute bottom-[10%] left-[5%] md:-left-[15%] z-30 w-64 p-5 rounded-2xl bg-slate-800/90 backdrop-blur-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">e-Βάζο Αξιολόγησης</h4>
                <p className="text-white/50 text-xs">Μόλις ολοκληρώθηκε</p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="text-3xl font-bold text-white font-mono">18/20</div>
              <div className="text-xs text-emerald-400 font-bold bg-emerald-400/10 px-2 py-1 rounded">
                +2 Μονάδες
              </div>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
