"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Brain, FlaskConical, PlayCircle } from "lucide-react";

import { 
  ch1Questions, ch1MCQ, 
  ch2Questions, ch2MCQ,
  ch3Questions, ch3MCQ,
  ch4Questions, ch4MCQ,
  ch5Questions, ch5MCQ,
  ch6Questions, ch6MCQ
} from "@/data/aLykeiouQuestions";
import { aLykeiouChapters } from "@/data/curriculum";
import ExerciseViewer from "@/components/domain/ExerciseViewer";

type TabType = "theory" | "exercises" | "experiments";

type Props = {
  chapterId: string;
};

export default function ChapterContent({ chapterId }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>("theory");

  const tabs = [
    { id: "theory", label: "Θεωρία", icon: BookOpen },
    { id: "exercises", label: "Ερωτήσεις και Ασκήσεις", icon: Brain },
    { id: "experiments", label: "Πειράματα", icon: FlaskConical },
  ] as const;

  const chapterData = aLykeiouChapters.find(ch => ch.id === chapterId);
  
  let mcqs: any[] = [];
  let openQs: any[] = [];
  let theoryPdfs: { title: string; url: string }[] = [];
  
  if (chapterId === "chapter-1") {
    mcqs = ch1MCQ;
    openQs = ch1Questions;
    theoryPdfs = [
      { title: "Θεωρία 1.1", url: "https://drive.google.com/file/d/1S0h2d2XNZGQ9VVd0vaVSiQBw5ZaB4rwa/preview" },
      { title: "Θεωρία 1.2", url: "https://drive.google.com/file/d/1xE7dyEbvf7ejI-QBrmKVOf2gLYc3apfK/preview" },
    ];
  } else if (chapterId === "chapter-2") {
    mcqs = ch2MCQ;
    openQs = ch2Questions;
    theoryPdfs = [
      { title: "Θεωρία 2.1", url: "https://drive.google.com/file/d/1f49FT6miCUcMsxmJ7_Hby6R9QWRVcOXp/preview" },
      { title: "Θεωρία 2.2", url: "https://drive.google.com/file/d/1cjjxLFbFifFLbmzwDowej4s0q9daZtUD/preview" },
    ];
  } else if (chapterId === "chapter-3") {
    mcqs = ch3MCQ;
    openQs = ch3Questions;
    theoryPdfs = [
      { title: "Θεωρία 3.1", url: "https://drive.google.com/file/d/1t6_JcqF14okemcK14qlt_W2tAdjXWBnT/preview" },
      { title: "Θεωρία 3.2", url: "https://drive.google.com/file/d/1rPdVtgfCsgh7wesfaiR-bXgOIPDrxs63/preview" },
    ];
  } else if (chapterId === "chapter-4") {
    mcqs = ch4MCQ;
    openQs = ch4Questions;
    theoryPdfs = [
      { title: "Θεωρία 4.1", url: "https://drive.google.com/file/d/15NtYuOkYEQSNcjLMSCwI5sqmw4MQzfxg/preview" },
      { title: "Θεωρία 4.2", url: "https://drive.google.com/file/d/1uIpb1KEStZ3B7J6fMiu7dKqpae7kzz6-/preview" },
      { title: "Θεωρία 4.3", url: "https://drive.google.com/file/d/1F6j_SfL_N20kjWugBorKdeh98VE4DFIF/preview" },
      { title: "Θεωρία 4.4", url: "https://drive.google.com/file/d/1N4iGBxw2qly_KPMtNv3rCtvk7xQ4o29N/preview" },
    ];
  } else if (chapterId === "chapter-5") {
    mcqs = ch5MCQ;
    openQs = ch5Questions;
    theoryPdfs = [
      { title: "Θεωρία 5.1", url: "https://drive.google.com/file/d/1x5OlOWAXn9bw-aY_cDRNXZT2Y9yK5hvY/preview" },
      { title: "Θεωρία 5.2", url: "https://drive.google.com/file/d/1teQEyrUX92VAq5oBtfB5RHNDX3ZHDcyP/preview" },
      { title: "Θεωρία 5.3", url: "https://drive.google.com/file/d/1zTJ9Ggv9XNPWoOrI61YnVwmsVCQbmz7Q/preview" },
      { title: "Θεωρία 5.4", url: "https://drive.google.com/file/d/19QKUt5GDJARlBnvVhAYmcP0tnq4zYCm2/preview" },
      { title: "Θεωρία 5.5", url: "https://drive.google.com/file/d/1eqg0aMd8zUCqtZWmAmIsqp_0iPLotz96/preview" },
    ];
  } else if (chapterId === "chapter-6") {
    mcqs = ch6MCQ;
    openQs = ch6Questions;
    theoryPdfs = [
      { title: "Θεωρία 6.1", url: "https://drive.google.com/file/d/1nEF5ciheZ3iTk1QMvhRsLXRjZAuPWRQZ/preview" },
      { title: "Θεωρία 6.2", url: "https://drive.google.com/file/d/1SvfK3i2I6bMUB4TvDwm7ukITYqsFVog0/preview" },
      { title: "Θεωρία 6.3", url: "https://drive.google.com/file/d/1QdLTuEhIvJ8wbZJrk3IlvBcqysGAAjaK/preview" },
    ];
  }

  // ─── ΠΕΙΡΑΜΑΤΑ ────────────────────────────────────────────────────────────────
  let experiments: { unit: string; title: string; url: string; image: string }[] = [];

  if (chapterId === "chapter-2") {
    experiments = [
      { unit: "2.2", title: "ΙΔΙΟΤΗΤΕΣ ΑΛΚΑΛΙΩΝ – ΑΝΤΙΔΡΑΣΉ ΤΟΥΣ ΜΕ ΝΕΡΟ", url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14371", image: "/images/aLykeiou/exp-2-2.jpg" },
    ];
  } else if (chapterId === "chapter-3") {
    experiments = [
      { unit: "3.2",   title: "ΔΙΑΜΟΡΙΑΚΕΣ ΔΥΝΑΜΕΙΣ",                                          url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21705", image: "/images/aLykeiou/exp-3-2.jpg" },
      { unit: "3.2",   title: "ΕΠΙΔΡΑΣΗ ΗΛΕΚΤΡΙΚΟΥ ΠΕΔΙΟΥ ΣΕ ΠΟΛΙΚΑ ΚΑΙ ΜΗ ΠΟΛΙΚΑ ΜΟΡΙΑ",     url: "https://ebooksdl.cti.gr/view?item=20.500.14040/22730", image: "/images/aLykeiou/exp-3-2-2.jpg" },
      { unit: "3.2.3", title: "ΤΑ ΟΜΟΙΑ ΔΙΑΛΥΟΥΝ ΤΑ ΟΜΟΙΑ",                                    url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21808", image: "/images/aLykeiou/exp-3-2-3.jpg" },
    ];
  } else if (chapterId === "chapter-5") {
    experiments = [
      // 5.1
      { unit: "5.1",   title: "ΤΕΛΕΙΑ ΚΑΙ ΑΤΕΛΗΣ ΚΑΥΣΗ ΒΟΥΤΑΝΙΟΥ ΚΑΙ ΠΑΡΑΦΙΝΗΣ – ΑΝΙΧΝΕΥΣΗ ΑΙΘΑΛΗΣ ΚΑΙ CO₂", url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14394", image: "/images/aLykeiou/exp-5-1.jpg" },
      { unit: "5.1",   title: "Η ΥΠΕΡΛΑΜΠΡΗ ΚΑΥΣΗ ΤΟΥ ΜΑΓΝΗΣΙΟΥ (Mg)",                         url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14183",  image: "/images/aLykeiou/exp-5-1(2).jpg" },
      { unit: "5.1",   title: "ΑΝΤΙΔΡΑΣΗ FeCl₃ ΜΕ NaOH – ΚΑΤΑΒΥΘΙΣΗ ΙΖΗΜΑΤΟΣ",                url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21056",  image: "/images/aLykeiou/exp-5-1(3).jpg" },
      { unit: "5.1",   title: "ΑΝΤΙΔΡΑΣΗ ΕΞΟΥΔΕΤΕΡΩΣΗΣ",                                        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21348",  image: "/images/aLykeiou/exp-5-1(4).jpg" },
      { unit: "5.1",   title: "ΑΝΤΙΔΡΑΣΕΙΣ ΑΠΛΗΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗΣ – ΔΡΑΣΤΙΚΟΤΗΤΑ ΜΕΤΑΛΛΩΝ",      url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21037",  image: "/images/aLykeiou/exp-5-1(5).jpg" },
      // 5.2
      { unit: "5.2",   title: "ΑΓΩΓΙΜΟΤΗΤΑ ΔΙΑΛΥΜΑΤΩΝ",                                         url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21233",  image: "/images/aLykeiou/exp-5-2.jpg" },
      { unit: "5.2",   title: "ΗΛΕΚΤΡΙΚΗ ΑΓΩΓΙΜΟΤΗΤΑ ΔΙΑΛΥΜΑΤΩΝ (ΜΕ ΠΟΛΥΜΕΤΡΟ)",               url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21055",  image: "/images/aLykeiou/exp-5-2(2).jpg" },
      // 5.3.1
      { unit: "5.3.1", title: "ΜΕΤΑΘΕΤΙΚΕΣ ΑΝΤΙΔΡΑΣΕΙΣ – 1ο ΜΕΡΟΣ",                            url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21599",  image: "/images/aLykeiou/exp-5-3-1.jpg" },
      { unit: "5.3.1", title: "ΜΕΤΑΘΕΤΙΚΕΣ ΑΝΤΙΔΡΑΣΕΙΣ – 2ο ΜΕΡΟΣ",                            url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21620",  image: "/images/aLykeiou/exp-5-3-1(2).jpg" },
      { unit: "5.3.1", title: "ΜΕΤΑΘΕΤΙΚΕΣ ΑΝΤΙΔΡΑΣΕΙΣ – 3ο ΜΕΡΟΣ",                            url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21036",  image: "/images/aLykeiou/exp-5-3-1(3).jpg" },
      { unit: "5.3.1", title: "ΕΛΕΓΧΟΣ ΠΟΙΟΤΗΤΑΣ ΥΔΑΤΩΝ ΤΗΣ ΛΙΜΝΗΣ «ΝΕΡΟΜΑΝΑ»",               url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21038",  image: "/images/aLykeiou/exp-5-3-1(4).jpg" },
      // 5.3.2
      { unit: "5.3.2", title: "ΑΝΤΙΔΡΑΣΗ ΕΞΟΥΔΕΤΕΡΩΣΗΣ",                                        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21348",  image: "/images/aLykeiou/exp-5-3-2.jpg" },
      // 5.4
      { unit: "5.4",   title: "ΑΝΤΙΔΡΑΣΕΙΣ ΑΠΛΗΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗΣ – ΔΡΑΣΤΙΚΟΤΗΤΑ ΜΕΤΑΛΛΩΝ",      url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21037",  image: "/images/aLykeiou/exp-5-4.jpg" },
      { unit: "5.4",   title: "ΑΝΤΙΔΡΑΣΗ Fe ΜΕ ΔΙΑΛΥΜΑ CuSO₄",                                 url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14187",  image: "/images/aLykeiou/exp-5-4(2).jpg" },
      { unit: "5.4",   title: "ΕΝΤΥΠΩΣΙΑΚΑ ΠΕΙΡΑΜΑΤΑ ΧΗΜΕΙΑΣ",                                  url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21059",  image: "/images/aLykeiou/exp-5-4(3).jpg" },
    ];
  } else if (chapterId === "chapter-6") {
    experiments = [
      { unit: "6.2", title: "ΣΤΟΙΧΕΙΟΜΕΤΡΙΚΟΙ ΥΠΟΛΟΓΙΣΜΟΙ",                                     url: "https://ebooksdl.cti.gr/view?item=20.500.14040/22724",  image: "/images/aLykeiou/exp-6-2.jpg" },
      { unit: "6.3", title: "ΠΑΡΑΣΚΕΥΗ ΔΙΑΛΥΜΑΤΟΣ ΟΡΙΣΜΕΝΗΣ ΣΥΓΚΕΝΤΡΩΣΗΣ – ΑΡΑΙΩΣΗ ΔΙΑΛΥΜΑΤΟΣ", url: "https://ebooksdl.cti.gr/view?item=20.500.14040/22723", image: "/images/aLykeiou/exp-6-3.jpg" },
    ];
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-800 to-indigo-900 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-violet-400/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 w-full">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/a-lykeiou" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 shadow-sm transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-purple-100" />
          </Link>
          <div>
            <div className="text-xs text-purple-300 uppercase tracking-widest font-semibold mb-1 font-inter">Α' Λυκείου</div>
            <h1 className="text-2xl font-bold font-proxima text-white">
              Κεφάλαιο {chapterData?.number}: {chapterData?.title || chapterId.replace('chapter-', '')}
            </h1>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="flex p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm w-full max-w-md mx-auto mb-12 relative overflow-hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm transition-all relative z-10 font-inter ${
                  isActive ? "text-white font-semibold" : "text-purple-200 hover:text-white font-medium"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-violet-300" : ""}`} />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-white/20 border border-white/30 shadow-sm rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="relative min-h-[50vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              {/* ── ΘΕΩΡΙΑ ── */}
              {activeTab === "theory" && (
                <div className="w-full flex flex-col gap-8">
                   {theoryPdfs.length > 0 ? (
                     theoryPdfs.map((pdf) => (
                       <div key={pdf.url} className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-6 flex flex-col overflow-hidden">
                         <h3 className="text-xl font-bold mb-4 font-proxima text-white flex items-center gap-2">
                           <BookOpen className="w-5 h-5 text-violet-300" />
                           {pdf.title}
                         </h3>
                         <div className="relative w-full rounded-2xl overflow-hidden bg-black/20 border border-white/10" style={{ aspectRatio: '16/9' }}>
                           <iframe 
                             src={pdf.url} 
                             className="absolute inset-0 w-full h-full border-0" 
                             allow="autoplay"
                           />
                         </div>
                       </div>
                     ))
                   ) : (
                     <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                       <BookOpen className="w-16 h-16 text-white/30 mb-4" />
                       <h3 className="text-xl font-bold mb-2 font-proxima text-white">Θεωρία Κεφαλαίου</h3>
                       <p className="text-purple-200 text-center max-w-md font-inter">
                         Το θεωρητικό υλικό για αυτό το κεφάλαιο δεν είναι ακόμα διαθέσιμο.
                       </p>
                     </div>
                   )}
                </div>
              )}

              {/* ── ΑΣΚΗΣΕΙΣ ── */}
              {activeTab === "exercises" && (
                <div className="w-full">
                   {mcqs.length > 0 || openQs.length > 0 ? (
                     <ExerciseViewer mcqs={mcqs} openQuestions={openQs} />
                   ) : (
                     <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                       <Brain className="w-16 h-16 text-white/30 mb-4" />
                       <h3 className="text-xl font-bold mb-2 font-proxima text-white">Δεν υπάρχουν ερωτήσεις και ασκήσεις</h3>
                       <p className="text-purple-200 text-center max-w-md font-inter">
                         Οι ερωτήσεις και ασκήσεις για αυτό το κεφάλαιο δεν είναι ακόμα διαθέσιμες.
                       </p>
                     </div>
                   )}
                </div>
              )}

              {/* ── ΠΕΙΡΑΜΑΤΑ ── */}
              {activeTab === "experiments" && (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {experiments.length > 0 ? (
                    experiments.map((exp, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-6 flex flex-col overflow-hidden hover:bg-white/10 transition-colors">
                        <h3 className="text-lg font-bold mb-4 font-proxima text-white flex items-start gap-2 h-14" title={`Ενότητα ${exp.unit}: ${exp.title}`}>
                          <FlaskConical className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">Ενότητα {exp.unit}: {exp.title}</span>
                        </h3>
                        <a 
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group block flex items-center justify-center bg-black/20 border border-white/10 mt-auto"
                        >
                          <Image 
                            src={exp.image}
                            alt={exp.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-20">
                            <div className="opacity-0 group-hover:opacity-100 bg-violet-500 text-white font-bold py-2 px-4 text-sm md:text-base rounded-full shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              <PlayCircle className="w-5 h-5" />
                              Εκκίνηση
                            </div>
                          </div>
                        </a>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                      <PlayCircle className="w-16 h-16 text-white/30 mb-4" />
                      <h3 className="text-xl font-bold mb-2 font-proxima text-white">Διαδραστικά Βίντεο Πειραμάτων</h3>
                      <p className="text-purple-200 text-center max-w-md font-inter">
                        Βίντεο και προσομοιώσεις πειραμάτων για αυτό το κεφάλαιο δεν είναι ακόμα διαθέσιμα.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
