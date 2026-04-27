import { Metadata } from "next";
import KatigitesHero from "@/components/katigites/KatigitesHero";
import GeneralBenefits from "@/components/katigites/GeneralBenefits";
import MethodologyTimeline from "@/components/katigites/MethodologyTimeline";
import DigitalShowcase from "@/components/katigites/DigitalShowcase";
import AlykeiouSection from "@/components/katigites/AlykeiouSection";
import BgymnasiouSection from "@/components/katigites/BgymnasiouSection";
import FooterSection from "@/components/domain/FooterSection";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Οδηγός για Καθηγητές | Βιβλία Χημείας",
  description: "Γιατί να επιλέξετε τα βιβλία Χημείας των Εκδόσεων Πεδίο. Ολοκληρωμένη πρόταση διδασκαλίας.",
};

export default function KatigitesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans selection:bg-brand-purple/30">
      
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center justify-between pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-semibold font-inter">Αρχική</span>
        </Link>
      </nav>

      <KatigitesHero />
      <MethodologyTimeline />
      <GeneralBenefits />
      <DigitalShowcase />
      <AlykeiouSection />
      <BgymnasiouSection />
      
      {/* Conclusion / Final CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#05050C] to-brand-blue-dark/20 text-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-montserrat">
              Δεν είναι απλώς μέσα μετάδοσης γνώσεων.
            </h2>
            <p className="text-xl text-white/80 font-lora leading-relaxed mb-12">
              Υποστηρίζουν την ενεργητική μάθηση, αξιοποιούν την τεχνολογία, διευκολύνουν τον εκπαιδευτικό στην πράξη και ενισχύουν ουσιαστικά τη μαθησιακή εμπειρία.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300">
                Επικοινωνήστε μαζί μας
              </button>
              <Link href="/authors" className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Γνωρίστε τους Συγγραφείς
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
