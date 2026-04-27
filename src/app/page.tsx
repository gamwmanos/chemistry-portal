"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlaskConical, Sparkles, ArrowRight, Users, ChevronDown, BookOpen } from "lucide-react";
import ScrollVideo from "@/components/domain/ScrollVideo";
import BooksSection from "@/components/domain/BooksSection";
import FeaturesSection from "@/components/domain/FeaturesSection";
import FooterSection from "@/components/domain/FooterSection";
import TeachersSection from "@/components/domain/TeachersSection";

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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 max-w-6xl font-montserrat"
              style={{ textShadow: "0 0 80px rgba(124,58,237,0.3)" }}
            >
              <span className="text-white">Βιβλία Χημείας</span>
              <br />
              <span className="text-gradient">Γυμνασίου - Λυκείου</span>
            </motion.h1>

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
              <Link href="#books" className="group">
                <div className="flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-brand-purple-light to-brand-blue-light text-white font-bold text-lg hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300 font-inter">
                  <BookOpen className="w-5 h-5" />
                  <span>Γνωρίστε τα Βιβλία</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
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
              <span className="text-xs text-white/40 uppercase tracking-widest font-inter">Κύλησε</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-white/30" />
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
        <FooterSection />
      </div>
    </div>
  );
}
