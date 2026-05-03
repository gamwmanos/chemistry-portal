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
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Link href="/katigites">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-8 font-proxima tracking-wider uppercase backdrop-blur-md shadow-sm hover:bg-white/20 hover:border-white/40 transition-all cursor-pointer">
                <GraduationCap className="w-4 h-4 text-brand-blue-light" />
                Ειδικα για Καθηγητες
              </div>
            </Link>
            
            <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 tracking-tight text-white leading-tight">
              Είστε <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-blue-light drop-shadow-md">Καθηγητής;</span>
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-12 font-inter leading-relaxed max-w-2xl font-medium drop-shadow-md">
              Γνωρίζουμε τις απαιτήσεις της σύγχρονης εκπαίδευσης. Τα βιβλία μας σχεδιάστηκαν με γνώμονα να διευκολύνουν το έργο σας, προσφέροντας ένα άρτιο και αξιόπιστο εργαλείο.
            </p>

            {/* Feature cards - 3 items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 w-full max-w-3xl">
              {[
                { icon: Layers, title: "Οργανωμένη Ύλη", desc: "Κλιμακούμενη δυσκολία", gradient: "from-violet-500/20 to-purple-500/10", border: "border-violet-400/20", iconColor: "text-violet-400" },
                { icon: BookOpen, title: "Αναλυτικές Λύσεις", desc: "Βήμα-βήμα καθοδήγηση", gradient: "from-blue-500/20 to-cyan-500/10", border: "border-blue-400/20", iconColor: "text-blue-400" },
                { icon: GraduationCap, title: "Υποστήριξη Καθηγητή", desc: "Έτοιμο διδακτικό υλικό", gradient: "from-emerald-500/20 to-teal-500/10", border: "border-emerald-400/20", iconColor: "text-emerald-400" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.border} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                >
                  <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shadow-inner">
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold font-proxima mb-1 text-base drop-shadow-sm">{item.title}</h3>
                    <p className="text-white/60 text-xs font-inter leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
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
        </div>
      </div>
    </section>
  );
}
