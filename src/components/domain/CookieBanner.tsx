"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const cookieConsent = localStorage.getItem("chemistry_portal_cookie_consent");
    if (!cookieConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("chemistry_portal_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("chemistry_portal_cookie_consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[999] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#05050C]/80 backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] p-6 sm:p-8">
              {/* Decorative glows */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-purple-light/20 blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-blue-light/20 blur-[60px] rounded-full pointer-events-none" />
              
              <button 
                onClick={handleReject}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple-light/20 to-brand-blue-light/20 border border-white/10 items-center justify-center shrink-0">
                  <Cookie className="w-7 h-7 text-brand-blue-light" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 font-montserrat">
                    Χρησιμοποιούμε Cookies
                  </h3>
                  <p className="text-white/70 text-sm font-inter leading-relaxed">
                    Η εκπαιδευτική μας πλατφόρμα χρησιμοποιεί cookies για να εξασφαλίσει την καλύτερη δυνατή εμπειρία πλοήγησης. Χρησιμοποιούμε απαραίτητα cookies για τη βασική λειτουργικότητα και αναλυτικά cookies για να βελτιώνουμε τις υπηρεσίες μας.{" "}
                    <Link href="/privacy" className="text-brand-blue-light hover:text-white underline underline-offset-2 transition-colors">
                      Διαβάστε περισσότερα στην Πολιτική Απορρήτου
                    </Link>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
                  <button
                    onClick={handleReject}
                    className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all font-inter"
                  >
                    Απόρριψη
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-purple-light to-brand-blue-light text-white text-sm font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 transition-all font-inter"
                  >
                    Αποδοχή Όλων
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
