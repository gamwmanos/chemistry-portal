"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TeachersSection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-transparent mt-12">
      {/* 
        SMOOTH GRADIENT BACKGROUND 
        Instead of a solid box that creates harsh lines, this gradient smoothly fades 
        from transparent at the top, to a dark overlay in the middle, and back to transparent at the bottom. 
        This preserves the page's continuous background gradient perfectly.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050C]/40 to-transparent pointer-events-none" />

      {/* Subtle glow elements that don't destroy the page gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple-light/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue-light/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-8 font-proxima tracking-wider uppercase backdrop-blur-md shadow-sm">
              <GraduationCap className="w-4 h-4 text-brand-blue-light" />
              Ειδικα για Καθηγητες
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 tracking-tight text-white leading-tight">
              Είστε <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-blue-light drop-shadow-md">Καθηγητής;</span>
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-12 font-inter leading-relaxed max-w-xl font-medium drop-shadow-md">
              Γνωρίζουμε τις απαιτήσεις της σύγχρονης εκπαίδευσης. Τα βιβλία μας σχεδιάστηκαν με γνώμονα να διευκολύνουν το έργο σας, προσφέροντας ένα άρτιο και αξιόπιστο εργαλείο.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 w-full max-w-xl">
              {[
                { icon: Layers, title: "Οργανωμένη Ύλη", desc: "Κλιμακούμενη δυσκολία" },
                { icon: BookOpen, title: "Αναλυτικές Λύσεις", desc: "Βήμα-βήμα καθοδήγηση" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/20 flex items-center justify-center shrink-0 shadow-inner backdrop-blur-sm">
                    <item.icon className="w-6 h-6 text-brand-blue-light" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold font-proxima mb-1 text-lg drop-shadow-sm">{item.title}</h3>
                    <p className="text-white/70 text-sm font-inter leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/katigites">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-[#05050C] font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 font-inter group"
              >
                <span>Γιατί να μας επιλέξετε</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Visual Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center"
          >
            {/* Main glass card */}
            <div className="relative w-full h-full rounded-[3rem] border border-white/20 bg-black/30 backdrop-blur-xl p-10 overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-white/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple-light/20 rounded-full blur-[80px] group-hover:bg-brand-purple-light/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue-light/20 rounded-full blur-[80px] group-hover:bg-brand-blue-light/30 transition-all duration-700" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-20 h-20 rounded-3xl bg-black/40 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-inner">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="px-5 py-2.5 rounded-full bg-brand-purple-light/20 border border-brand-purple-light/40 backdrop-blur-md">
                  <span className="text-white font-mono text-sm font-bold tracking-widest uppercase drop-shadow-md">Premium</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="w-full h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-transparent mb-8" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat drop-shadow-md">Αποκλειστικό Υλικό</h3>
                <p className="text-white/80 font-inter text-lg leading-relaxed drop-shadow-sm">
                  Αποκτήστε πρόσβαση σε εξειδικευμένα σχέδια μαθήματος, τράπεζα θεμάτων και διαδραστικές παρουσιάσεις, αποκλειστικά για τους συνεργάτες μας.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
