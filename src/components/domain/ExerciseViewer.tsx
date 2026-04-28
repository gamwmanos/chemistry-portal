"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import type { Question, MCQ } from "@/data/questions";

type Props = {
  mcqs: MCQ[];
  openQuestions: Question[];
};

export default function ExerciseViewer({ mcqs, openQuestions }: Props) {
  const [activeTab, setActiveTab] = useState<"mcq" | "open">("mcq");

  // State to hold selections for MCQs and open questions
  const [mcqSelections, setMcqSelections] = useState<Record<number, number>>({});
  const [mcqExplanations, setMcqExplanations] = useState<Record<number, boolean>>({});
  
  const [openAnswers, setOpenAnswers] = useState<Record<number, boolean>>({});

  const handleOptionSelect = (qIndex: number, optIndex: number) => {
    if (mcqSelections[qIndex] !== undefined) return; // Prevent changing answer after selection
    setMcqSelections(prev => ({ ...prev, [qIndex]: optIndex }));
    setMcqExplanations(prev => ({ ...prev, [qIndex]: true }));
  };

  const handleShowAnswer = (qIndex: number) => {
    setOpenAnswers(prev => ({ ...prev, [qIndex]: true }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto font-inter pb-20">
      {/* Sub-tabs for Exercise Type */}
      <div className="flex gap-4 mb-8 justify-center">
        <button
          onClick={() => setActiveTab("mcq")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
            activeTab === "mcq" ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20" : "bg-white/10 border border-white/20 text-purple-200 hover:text-white shadow-sm"
          }`}
        >
          Πολλαπλής Επιλογής
        </button>
        <button
          onClick={() => setActiveTab("open")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
            activeTab === "open" ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20" : "bg-white/10 border border-white/20 text-purple-200 hover:text-white shadow-sm"
          }`}
        >
          Ερωτήσεις Ανάπτυξης
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "mcq" && (
          <motion.div
            key="mcq-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {mcqs.map((mcq, qIndex) => {
              const selectedOption = mcqSelections[qIndex];
              const showExplanation = mcqExplanations[qIndex];

              return (
                <div key={qIndex} className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-6 md:p-10 relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-violet-300 bg-violet-950/50 border border-violet-800/50 px-3 py-1 rounded-full">
                      Ερώτηση {qIndex + 1}
                    </span>
                  </div>

                  <h3 
                    className="text-xl md:text-2xl font-bold mb-6 leading-relaxed text-white"
                    dangerouslySetInnerHTML={{ __html: mcq.q }}
                  />

                  <div className="space-y-4">
                    {mcq.options.map((option, optIndex) => {
                      const isSelected = selectedOption === optIndex;
                      const isCorrect = option.correct;
                      const showStatus = selectedOption !== undefined;

                      let buttonClass = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-purple-100";
                      if (showStatus) {
                        if (isCorrect) buttonClass = "bg-emerald-500/20 border-emerald-500/50 text-emerald-200";
                        else if (isSelected && !isCorrect) buttonClass = "bg-rose-500/20 border-rose-500/50 text-rose-200";
                        else buttonClass = "bg-white/5 border-white/10 text-white/40 opacity-50";
                      }

                      return (
                        <button
                          key={optIndex}
                          onClick={() => handleOptionSelect(qIndex, optIndex)}
                          disabled={selectedOption !== undefined}
                          className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${buttonClass}`}
                        >
                          <span dangerouslySetInnerHTML={{ __html: option.text }} />
                          {showStatus && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                          {showStatus && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="flex gap-3">
                          <HelpCircle className="w-6 h-6 text-violet-400 flex-shrink-0" />
                          <div 
                            className="text-purple-100 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: mcq.explanation }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            {mcqs.length === 0 && (
              <div className="text-center text-purple-300/50 py-10">
                Δεν βρέθηκαν ερωτήσεις πολλαπλής επιλογής.
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "open" && (
          <motion.div
            key="open-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {openQuestions.map((openQ, qIndex) => {
              const showAnswer = openAnswers[qIndex];

              return (
                <div key={qIndex} className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-6 md:p-10 relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-purple-300 bg-purple-900/50 border border-purple-800/50 px-3 py-1 rounded-full">
                      Ερώτηση {qIndex + 1}
                    </span>
                  </div>

                  <h3 
                    className="text-lg md:text-xl font-bold mb-6 leading-relaxed whitespace-pre-wrap text-white"
                    dangerouslySetInnerHTML={{ __html: openQ.q }}
                  />

                  {!showAnswer ? (
                    <button
                      onClick={() => handleShowAnswer(qIndex)}
                      className="w-full py-4 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium hover:bg-purple-500/30 transition-colors"
                    >
                      Εμφάνιση Απάντησης
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 prose prose-invert max-w-none"
                    >
                      <div 
                        className="text-purple-100 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: openQ.a }}
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
            {openQuestions.length === 0 && (
              <div className="text-center text-purple-300/50 py-10">
                Δεν βρέθηκαν ερωτήσεις ανάπτυξης.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
