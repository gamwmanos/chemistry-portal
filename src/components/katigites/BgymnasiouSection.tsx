"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, FlaskConical, MessageSquareHeart, Leaf, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function BgymnasiouSection() {
  const points = [
    {
      title: "Σαφής Διάρθρωση & Στόχοι",
      description: "Προοδευτική λογική: από τον μακρόκοσμο στον μικρόκοσμο. Ρητά διατυπωμένοι στόχοι («Γιατί να τα μάθω εγώ όλα αυτά;») που αυξάνουν την εσωτερική κινητοποίηση.",
      icon: <Target className="w-6 h-6 text-brand-purple-light" />
    },
    {
      title: "Ενσωμάτωση Πειραματικής Μεθόδου",
      description: "Πειράματα μικροκλίμακας με Φύλλα Εργασίας. Ψηφιακές προσομοιώσεις (QR codes) και διαδραστικοί χάρτες για άμεση ανατροφοδότηση.",
      icon: <FlaskConical className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Παιδαγωγική της Αφήγησης",
      description: "Εισαγωγή δύο εικονικών μαθητών (Ίοντα & Όλη) που διατυπώνουν ερωτήσεις και εναλλακτικές ιδέες, λειτουργώντας ως πρότυπο επιστημονικού διαλόγου.",
      icon: <MessageSquareHeart className="w-6 h-6 text-pink-400" />
    },
    {
      title: "Σύνδεση με Περιβάλλον",
      description: "Δίλημμα οφέλους-κόστους (πλαστικά, λιπάσματα). Ανάλυση φαινομένου του θερμοκηπίου και θαλάσσιας ρύπανσης για ανάπτυξη περιβαλλοντικής συνείδησης.",
      icon: <Leaf className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Ολοκληρωμένο Σύστημα Αξιολόγησης",
      description: "Διαμορφωτική (Φύλλα εργασίας, σταυρόλεξα) και Τελική (e-βάζο προβλημάτων) αξιολόγηση. Παραδειγματική λύση ασκήσεων με αναλυτικό σχολιασμό.",
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <section className="py-32 relative z-10 overflow-hidden bg-slate-900">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-purple/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Σύγχρονη προσέγγιση για τη <span className="text-brand-purple-light">Β' Γυμνασίου</span>
              </h2>
              <p className="text-white/70 text-lg mb-10 font-lora leading-relaxed">
                Ένα εγχειρίδιο που δεν περιορίζεται στη μετάδοση θεωρίας. Δομείται ως ένα ολοκληρωμένο εργαλείο που προάγει τον πειραματισμό, την κριτική σκέψη και τη διαθεματική προσέγγιση.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group ${idx === points.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/40 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-montserrat">{point.title}</h3>
                  <p className="text-white/60 text-sm font-inter leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Image / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent z-10" />
              <Image 
                src="/bgymn.jpg" 
                alt="Χημεία Β' Γυμνασίου" 
                fill 
                className="object-contain p-8 drop-shadow-2xl bg-gradient-to-bl from-brand-purple-900/40 to-[#1e293b] -rotate-90 scale-[1.3]"
              />
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-brand-purple/80 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-white font-bold text-sm">Β' Γυμνασίου</span>
              </div>
            </div>
            
            {/* Glowing orb behind the book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/20 blur-[100px] rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
