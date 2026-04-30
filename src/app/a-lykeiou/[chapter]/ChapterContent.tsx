"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Brain, FlaskConical, PlayCircle } from "lucide-react";

import { 
  chapter1Questions, chapter1MCQ, 
  chapter2Questions, chapter2MCQ,
  chapter3Questions, chapter3MCQ,
  chapter4Questions, chapter4MCQ,
  chapter5Questions, chapter5MCQ,
  chapter6Questions, chapter6MCQ
} from "@/data/questions";
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

  // Select data based on chapterId
  const chapterData = aLykeiouChapters.find(ch => ch.id === chapterId);
  
  let mcqs: any[] = [];
  let openQs: any[] = [];
  let theoryPdfs: { title: string; url: string }[] = [];
  
  if (chapterId === "chapter-1") {
    mcqs = chapter1MCQ;
    openQs = chapter1Questions;
    theoryPdfs = [
      { title: "Θεωρία 1.1", url: "https://drive.google.com/file/d/1dQ4gMKlX9o1bj5B65brYy2a8dXOj43Ov/preview" },
      { title: "Θεωρία 1.2", url: "https://drive.google.com/file/d/1OW6gU8K3uw4l9-rSx4toWJQCnDCrrE22/preview" }
    ];
  } else if (chapterId === "chapter-2") {
    mcqs = chapter2MCQ;
    openQs = chapter2Questions;
    theoryPdfs = [
      { title: "Θεωρία 2.1", url: "https://drive.google.com/file/d/1iK3HS8lFDWhrJSIxqcqdhfVFTJRPIv0l/preview" },
      { title: "Θεωρία 2.2", url: "https://drive.google.com/file/d/17KihzCUYkpCbdV5um_EGs7ayAwYeWLVn/preview" }
    ];
  } else if (chapterId === "chapter-3") {
    mcqs = chapter3MCQ;
    openQs = chapter3Questions;
    theoryPdfs = [
      { title: "Θεωρία 3.1", url: "https://drive.google.com/file/d/1-poHZXg8qJ4yO_qsiDgUSpXlEji4Lpkg/preview" },
      { title: "Θεωρία 3.2", url: "https://drive.google.com/file/d/1j1gsq3xJTF6zeAH_QyFa7YPaUBx-mb02/preview" }
    ];
  } else if (chapterId === "chapter-4") {
    mcqs = chapter4MCQ;
    openQs = chapter4Questions;
    theoryPdfs = [
      { title: "Θεωρία 4.1", url: "https://drive.google.com/file/d/1ya-uczqLzUhrpbOrDVeVM5LDEsmwVAHs/preview" },
      { title: "Θεωρία 4.2", url: "https://drive.google.com/file/d/1HeHgYhbCZZ2Jr03VuX9XS1ZjYTPhDVvF/preview" },
      { title: "Θεωρία 4.3", url: "https://drive.google.com/file/d/1cn5s70X-CiWKA2uIlUlqPOUfT6Q5i5zG/preview" },
      { title: "Θεωρία 4.4", url: "https://drive.google.com/file/d/1NKx-U2W8HZ9dbRnRkAyH0DHtzesTWMv-/preview" }
    ];
  } else if (chapterId === "chapter-5") {
    mcqs = chapter5MCQ;
    openQs = chapter5Questions;
    theoryPdfs = [
      { title: "Θεωρία 5.1", url: "https://drive.google.com/file/d/1IBYzK8SvUK21g6Mc5TcpsqpZuOYaBEQt/preview" },
      { title: "Θεωρία 5.2", url: "https://drive.google.com/file/d/15KCts-p42-4u_Ao9PEEPg5fFKW9qwP2W/preview" },
      { title: "Θεωρία 5.3", url: "https://drive.google.com/file/d/1fqeOKskL7pjbEGNoE6kk7L43bXLmESpK/preview" },
      { title: "Θεωρία 5.4", url: "https://drive.google.com/file/d/1Y5H8ylmxCajifUfDbu-UZGleDGLVnR69/preview" },
      { title: "Θεωρία 5.5", url: "https://drive.google.com/file/d/1HR7zPTkvrBMWNBbI-iUvSk7ytUyBpw_x/preview" }
    ];
  } else if (chapterId === "chapter-6") {
    mcqs = chapter6MCQ;
    openQs = chapter6Questions;
    theoryPdfs = [
      { title: "Θεωρία 6.1", url: "https://drive.google.com/file/d/1dYuld8bM4qmpp8OxEmDgLEyYBNZyic0t/preview" },
      { title: "Θεωρία 6.2", url: "https://drive.google.com/file/d/1o6IuGmaEaG0pFoA85RlxxhoaXznr2E0l/preview" },
      { title: "Θεωρία 6.3", url: "https://drive.google.com/file/d/1XmFHFH50ZtEeYg9p2AtE8naHfv2e3SUN/preview" }
    ];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-800 to-indigo-900 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-violet-400/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12">
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

              {activeTab === "experiments" && (
                <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                   <PlayCircle className="w-16 h-16 text-white/30 mb-4" />
                   <h3 className="text-xl font-bold mb-2 font-proxima text-white">Εικονικά Πειράματα</h3>
                   <p className="text-purple-200 text-center max-w-md font-inter">
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
