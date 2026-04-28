"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function GradeBGymn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 to-blue-700 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-300/30 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-blue-400/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 p-6 md:p-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group font-inter text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Επιστροφή στην Αρχική
        </Link>
      </div>

      <div className="relative z-10 flex-grow flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-100 text-sm font-medium mb-8 font-proxima backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Νέο Εκπαιδευτικό Υλικό</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-montserrat text-white drop-shadow-md"
          >
            Β' Γυμνασίου
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-8 text-cyan-200 font-proxima"
          >
            Προσεχώς!
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/80 leading-relaxed font-inter mb-12"
          >
            Η ψηφιακή εκπαιδευτική πλατφόρμα για την Χημεία της Β' Γυμνασίου βρίσκεται υπό κατασκευή. 
            Σύντομα θα έχετε πρόσβαση σε εκατοντάδες διαδραστικές ερωτήσεις και ασκήσεις, θεωρία, και εικονικά πειράματα!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center justify-center p-6 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm shadow-xl shadow-cyan-900/50"
          >
            <Clock className="w-12 h-12 text-cyan-300 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
