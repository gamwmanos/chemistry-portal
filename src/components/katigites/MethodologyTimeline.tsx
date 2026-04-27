"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, FlaskConical, Search, ShieldCheck, Zap } from "lucide-react";

const timelineSteps = [
  {
    id: 1,
    title: "1. Ελκυστικό Εισαγωγικό Σενάριο",
    description: "Η γνώση ξεκινά με αφορμή την καθημερινότητα. Κάθε ενότητα ξεκινά με έναυσμα που κεντρίζει την περιέργεια, μετατρέποντας τη θεωρία σε πραγματικό ερώτημα προς επίλυση.",
    icon: <Search className="w-6 h-6 text-brand-blue-light" />,
    color: "from-brand-blue-dark to-brand-blue-light",
    align: "left"
  },
  {
    id: 2,
    title: "2. Πειραματική Διερεύνηση (Microscale)",
    description: "Οι μαθητές αναλαμβάνουν δράση. Μέσω πειραμάτων μικροκλίμακας (ασφάλεια & οικονομία) ή βιντεοσκοπημένων πειραμάτων, παρατηρούν, υποθέτουν και εξάγουν συμπεράσματα.",
    icon: <FlaskConical className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-600 to-emerald-400",
    align: "right"
  },
  {
    id: 3,
    title: "3. Σαφής Ανάπτυξη Θεωρίας",
    description: "Μετά το βίωμα, ακολουθεί η επιστημονική εξήγηση. Η θεωρία αναπτύσσεται με σαφήνεια, λυμένα παραδείγματα και εποπτικά μέσα (διαδραστικούς χάρτες, 3D απεικονίσεις).",
    icon: <BookOpen className="w-6 h-6 text-brand-purple-light" />,
    color: "from-brand-purple-dark to-brand-purple-light",
    align: "left"
  },
  {
    id: 4,
    title: "4. Σύνδεση με Περιβάλλον & Κοινωνία",
    description: "Εφαρμογή της γνώσης στην Πράσινη Χημεία, την κυκλική οικονομία και τα περιβαλλοντικά ζητήματα, χτίζοντας συνείδηση υπεύθυνου πολίτη.",
    icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-600 to-yellow-400",
    align: "right"
  },
  {
    id: 5,
    title: "5. Αξιολόγηση & Ανατροφοδότηση",
    description: "Κουίζ, σταυρόλεξα, και e-βάζο προβλημάτων προσφέρουν άμεση διαμορφωτική και τελική αξιολόγηση, κλείνοντας τον μαθησιακό κύκλο.",
    icon: <Zap className="w-6 h-6 text-pink-400" />,
    color: "from-pink-600 to-pink-400",
    align: "left"
  }
];

export default function MethodologyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-20 bg-[#0f172a] relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-purple/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-bold mb-6 font-montserrat text-white"
          >
            Η Διαδρομή της <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-brand-blue-light">Γνώσης</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/70 text-xl font-lora leading-relaxed"
          >
            Δείτε βήμα-βήμα πώς η μεθοδολογία μας μετατρέπει τη σχολική αίθουσα σε ένα σύγχρονο, ερευνητικό εργαστήριο ανακάλυψης.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* The glowing center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-purple-light via-brand-blue-light to-emerald-400 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <TimelineItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ step, index }: { step: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center 50%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  const isLeft = step.align === "left";

  return (
    <div ref={ref} className={`relative flex items-center justify-between md:justify-normal ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} pl-12 md:pl-0`}>
      
      {/* Center Icon Node */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#0f172a] border-4 border-[#1e293b] z-20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} opacity-20 absolute inset-0 animate-pulse`} />
        {step.icon}
      </motion.div>

      {/* Empty space for the opposite side on desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <motion.div 
        style={{ opacity, y }}
        className={`w-full md:w-5/12 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
      >
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group relative overflow-hidden">
          
          {/* Hover glowing effect inside card */}
          <div className={`absolute -inset-20 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`} />

          <span className="text-sm font-bold text-white/40 tracking-widest uppercase mb-2 block font-mono">
            ΒΗΜΑ {step.id}
          </span>
          <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
            {step.title}
          </h3>
          <p className="text-white/70 leading-relaxed font-inter text-lg">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
