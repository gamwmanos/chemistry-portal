"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown, BookOpen, FlaskConical } from "lucide-react";

export default function KatigitesHero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 0.9]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1d] pt-20 perspective-[1000px]">
      
      {/* Dynamic Mouse-tracking Gradient Background */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * 2, 
          y: mousePosition.y * 2 
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-purple/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-brand-blue/20 blur-[150px] rounded-full mix-blend-screen" />
      </motion.div>

      {/* Grid Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          y: useTransform(scrollY, [0, 1000], [0, 200]),
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div 
        style={{ opacity: opacityText, y: yText, scale: scaleText }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-purple/30 bg-black/40 backdrop-blur-xl mb-12 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
        >
          <Sparkles className="w-5 h-5 text-brand-purple-light animate-pulse" />
          <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-blue-light">
            ΟΛΟΚΛΗΡΩΜΕΝΗ ΠΡΟΤΑΣΗ ΔΙΔΑΣΚΑΛΙΑΣ
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 font-montserrat"
          style={{ textShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
        >
          <span className="text-white">Εμπνεύστε τους</span>
          <br />
          <span className="relative inline-block mt-4">
            <span className="absolute -inset-4 bg-gradient-to-r from-brand-purple-light/20 to-brand-blue-light/20 blur-2xl rounded-full" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light via-[#a78bfa] to-brand-blue-light animate-gradient-x drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Μαθητές σας
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-16 font-lora"
        >
          Ένα ολιστικό διδακτικό εργαλείο στα χέρια σας. Η Χημεία σταματά να είναι αποστήθιση και γίνεται <strong className="text-white">βίωμα, ανακάλυψη και ψηφιακή εμπειρία.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group px-8 py-5 rounded-full bg-white text-[#0a0f1d] font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center gap-3">
            <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Ανακαλύψτε τα Πλεονεκτήματα
          </button>
          
          <button className="group px-8 py-5 rounded-full bg-white/5 border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-md flex items-center gap-3">
            <FlaskConical className="w-5 h-5 text-brand-blue-light group-hover:-rotate-12 transition-transform" />
            Μεθοδολογία
          </button>
        </motion.div>
      </motion.div>

      {/* Interactive Floating 3D Elements controlled by mouse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden perspective-1000">
        {[
          { icon: "⚛️", size: "text-6xl", top: "20%", left: "15%", depth: 2 },
          { icon: "🧪", size: "text-5xl", top: "70%", left: "10%", depth: 4 },
          { icon: "🔬", size: "text-7xl", top: "40%", left: "85%", depth: 1.5 },
          { icon: "📱", size: "text-4xl", top: "80%", left: "80%", depth: 3 },
          { icon: "💡", size: "text-5xl", top: "15%", left: "75%", depth: 5 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.size} drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-40`}
            style={{
              top: item.top,
              left: item.left,
            }}
            animate={{
              y: [0, -20, 0],
              x: mousePosition.x * item.depth,
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              y: { duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" },
              x: { type: "spring", stiffness: 50, damping: 20 }
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest font-mono">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </div>
  );
}
