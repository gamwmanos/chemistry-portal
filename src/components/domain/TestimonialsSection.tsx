"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Η πλατφόρμα αυτή μου άλλαξε τελείως τον τρόπο που διαβάζω Χημεία. Τα animated πειράματα κάνουν τα πάντα ξεκάθαρα.",
    name: "Μαρία Κ.",
    role: "Μαθήτρια Γ' Λυκείου, Αθήνα",
    stars: 5,
  },
  {
    text: "Περάσα στην Ιατρική με 19 στη Χημεία. Χωρίς τη μεθοδολογία και τα πρότυπα Πανελληνίων δε θα τα είχα καταφέρει.",
    name: "Νίκος Α.",
    role: "Πρωτοετής Φοιτητής Ιατρικής",
    stars: 5,
  },
  {
    text: "Ως φροντιστής χρησιμοποιώ το υλικό καθημερινά. Η ποιότητα των ασκήσεων και των αναλύσεων είναι ασύγκριτη.",
    name: "Γιώργος Π.",
    role: "Καθηγητής Χημείας",
    stars: 5,
  },
  {
    text: "Τα μαθησιακά πακέτα είναι χρυσός. Μπορώ να διαβάζω ακόμα και χωρίς ίντερνετ, δομημένα και ολοκληρωμένα.",
    name: "Έλενα Σ.",
    role: "Μαθήτρια Β' Λυκείου, Θεσσαλονίκη",
    stars: 5,
  },
  {
    text: "Οι βήμα-βήμα λύσεις με βοήθησαν να καταλάβω επιτέλους τη στοιχειομετρία. Τώρα λύνω μόνος μου κάθε άσκηση.",
    name: "Δημήτρης Μ.",
    role: "Μαθητής Α' Λυκείου, Πάτρα",
    stars: 5,
  },
  {
    text: "Εντυπωσιακή πλατφόρμα. Η ανάλυση προόδου μου δείχνει ακριβώς που χρειάζομαι δουλειά. Απαραίτητο εργαλείο.",
    name: "Σοφία Τ.",
    role: "Μαθήτρια Γ' Λυκείου, Ηράκλειο",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-light/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple-light/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-400 text-sm font-semibold mb-6 font-proxima tracking-wider uppercase">
            <Star className="w-4 h-4" />
            Τι Λένε οι Μαθητές
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 tracking-tight">
            <span className="text-white">Αποτελέσματα που</span>{" "}
            <span className="text-gradient">μιλούν από μόνα τους</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-inter leading-relaxed">
            Χιλιάδες μαθητές σε όλη την Ελλάδα έχουν ήδη επιλέξει τον τρόπο μας.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/8 bg-white/3 p-8 hover:bg-white/5 hover:border-white/15 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-brand-purple-light/40 mb-4" />
              <p className="text-white/75 text-base leading-relaxed mb-6 font-inter italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white font-proxima">{t.name}</div>
                  <div className="text-xs text-white/40 font-inter mt-0.5">{t.role}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
