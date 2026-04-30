"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Brain, FlaskConical, PlayCircle } from "lucide-react";

import { bGymnasiouQuestions, bGymnasiouMCQ } from "@/data/bGymnasiouQuestions";
import { bGymnasiouChapters } from "@/data/curriculum";
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

  const chapterData = bGymnasiouChapters.find(ch => ch.id === chapterId);
  
  const currentOpenQs = bGymnasiouQuestions.filter(q => q.chapterId === chapterId);
  const currentMCQs = bGymnasiouMCQ.filter(q => q.chapterId === chapterId);

  let theoryPdfs: { title: string; url: string }[] = [];
  
  if (chapterId === "chapter-1") {
    theoryPdfs = [
      { title: "Θεωρία 1.1", url: "https://drive.google.com/file/d/1-SosuxOksnKs-lDf50ECoOjsk3zGwTM8/preview" },
      { title: "Θεωρία 1.2", url: "https://drive.google.com/file/d/12svofFzZ57lMh_NFiG-rYD3EBN7NXmbO/preview" }
    ];
  } else if (chapterId === "chapter-2") {
    theoryPdfs = [
      { title: "Θεωρία 2.1", url: "https://drive.google.com/file/d/17Pku4F5GXp2wWdPwRrbtjc8dlWqnRFtb/preview" },
      { title: "Θεωρία 2.2", url: "https://drive.google.com/file/d/17YMRyth7ueLsICTMh-1201MnrkE4ayP1/preview" },
      { title: "Θεωρία 2.3", url: "https://drive.google.com/file/d/196dRG8wi45eMkQ1fkDqrZ6cmTsX-9QBb/preview" }
    ];
  } else if (chapterId === "chapter-3") {
    theoryPdfs = [
      { title: "Θεωρία 3.1", url: "https://drive.google.com/file/d/1Dx6gklIUmxlfmmfYGq7mVI8XRx56CRrq/preview" },
      { title: "Θεωρία 3.2", url: "https://drive.google.com/file/d/1EuYXi97FnQEDuuqkX75L0yobuXNBP4H-/preview" },
      { title: "Θεωρία 3.3", url: "https://drive.google.com/file/d/1F23MrfnOwyvo1lp2SuD5Pyjtrh1THaYK/preview" },
      { title: "Θεωρία 3.4", url: "https://drive.google.com/file/d/1HSJPk6RSep4XqQMQaG21M-eMvpv-GE8G/preview" },
      { title: "Θεωρία 3.5", url: "https://drive.google.com/file/d/1KNUyG9-IIX476ySBde8HszHxgsFKYncJ/preview" }
    ];
  } else if (chapterId === "chapter-4") {
    theoryPdfs = [
      { title: "Θεωρία 4.1", url: "https://drive.google.com/file/d/1KaTTaMqltoznPmf0talS6lhgWvWThFj1/preview" },
      { title: "Θεωρία 4.2", url: "https://drive.google.com/file/d/1ODpmRABi4Y0JvLePcOPmrsX716m0MA2U/preview" }
    ];
  } else if (chapterId === "chapter-5") {
    theoryPdfs = [
      { title: "Θεωρία 5.1", url: "https://drive.google.com/file/d/1PQcZcGt8EHFrkdoZWdmnj-cjB5Z0zeWe/preview" },
      { title: "Θεωρία 5.2", url: "https://drive.google.com/file/d/1VpXOC9Tla73L0vc4aHvap3w7W6NQLwTq/preview" }
    ];
  } else if (chapterId === "chapter-6") {
    theoryPdfs = [
      { title: "Θεωρία 6.1", url: "https://drive.google.com/file/d/1WLiO8A8NAE01VGFbiKr1GR657TRjuRgw/preview" }
    ];
  } else if (chapterId === "chapter-7") {
    theoryPdfs = [
      { title: "Θεωρία 7.1", url: "https://drive.google.com/file/d/1cHg8LbN7Si7hCNlBo0zMywhankSUr79X/preview" },
      { title: "Θεωρία 7.2", url: "https://drive.google.com/file/d/1dEQ092SkmUZ93p-Z8Llf_ipsV_tnvQa0/preview" },
      { title: "Θεωρία 7.3", url: "https://drive.google.com/file/d/1dtMY1J8ggsLc9PWBpl89ECoP1zzvC5NE/preview" },
      { title: "Θεωρία 7.4", url: "https://drive.google.com/file/d/1eZew9CqafkqbRsFpFMamymmDzsxl66gk/preview" }
    ];
  } else if (chapterId === "chapter-8") {
    theoryPdfs = [
      { title: "Θεωρία 8.1", url: "https://drive.google.com/file/d/1gHEdRgDhLVfTxnv3a47sVHd1WnLcNwbJ/preview" },
      { title: "Θεωρία 8.2", url: "https://drive.google.com/file/d/1joelodPypgCvnjpiCMI6pr0Bm6r3_VL6/preview" },
      { title: "Θεωρία 8.3", url: "https://drive.google.com/file/d/1ndAoWEpTBUFTv1UJQx25_sJ-Jv6l5Sbo/preview" }
    ];
  } else if (chapterId === "chapter-9") {
    theoryPdfs = [
      { title: "Θεωρία 9.1", url: "https://drive.google.com/file/d/1nwvn0a6ssqr2gmrKks8CtfhUWV5J10s7/preview" },
      { title: "Θεωρία 9.2", url: "https://drive.google.com/file/d/1s1v5fvLx23VpJVNRncsKe23m7Fspo1SE/preview" },
      { title: "Θεωρία 9.3", url: "https://drive.google.com/file/d/1t4xqa4Y_ptfpnwNkB6SJ7RQ2TDh8Ek6U/preview" }
    ];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-800 to-blue-900 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-cyan-400/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 w-full">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/b-gymnasiou" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 shadow-sm transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-100" />
          </Link>
          <div>
            <div className="text-xs text-cyan-300 uppercase tracking-widest font-semibold mb-1 font-inter">Β' Γυμνασίου</div>
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
                  isActive ? "text-white font-semibold" : "text-cyan-200 hover:text-white font-medium"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-300" : ""}`} />
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
              {activeTab === "theory" && (
                <div className="w-full flex flex-col gap-8">
                   {theoryPdfs.length > 0 ? (
                     theoryPdfs.map((pdf, idx) => (
                       <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-6 flex flex-col overflow-hidden">
                         <h3 className="text-xl font-bold mb-4 font-proxima text-white flex items-center gap-2">
                           <BookOpen className="w-5 h-5 text-cyan-300" />
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
                       <p className="text-cyan-200 text-center max-w-md font-inter">
                         Το θεωρητικό υλικό για αυτό το κεφάλαιο δεν είναι ακόμα διαθέσιμο.
                       </p>
                     </div>
                   )}
                </div>
              )}

              {activeTab === "exercises" && (
                <div className="w-full">
                  {currentMCQs.length > 0 || currentOpenQs.length > 0 ? (
                    <ExerciseViewer mcqs={currentMCQs} openQuestions={currentOpenQs} />
                  ) : (
                    <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                      <Brain className="w-16 h-16 text-white/30 mb-4" />
                      <h3 className="text-xl font-bold mb-2 font-proxima text-white">Δεν υπάρχουν ερωτήσεις και ασκήσεις</h3>
                      <p className="text-cyan-200 text-center max-w-md font-inter">
                        Οι ερωτήσεις και ασκήσεις για αυτό το κεφάλαιο δεν είναι ακόμα διαθέσιμες.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "experiments" && (
                <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                  <PlayCircle className="w-16 h-16 text-white/30 mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-proxima text-white">Εικονικά Πειράματα</h3>
                  <p className="text-cyan-200 text-center max-w-md font-inter">
                    Βίντεο και προσομοιώσεις πειραμάτων για την καλύτερη κατανόηση των φαινομένων.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
