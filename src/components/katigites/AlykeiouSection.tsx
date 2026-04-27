"use client";

import { motion } from "framer-motion";
import { CheckCircle2, QrCode, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function AlykeiouSection() {
  const points = [
    {
      title: "Βαθιά Κατανόηση, Όχι Αποστήθιση",
      description: "Οργανώνει τη γνώση με σαφήνεια, χτίζει έννοιες βήμα-βήμα και συνδέει τη θεωρία με εφαρμογές. Ιδανικό για τη μετάβαση στην πιο απαιτητική Χημεία του Λυκείου.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Πολυαισθητηριακή & Ψηφιακή Μάθηση",
      description: "Ενσωματώνει κωδικούς QR για άμεση πρόσβαση σε βιντεοσκοπημένα πειράματα που «ζωντανεύουν» τη θεωρία μέσα στην τάξη, ακόμα και χωρίς εργαστήριο.",
      icon: <QrCode className="w-6 h-6 text-brand-purple-light" />
    },
    {
      title: "Έμφαση στο Σχολικό Εργαστήριο & Ασφάλεια",
      description: "Αναλυτικός οδηγός με έμφαση στην ασφάλεια. Καινοτομία η εργαστηριακή μικροκλίμακα για μεγαλύτερη ασφάλεια, λιγότερα απόβλητα και χαμηλότερο κόστος.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Δομημένη & Σαφής Μεθοδολογία",
      description: "Λυμένα παραδείγματα με αντίστοιχες εφαρμογές προς επίλυση, φύλλα εργασίας, και ανάλυση της επιστημονικής μεθόδου για κριτική σκέψη.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-blue-light" />
    }
  ];

  return (
    <section className="py-32 relative z-10 overflow-hidden bg-[#0f172a]">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent z-10" />
              <Image 
                src="/alyk.jpg" 
                alt="Χημεία Α' Λυκείου" 
                fill 
                className="object-contain p-8 drop-shadow-2xl bg-gradient-to-br from-brand-blue-900/40 to-[#1e293b] -rotate-90 scale-[1.3]"
              />
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-brand-blue/80 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-white font-bold text-sm">Α' Λυκείου</span>
              </div>
            </div>
            
            {/* Glowing orb behind the book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/20 blur-[100px] rounded-full -z-10" />
          </motion.div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Η πρόταση διδασκαλίας για την <span className="text-brand-blue-light">Α' Λυκείου</span>
              </h2>
              <p className="text-white/70 text-lg mb-10 font-lora leading-relaxed">
                Γέφυρα ανάμεσα στην κλασική γνώση και τις σύγχρονες δεξιότητες (STEM). Ένας διαδραστικός οδηγός που συνδέει την επιστήμη με την πραγματική ζωή, την Πράσινη Χημεία και την Κυκλική Οικονομία.
              </p>
            </motion.div>

            <div className="space-y-6">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                  className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-black/30 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {point.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-montserrat">{point.title}</h3>
                    <p className="text-white/60 font-inter">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
