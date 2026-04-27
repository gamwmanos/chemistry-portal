"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, FlaskConical, Share2, MessageCircle, Video } from "lucide-react";

export default function FooterSection() {
  return (
    <div className="bg-[#05050C] text-white">
      {/* CTA Banner */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-light/10 via-transparent to-brand-blue-light/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-purple-light/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/contact">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-8 font-proxima tracking-wider uppercase backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all cursor-pointer">
                <Mail className="w-4 h-4" />
                Επικοινωνια
              </div>
            </Link>

            <h2 className="text-5xl md:text-7xl font-bold font-montserrat mb-8 tracking-tight">
              <span className="text-white">Ανακαλύψτε το </span>
              <br className="hidden md:block" />
              <span className="text-white drop-shadow-lg">Εκπαιδευτικό μας Υλικό</span>
            </h2>

            <p className="text-white/80 text-xl mb-12 leading-relaxed font-inter max-w-2xl mx-auto drop-shadow-md">
              Επικοινωνήστε μαζί μας για παραγγελίες, δείγματα καθηγητών,
              ή οποιαδήποτε πληροφορία σχετικά με τα βιβλία μας.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/#books" className="group">
                <div className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-brand-blue-dark font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 font-inter">
                  <span>Τα βιβλία μας</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/contact" className="group">
                <div className="flex items-center gap-3 px-10 py-5 rounded-full border border-white/40 text-white bg-black/20 font-bold text-lg hover:bg-black/40 hover:border-white/60 backdrop-blur-md transition-all duration-300 font-inter">
                  <span>Επικοινωνία</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 bg-transparent py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/40 to-white/10 p-[1px] shadow-sm">
                  <div className="w-full h-full bg-black/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="font-bold text-xl tracking-wider uppercase font-proxima text-white drop-shadow-sm">ΕΚΔΟΣΕΙΣ ΠΕΔΙΟ</span>
              </div>
              <p className="text-white/80 leading-relaxed max-w-sm font-inter">
                Εκπαιδευτικές εκδόσεις Χημείας υψηλών προδιαγραφών για το Λύκειο. 
                Καινοτόμα βιβλία με διαδραστικό υλικό και ολοκληρωμένη μεθοδολογία.
              </p>
              <div className="flex gap-4 mt-6">
                {[
                  { icon: MessageCircle, label: "Instagram", href: "https://instagram.com" },
                  { icon: Share2, label: "Facebook", href: "https://facebook.com" },
                  { icon: Video, label: "YouTube", href: "https://youtube.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-white/20 bg-black/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all cursor-pointer shadow-sm backdrop-blur-md"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-white mb-6 font-proxima uppercase tracking-wider text-sm drop-shadow-sm">Περιεχόμενο</h3>
              <ul className="space-y-3">
                {[
                  { label: "Α' Λυκείου", href: "/a-lykeiou" },
                  { label: "Β' Γυμνασίου", href: "/b-gymnasiou" },
                  { label: "Γ' Γυμνασίου", href: "/g-gymnasiou" },
                  { label: "Διαδραστικά", href: "/#" },
                  { label: "Πειράματα", href: "/#" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/70 hover:text-white transition-colors font-inter text-sm drop-shadow-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 font-proxima uppercase tracking-wider text-sm drop-shadow-sm">Πληροφορίες</h3>
              <ul className="space-y-3">
                {[
                  { label: "Η Συγγραφική Ομάδα", href: "/authors" },
                  { label: "Τα Βιβλία Μας", href: "/#books" },
                  { label: "Επικοινωνία", href: "/contact" },
                  { label: "Όροι Χρήσης", href: "/terms" },
                  { label: "Πολιτική Απορρήτου", href: "/privacy" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/70 hover:text-white transition-colors font-inter text-sm drop-shadow-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm font-inter">
              © 2026 Εκδόσεις Πεδίο. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <p className="text-white/50 text-xs font-inter text-center md:text-right">
              Σχεδιασμένο για καθηγητές &amp; μαθητές<br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              Φτιαγμένο από τον <strong>EMMANOUHL CHRONAKIS</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
