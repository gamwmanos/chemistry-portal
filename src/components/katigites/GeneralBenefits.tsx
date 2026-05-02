"use client";

import { motion } from "framer-motion";
import { Lightbulb, Video, Laptop, LayoutTemplate, Globe, BrainCircuit } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    title: "Διερευνητική Μάθηση",
    description: "Έμφαση στη διερευνητική και βιωματική μάθηση. Πειραματικές δραστηριότητες από την εισαγωγή κάθε ενότητας ενθαρρύνουν τους μαθητές να παρατηρούν και να εξάγουν συμπεράσματα (inquiry-based learning)."
  },
  {
    icon: <Video className="w-8 h-8 text-brand-purple-light" />,
    title: "Βιντεοσκοπημένα Πειράματα",
    description: "Όλα τα πειράματα είναι διαθέσιμα σε βίντεο. Η απόλυτη λύση όταν δεν υπάρχει εργαστήριο, εξοπλισμός, ή όταν υπάρχουν περιορισμοί χρόνου και ασφάλειας."
  },
  {
    icon: <Laptop className="w-8 h-8 text-brand-blue-light" />,
    title: "Πλούσιο Ψηφιακό Υλικό",
    description: "Συνοδεύεται από διαδραστικές ερωτήσεις και ασκήσεις, εννοιολογικούς χάρτες, φύλλα αξιολόγησης και οδηγίες μέσω QR codes. Μειώνει τον χρόνο προετοιμασίας και προσφέρει έτοιμο υλικό διαφοροποίησης."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-emerald-400" />,
    title: "Άρτια Παιδαγωγική Δομή",
    description: "Κάθε ενότητα ξεκινά με ελκυστικό σενάριο, παρουσιάζει τη θεωρία με σαφήνεια και ολοκληρώνεται με περίληψη. Οργανώνει τη γνώση του μαθητή και δομεί το μάθημα του καθηγητή."
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: "Σύνδεση με την Κοινωνία",
    description: "Εντάσσει πραγματικά παραδείγματα, αναδεικνύει περιβαλλοντικά ζητήματα και καλλιεργεί στάσεις υπεύθυνου πολίτη. Έτσι, η μάθηση αποκτά πραγματικό νόημα."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-pink-400" />,
    title: "Δεξιότητες 21ου Αιώνα",
    description: "Συμβάλλει ουσιαστικά στην ανάπτυξη κριτικής σκέψης, συνεργασίας, δημιουργικότητας και ικανότητας επίλυσης πολύπλοκων προβλημάτων."
  }
];

export default function GeneralBenefits() {
  return (
    <section id="benefits" className="py-32 bg-[#0f172a] relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-white"
          >
            Γιατί να επιλέξετε τα βιβλία μας;
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-lora"
          >
            Ένα ολιστικό διδακτικό εργαλείο που συνδυάζει παιδαγωγική ποιότητα, πρακτικότητα και καινοτομία για τον καθηγητή Γυμνασίου και Λυκείου.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                {feature.icon}
              </div>
              
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/40 border border-white/10 shadow-inner">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed font-inter">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
