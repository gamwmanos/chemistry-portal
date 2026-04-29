"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Brain, FlaskConical, PlayCircle } from "lucide-react";

import { gGymnasiouQuestions, gGymnasiouMCQ } from "@/data/gGymnasiouQuestions";
import { gGymnasiouChapters } from "@/data/curriculum";
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

  const chapterData = gGymnasiouChapters.find(ch => ch.id === chapterId);
  
  const currentOpenQs = gGymnasiouQuestions.filter(q => q.chapterId === chapterId);
  const currentMCQs = gGymnasiouMCQ.filter(q => q.chapterId === chapterId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-teal-900 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-emerald-400/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-12 w-full">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/g-gymnasiou" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 shadow-sm transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-emerald-100" />
          </Link>
          <div>
            <div className="text-xs text-emerald-300 uppercase tracking-widest font-semibold mb-1 font-inter">Γ' Γυμνασίου</div>
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
                  isActive ? "text-white font-semibold" : "text-emerald-200 hover:text-white font-medium"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-emerald-300" : ""}`} />
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
                  <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                    <BookOpen className="w-16 h-16 text-white/30 mb-4" />
                    <h3 className="text-xl font-bold mb-2 font-proxima text-white">Θεωρία Κεφαλαίου</h3>
                    <p className="text-emerald-200 text-center max-w-md font-inter">
                      Το θεωρητικό υλικό για αυτό το κεφάλαιο δεν είναι ακόμα διαθέσιμο.
                    </p>
                  </div>
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
                      <p className="text-emerald-200 text-center max-w-md font-inter">
                        Οι ερωτήσεις και ασκήσεις για αυτό το κεφάλαιο βρίσκονται υπό κατασκευή.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "experiments" && (
                <div className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-8 min-h-[50vh] flex flex-col items-center justify-center border-dashed border-2">
                  <PlayCircle className="w-16 h-16 text-white/30 mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-proxima text-white">Εικονικά Πειράματα</h3>
                  <p className="text-emerald-200 text-center max-w-md font-inter">
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
