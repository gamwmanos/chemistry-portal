"use client";

import { motion } from "framer-motion";
import { Scale, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background-alt relative pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#05050C] via-brand-purple-light/5 to-transparent pointer-events-none" />
      <div className="absolute top-60 right-1/4 w-[500px] h-[500px] bg-brand-blue-light/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 pt-32 md:pt-40 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-purple-light/30 bg-brand-purple-light/10 text-brand-purple-light text-sm font-semibold mb-6 font-proxima tracking-wider uppercase">
            <Scale className="w-4 h-4" />
            Νομικοι Οροι
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight text-white mb-6">
            Όροι Χρήσης
          </h1>
          <p className="text-white/70 text-lg font-inter leading-relaxed max-w-2xl">
            Η χρήση της εκπαιδευτικής πλατφόρμας και του ψηφιακού υλικού της προϋποθέτει την αποδοχή των παρακάτω όρων. Παρακαλούμε διαβάστε τους προσεκτικά.
          </p>
          <p className="text-white/50 text-sm mt-4">Ισχύουν από: Ιανουάριος 2026</p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-white/80 font-inter leading-relaxed"
        >
          
          <div className="glass bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-brand-purple-light" />
              <h2 className="text-xl font-bold text-white font-montserrat">1. Πνευματικά Δικαιώματα</h2>
            </div>
            <p className="text-white/70">
              Το σύνολο του περιεχομένου της ιστοσελίδας (συμπεριλαμβανομένων κειμένων, ασκήσεων, βίντεο, διαδραστικών εφαρμογών, λογοτύπων και γραφικών) αποτελεί πνευματική ιδιοκτησία των Εκδόσεων Πεδίο και της Συγγραφικής Ομάδας. Απαγορεύεται ρητά η αναπαραγωγή, αναδημοσίευση, αντιγραφή, πώληση ή εμπορική εκμετάλλευση χωρίς γραπτή άδεια.
            </p>
          </div>

          <div className="glass bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-brand-blue-light" />
              <h2 className="text-xl font-bold text-white font-montserrat">2. Εκπαιδευτική Χρήση</h2>
            </div>
            <p className="text-white/70 mb-3">
              Το υλικό παρέχεται αποκλειστικά για εκπαιδευτική και προσωπική χρήση:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Οι **μαθητές** μπορούν να χρησιμοποιούν το υλικό για τη μελέτη και προετοιμασία τους.</li>
              <li>Οι **καθηγητές** επιτρέπεται να προβάλλουν το υλικό στις σχολικές αίθουσες ή στα φροντιστήρια, εφόσον αναφέρουν την πηγή (Εκδόσεις Πεδίο).</li>
              <li>Απαγορεύεται η ενσωμάτωση του υλικού σε άλλες ψηφιακές πλατφόρμες κλειστού ή ανοιχτού τύπου χωρίς άδεια.</li>
            </ul>
          </div>

          <div className="glass bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <h2 className="text-xl font-bold text-white font-montserrat">3. Αποποίηση Ευθύνης</h2>
            </div>
            <p className="text-white/70">
              Η συγγραφική ομάδα και οι Εκδόσεις Πεδίο καταβάλλουν κάθε δυνατή προσπάθεια ώστε το εκπαιδευτικό υλικό, οι απαντήσεις των ασκήσεων και τα πειράματα να είναι επιστημονικά ορθά και επικαιροποιημένα. Ωστόσο, δεν φέρουν ευθύνη για τυχόν τυπογραφικά λάθη ή αποκλίσεις από μελλοντικές εγκυκλίους του Υπουργείου Παιδείας. Τα πειράματα που περιγράφονται πρέπει να εκτελούνται μόνο σε ασφαλές εργαστηριακό περιβάλλον με την επίβλεψη καθηγητή.
            </p>
          </div>

          <div className="mt-12 text-center text-white/60 text-sm">
            Συνεχίζοντας την πλοήγηση στην ιστοσελίδα μας, αποδέχεστε αυτούς τους Όρους Χρήσης καθώς και την <Link href="/privacy" className="text-brand-blue-light hover:underline">Πολιτική Απορρήτου</Link> μας.
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
