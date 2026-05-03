"use client";
import { motion } from "framer-motion";
import { Brain, Microscope, Layers, PenTool, LayoutTemplate, Sparkles } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Οπτικοποίηση & Πειράματα",
    description: "Διαδραστικά animations και βίντεο πειραμάτων υψηλής ανάλυσης που βοηθούν στην κατανόηση δύσκολων εννοιών.",
    color: "text-violet-400",
  },
  {
    icon: Layers,
    title: "Δομημένη Μεθοδολογία",
    description: "Πλήρης και αναλυτική θεωρία, οργανωμένη σε μαθησιακά πακέτα που χτίζουν τη γνώση βήμα προς βήμα.",
    color: "text-blue-400",
  },
  {
    icon: PenTool,
    title: "Αναλυτικές Λύσεις",
    description: "Κάθε άσκηση συνοδεύεται από πλήρη ανάλυση και αιτιολόγηση, καθοδηγώντας τον μαθητή και βοηθώντας τον καθηγητή.",
    color: "text-emerald-400",
  },
  {
    icon: Brain,
    title: "Διαδραστικές Ερωτήσεις και Ασκήσεις",
    description: "Εφαρμογές που επιτρέπουν την αλληλεπίδραση σε πραγματικό χρόνο, μετατρέποντας τη μάθηση σε ενεργητική διαδικασία.",
    color: "text-orange-400",
  },
  {
    icon: LayoutTemplate,
    title: "Ολοκληρωμένα Διαγωνίσματα",
    description: "Στοχευμένα θέματα προσομοίωσης και διαγωνίσματα αυτοαξιολόγησης για αξιόπιστη μέτρηση της προόδου.",
    color: "text-pink-400",
  },
  {
    icon: Sparkles,
    title: "Προσαρμοσμένη Μάθηση",
    description: "Περιεχόμενο σχεδιασμένο για διαφορετικά επίπεδα μαθητών, από τη βασική κατανόηση έως την άριστη απόδοση.",
    color: "text-cyan-400",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple-light/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-6 font-proxima tracking-wider uppercase backdrop-blur-sm">
            <Microscope className="w-4 h-4" />
            Συγχρονο Εκπαιδευτικο Υλικο
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 tracking-tight">
            <span className="text-white">Πέρα από</span>{" "}
            <span className="text-gradient">το παραδοσιακό βιβλίο</span>
          </h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto font-inter leading-relaxed">
            Το εκδοτικό μας έργο προσφέρει σύγχρονα εκπαιδευτικά εργαλεία, σχεδιασμένα για να υποστηρίξουν το έργο του καθηγητή και την προσπάθεια του μαθητή.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 group hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default backdrop-blur-md"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/30 border border-white/10 mb-6 group-hover:scale-110 transition-all duration-300 shadow-inner">
                <feat.icon className={`w-6 h-6 ${feat.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white font-proxima mb-3">{feat.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed font-inter">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
