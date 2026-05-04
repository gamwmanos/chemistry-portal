"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, Users, ChevronDown, BookOpen } from "lucide-react";
import ScrollVideo from "@/components/domain/ScrollVideo";

const BooksSection = dynamic(() => import("@/components/domain/BooksSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/domain/FeaturesSection"), { ssr: true });
const TeachersSection = dynamic(() => import("@/components/domain/TeachersSection"), { ssr: true });

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Fade hero text out as user scrolls into the atom animation
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <div className="relative font-sans">

      {/* ══════════════════════════════════════════════════
          SCROLL-VIDEO ZONE  (400vh – atom is the STAR)
      ══════════════════════════════════════════════════ */}
      <div ref={heroRef} className="relative bg-[#05050C] text-white" style={{ height: "300vh" }}>

        {/* The atom canvas (sticky, full-opacity, cover-fit) */}
        <ScrollVideo />

        {/* Content pinned to the top viewport during scroll */}
        <div className="sticky top-0 h-screen pointer-events-none">

          {/* Nav has been moved to layout.tsx (Navbar component) for global sticky visibility */}

          {/* Hero Copy – centred, floats over the atom */}
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
          >
            <Link href="/authors" className="pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:bg-black/40 hover:border-white/30 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-brand-purple-light" />
                <span className="text-xs font-semibold tracking-widest uppercase text-white/90 font-proxima">
                  Συγγραφικη Ομαδα
                </span>
              </motion.div>
            </Link>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-montserrat font-bold tracking-[0.3em] text-sm md:text-base uppercase text-brand-purple-light drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] mb-4"
            >
              ΕΚΔΟΣΕΙΣ ΠΕΔΙΟ
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center justify-center mb-8 max-w-5xl w-full"
            >
              <div className="relative group px-4">
                {/* We use a subtle white blur behind it to ensure the dark letters contrast against the dark background */}
                <div className="absolute -inset-2 md:-inset-4 bg-white/30 rounded-[4rem] blur-3xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <Image 
                  src="/ximeiastintaxi.png" 
                  alt="Χημεία στην τάξη" 
                  width={1536}
                  height={1024}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 850px"
                  className="relative w-full max-w-full md:max-w-[700px] lg:max-w-[850px] h-auto object-contain group-hover:scale-[1.02] transition-all duration-500"
                  style={{ 
                    // No color filter so we keep the exact original Navy Blue & Teal colors.
                    // We add a strong white drop-shadow so the dark text stands out from the dark space background.
                    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 0 30px rgba(255,255,255,0.4))" 
                  }}
                />
              </div>
              <h1 className="sr-only">Χημεία στην τάξη</h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-white/75 max-w-2xl mb-12 leading-relaxed font-inter"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
            >
              Εκδόσεις υψηλών προδιαγραφών για το Λύκειο. 
              Καινοτόμα βιβλία Χημείας με διαδραστικό υλικό και ολοκληρωμένη μεθοδολογία.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-5 pointer-events-auto"
            >
              <button
                onClick={() => {
                  document.getElementById('books')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group bg-transparent border-none p-0 cursor-pointer"
              >
                <div className="flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-brand-purple-light to-brand-blue-light text-white font-bold text-lg hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300 font-inter">
                  <BookOpen className="w-5 h-5" />
                  <span>Γνωρίστε τα Βιβλία</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <Link href="/authors" className="group pointer-events-auto">
                <div className="flex items-center gap-3 px-10 py-5 rounded-full bg-black/40 border border-white/25 text-white font-bold text-lg hover:bg-black/60 hover:border-white/50 transition-all duration-300 font-inter backdrop-blur-md">
                  <Users className="w-5 h-5 text-brand-blue-light" />
                  <span>Οι Συγγραφείς</span>
                </div>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
              <span className="text-xs text-white/70 uppercase tracking-widest font-inter font-semibold">Κύλησε</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-white/70" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          BELOW-THE-FOLD  CONTENT (Continuous Gradient to light blue)
      ══════════════════════════════════════════════════ */}
      <div 
        className="relative z-10 pt-20 text-white" 
        style={{ background: "linear-gradient(to bottom, #05050C 0%, #1e3a8a 45%, #2563eb 80%, #38bdf8 100%)" }}
      >

        {/* 3 Books */}
        <BooksSection />

        {/* Interactive Features */}
        <FeaturesSection />

        {/* Teachers Appendage */}
        <TeachersSection />

        {/* CTA + Footer */}
      </div>
    </div>
  );
}
