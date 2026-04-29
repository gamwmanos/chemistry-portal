"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Zap } from "lucide-react";

const books = [
  {
    id: "a-lykeiou",
    grade: "Α' Λυκείου",
    title: "Χημεία",
    subtitle: "Βασικές Αρχές & Δομή Ύλης",
    description: "Από τη δομή του ατόμου ως τη στοιχειομετρία. Η θεωρία αποκτά νόημα με εκατοντάδες διαδραστικές ερωτήσεις και ασκήσεις και οπτικοποιήσεις.",
    image: "/alyk.jpg",
    color: "from-violet-600 via-purple-500 to-indigo-600",
    glow: "rgba(124,58,237,0.4)",
    badge: "160+ Ερωτήσεις και Ασκήσεις",
    chapters: 6,
    exercises: 160,
    digitalObjects: 172,
    features: ["Διαδραστικά μόρια 3D", "Βίντεο πειραμάτων", "Οπτικοποίηση Εννοιών"],
    href: "/a-lykeiou",
  },
  {
    id: "b-gymn",
    grade: "Β' Γυμνασίου",
    title: "Χημεία",
    subtitle: "Εισαγωγή στον Κόσμο της Χημείας",
    description: "Το πρώτο βήμα στον μαγικό κόσμο της χημείας. Βιωματική μάθηση που χτίζει τις βάσεις με πρακτικά παραδείγματα.",
    image: "/bgymn.jpg",
    color: "from-cyan-500 via-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.4)",
    badge: "200+ Ερωτήσεις και Ασκήσεις",
    chapters: 4,
    exercises: 200,
    digitalObjects: 140,
    features: ["Απλά πειράματα", "Καθημερινή χημεία", "Εισαγωγικές Ερωτήσεις και Ασκήσεις"],
    href: "/b-gymnasiou",
  },
  {
    id: "g-gymn",
    grade: "Γ' Γυμνασίου",
    title: "Χημεία",
    subtitle: "Χημικές Αντιδράσεις & Ενώσεις",
    description: "Κατανόηση των χημικών αντιδράσεων, οξέων, βάσεων και αλάτων με πλούσιο οπτικοακουστικό υλικό.",
    image: "/ggymn.jpg",
    color: "from-emerald-500 via-teal-500 to-cyan-600",
    glow: "rgba(16,185,129,0.4)",
    badge: "300+ Ερωτήσεις και Ασκήσεις",
    chapters: 6,
    exercises: 300,
    digitalObjects: 140,
    features: ["Εικονικό εργαστήριο", "Ερωτήσεις και Ασκήσεις κατανόησης", "Δομημένη μεθοδολογία"],
    href: "/g-gymnasiou",
  },
];

export default function BooksSection() {
  return (
    <section id="books" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle glows for added depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple-light/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue-light/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-6 font-proxima tracking-wider uppercase backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            Τα Βιβλία μας
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-montserrat mb-6 tracking-tight">
            <span className="text-white">Τρία Βιβλία.</span>{" "}
            <span className="text-gradient">Μια Φιλοσοφία.</span>
          </h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto font-inter leading-relaxed">
            Η συγγραφική ομάδα δημιούργησε ένα ολοκληρωμένο εκπαιδευτικό πακέτο, σχεδιασμένο για καθηγητές και μαθητές.
          </p>
        </motion.div>

        {/* Books grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <Link href={book.href} className="block h-full group cursor-pointer">
                <div
                  className="relative h-full rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    boxShadow: `0 0 0 0 ${book.glow}`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 30px 80px -20px ${book.glow}, 0 0 0 1px rgba(255,255,255,0.2)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 transparent";
                  }}
                >
                  {/* Gradient top bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${book.color}`} />

                  {/* Book image */}
                  <div className="relative h-72 overflow-hidden bg-white/5 flex items-center justify-center p-6 border-b border-white/5">
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: `radial-gradient(ellipse at center, ${book.glow} 0%, transparent 70%)` }}
                    />
                    <Image
                      src={book.image}
                      alt={`${book.title} ${book.grade}`}
                      width={200}
                      height={260}
                      sizes="(max-width: 768px) 250px, 250px"
                      quality={75}
                      className="object-contain drop-shadow-2xl group-hover:scale-105 -rotate-90 transition-transform duration-500 relative z-10 rounded-md"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold font-proxima text-white bg-black/40 border border-white/10 backdrop-blur-sm">
                      {book.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 font-proxima bg-gradient-to-r ${book.color} bg-clip-text text-transparent`}>
                      {book.grade}
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-white mb-1">
                      {book.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 font-inter">{book.subtitle}</p>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 font-inter">
                      {book.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-8">
                      {book.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-white/70 font-inter">
                          <Zap className="w-3.5 h-3.5 text-brand-purple-light flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Stats row */}
                    <div className="flex gap-2 mb-8">
                      <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-3 text-center flex flex-col justify-center">
                        <div className="text-xl md:text-2xl font-bold text-white font-proxima">{book.chapters}</div>
                        <div className="text-[9px] md:text-[10px] leading-tight text-white/40 uppercase tracking-wider font-inter mt-1">Κεφάλαια</div>
                      </div>
                      <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-3 text-center flex flex-col justify-center">
                        <div className="text-xl md:text-2xl font-bold font-proxima bg-gradient-to-r from-brand-purple-light to-brand-blue-light bg-clip-text text-transparent">{book.exercises}+</div>
                        <div className="text-[9px] md:text-[10px] leading-tight text-white/40 uppercase tracking-wider font-inter mt-1">Ερωτήσεις &<br/>Ασκήσεις</div>
                      </div>
                      <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-3 text-center flex flex-col justify-center">
                        <div className="text-xl md:text-2xl font-bold font-proxima bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{book.digitalObjects}+</div>
                        <div className="text-[9px] md:text-[10px] leading-tight text-white/40 uppercase tracking-wider font-inter mt-1">Ψηφιακά Μαθησιακά Αντικείμενα</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r ${book.color} group-hover:shadow-lg transition-all duration-300`}>
                      <span className="font-bold text-white font-inter">Περισσότερα</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
