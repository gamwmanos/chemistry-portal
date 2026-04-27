"use client";

import { motion } from "framer-motion";
import { Shield, BookOpen, Lock, Server, Mail } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background-alt relative pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#05050C] via-brand-blue-light/5 to-transparent pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-brand-purple-light/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 pt-32 md:pt-40 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue-light/30 bg-brand-blue-light/10 text-brand-blue-light text-sm font-semibold mb-6 font-proxima tracking-wider uppercase">
            <Shield className="w-4 h-4" />
            Προστασια Δεδομενων
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight text-white mb-6">
            Πολιτική Απορρήτου
          </h1>
          <p className="text-white/70 text-lg font-inter leading-relaxed max-w-2xl">
            Η προστασία των προσωπικών σας δεδομένων αποτελεί ύψιστη προτεραιότητα για τις Εκδόσεις Πεδίο. Παρακάτω εξηγούμε αναλυτικά πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα δεδομένα σας.
          </p>
          <p className="text-white/50 text-sm mt-4">Τελευταία ενημέρωση: Οκτώβριος 2026</p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12 text-white/80 font-inter leading-relaxed"
        >
          
          <section className="glass bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-light/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-brand-purple-light" />
              </div>
              <h2 className="text-2xl font-bold text-white font-montserrat">1. Συλλογή Δεδομένων</h2>
            </div>
            <p className="mb-4">
              Συλλέγουμε προσωπικά δεδομένα μόνο όταν εσείς μας τα παρέχετε εκούσια, για παράδειγμα όταν εγγράφεστε στην πλατφόρμα, επικοινωνείτε μαζί μας ή πραγματοποιείτε παραγγελία εκπαιδευτικού υλικού. Τα δεδομένα αυτά μπορεί να περιλαμβάνουν:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Ονοματεπώνυμο και στοιχεία επικοινωνίας (email, τηλέφωνο)</li>
              <li>Ιδιότητα (Μαθητής, Καθηγητής, Γονέας)</li>
              <li>Δεδομένα χρήσης και πλοήγησης (IP διεύθυνση, τύπος browser) μέσω απαραίτητων cookies</li>
            </ul>
          </section>

          <section className="glass bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-blue-light/20 flex items-center justify-center">
                <Server className="w-6 h-6 text-brand-blue-light" />
              </div>
              <h2 className="text-2xl font-bold text-white font-montserrat">2. Χρήση Δεδομένων</h2>
            </div>
            <p className="mb-4">
              Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για τους παρακάτω σκοπούς:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Παροχή πρόσβασης στο διαδραστικό εκπαιδευτικό υλικό και τις απαντήσεις των ασκήσεων.</li>
              <li>Επεξεργασία των αιτημάτων υποστήριξης ή επικοινωνίας που μας υποβάλλετε.</li>
              <li>Βελτίωση της πλατφόρμας και της εκπαιδευτικής εμπειρίας.</li>
              <li>Αποστολή ενημερώσεων για νέες εκδόσεις (μόνο εφόσον έχετε δώσει τη συγκατάθεσή σας).</li>
            </ul>
          </section>

          <section className="glass bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-white font-montserrat">3. Προστασία & Ασφάλεια (GDPR)</h2>
            </div>
            <p className="mb-4">
              Οι Εκδόσεις Πεδίο συμμορφώνονται πλήρως με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR) της Ε.Ε. Εφαρμόζουμε σύγχρονα τεχνικά μέτρα ασφαλείας (κρυπτογράφηση, ασφαλείς διακομιστές) για την αποτροπή μη εξουσιοδοτημένης πρόσβασης στα δεδομένα σας.
            </p>
            <p>
              Τα δεδομένα σας δεν πωλούνται, δεν ενοικιάζονται και δεν κοινοποιούνται σε τρίτους για διαφημιστικούς σκοπούς.
            </p>
          </section>

          <section className="glass bg-[#05050C]/50 p-8 rounded-3xl border border-brand-purple-light/30">
            <h2 className="text-xl font-bold text-white mb-4">Έχετε ερωτήσεις;</h2>
            <p className="text-white/70 mb-6">
              Για οποιαδήποτε διευκρίνιση σχετικά με την επεξεργασία των προσωπικών σας δεδομένων ή για την άσκηση των δικαιωμάτων σας (πρόσβαση, διόρθωση, διαγραφή), μπορείτε να επικοινωνήσετε μαζί μας.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#05050C] font-bold hover:bg-gray-200 transition-colors">
              <Mail className="w-4 h-4" />
              Επικοινωνήστε μαζί μας
            </Link>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
