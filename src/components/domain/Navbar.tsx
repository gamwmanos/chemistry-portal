"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FlaskConical, BookOpen } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Always show at the very top of the page
    if (latest < 100) {
      setHidden(false);
      return;
    }

    // Hide when scrolling down, show when scrolling up
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Keep it transparent everywhere exactly like before, EXCEPT on the contact page
  const navBackground = isContactPage 
    ? "bg-[#05050C]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20" 
    : "bg-transparent";

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 md:px-12 md:py-5 flex items-center justify-between pointer-events-none [&>*]:pointer-events-auto transition-colors duration-300 ${navBackground}`}
    >
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple-light to-brand-blue-light p-[1px]">
            <div className="w-full h-full bg-[#05050C]/80 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <FlaskConical className="w-5 h-5 text-brand-blue-light" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-wider uppercase drop-shadow-[0_2px_12px_rgba(124,58,237,0.7)] font-proxima text-white">
            ΕΚΔΟΣΕΙΣ ΠΕΔΙΟ
          </span>
        </motion.div>
      </Link>

      <nav className="hidden md:flex gap-8">
        {[
          { label: "Αρχική", href: "/" },
          { label: "Τα Βιβλία", href: "/#books" },
          { label: "Συγγραφείς", href: "/authors" },
          { label: "Για Καθηγητές", href: "/katigites" },
          { label: "Επικοινωνία", href: "/contact" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * i }}
          >
            <Link
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group font-inter"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-blue-light transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Link href="/#books" aria-label="Βιβλία">
          <div className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/15 transition-all backdrop-blur-sm font-inter">
            <BookOpen className="w-4 h-4" />
            Βιβλία
          </div>
        </Link>
      </motion.div>
    </motion.header>
  );
}
