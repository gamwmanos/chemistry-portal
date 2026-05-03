"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  let theoryPdfs: { title: string; url: string }[] = [];
  
  if (chapterId === "chapter-1") {
    theoryPdfs = [
      { title: "Θεωρία 1.1", url: "https://drive.google.com/file/d/1Zlj7DrzX2ThBZ1FIGVpF3wMkX9C_rSqB/preview" },
      { title: "Θεωρία 1.2", url: "https://drive.google.com/file/d/1lSVf94JQHmxY4I33It5i33aOZIaqt8up/preview" },
      { title: "Θεωρία 1.3", url: "https://drive.google.com/file/d/1azZwYcciytMZUVKNu4e73f4usIF1ncVB/preview" }
    ];
  } else if (chapterId === "chapter-2") {
    theoryPdfs = [
      { title: "Θεωρία 2.1", url: "https://drive.google.com/file/d/12wWCOzU61xmfMya-IfzGoAJnSbvRVXA9/preview" },
      { title: "Θεωρία 2.2", url: "https://drive.google.com/file/d/1ahOSVproyPRqvfUh_MFmoTt_iTUUU734/preview" },
      { title: "Θεωρία 2.3", url: "https://drive.google.com/file/d/1VUs4UJCUdTKXCuAueVsxnj8aYYlC105V/preview" },
      { title: "Θεωρία 2.4", url: "https://drive.google.com/file/d/1tnStI_8hF3N_snPfbKlgYajr957hN-G3/preview" }
    ];
  } else if (chapterId === "chapter-3") {
    theoryPdfs = [
      { title: "Θεωρία 3.1", url: "https://drive.google.com/file/d/1B2CR9fX9D0TVR8qld5gKsGxpRmFz4eKR/preview" },
      { title: "Θεωρία 3.2", url: "https://drive.google.com/file/d/18WCNhiT2K2aHNdu49mD2UopXJ9NebQKz/preview" },
      { title: "Θεωρία 3.3", url: "https://drive.google.com/file/d/1NiqMezHdPZAnQL03mIoH9H1UfwcSbSsb/preview" }
    ];
  } else if (chapterId === "chapter-4") {
    theoryPdfs = [
      { title: "Θεωρία 4.1", url: "https://drive.google.com/file/d/10f3LFpexx083KBH6UR-lw4n2lli_pLK9/preview" },
      { title: "Θεωρία 4.2", url: "https://drive.google.com/file/d/1Na8NPAYrBphMbYqKgmAtlA_rysGccdLL/preview" },
      { title: "Θεωρία 4.3", url: "https://drive.google.com/file/d/1syOMCbTQA-zv52V_330rS61uhSSuTOhi/preview" },
      { title: "Θεωρία 4.4", url: "https://drive.google.com/file/d/1GBdAh5Fm-zJlvSE0mKRxqgWeEQDSb1Qg/preview" }
    ];
  } else if (chapterId === "chapter-5") {
    theoryPdfs = [
      { title: "Θεωρία 5.1", url: "https://drive.google.com/file/d/15YkCBZK0ZNNvbfnIhoCYJ3KYL4eWrPlo/preview" },
      { title: "Θεωρία 5.2", url: "https://drive.google.com/file/d/1KkT48mRXgXXUvu6TrqyybAS3s10pho48/preview" },
      { title: "Θεωρία 5.3", url: "https://drive.google.com/file/d/1-DkOjKotLHyfUHQad9_i_bHHuXaeT3ZJ/preview" },
      { title: "Θεωρία 5.4", url: "https://drive.google.com/file/d/1lvBmlh6mpPBOUPKeJN3a53ngfmNAc_ak/preview" },
      { title: "Θεωρία 5.5", url: "https://drive.google.com/file/d/1JAdjTXyPyeg5CBB8CQjQ8vcXEACRlhiJ/preview" },
      { title: "Θεωρία 5.6", url: "https://drive.google.com/file/d/1nPlz2xHuJhDbHTlwENiHxDSAp9IcpFhd/preview" },
      { title: "Θεωρία 5.7", url: "https://drive.google.com/file/d/1EyRGO_abTF61iorMDBHWAbxXBzYIXHoU/preview" }
    ];
  } else if (chapterId === "chapter-6") {
    theoryPdfs = [
      { title: "Θεωρία 6.1", url: "https://drive.google.com/file/d/1xGkmon3f2xu5cnbc8rU7T0H9pWCgfFUW/preview" },
      { title: "Θεωρία 6.2", url: "https://drive.google.com/file/d/1uLE37r6qorOCDx2YxVtRwdm8KVgPzWIF/preview" },
      { title: "Θεωρία 6.3", url: "https://drive.google.com/file/d/15GMCmLK2D22uaw-2AgMwUuZEQdkd626l/preview" }
    ];
  }

  let experiments: { unit: string; title: string; url: string; image: string }[] = [];

  if (chapterId === "chapter-1") {
    experiments = [
      {
        unit: "1.1",
        title: "Διάσπαση H2O2 με καταλύτη πυρολουσίτη και ανίχνευση οξυγόνου",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14177",
        image: "/images/gGymnasiou/exp-1-1.jpg"
      },
      {
        unit: "1.1",
        title: "Η υπέρλαμπρη καύση του μαγνησίου (Mg)",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14183",
        image: "/images/gGymnasiou/exp-1-1(2).jpg"
      },
      {
        unit: "1.1",
        title: "Αντίδραση Fe με διάλυμα CuSO4",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14187",
        image: "/images/gGymnasiou/exp-1-1(3).jpg"
      }
    ];
  } else if (chapterId === "chapter-2") {
    experiments = [
      {
        unit: "2.3",
        title: "Το μυστήριο του νομισματοκοπείου",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21806",
        image: "/images/gGymnasiou/exp-2-3.jpg"
      }
    ];
  } else if (chapterId === "chapter-4") {
    experiments = [
      {
        unit: "4.1",
        title: "Ανίχνευση άνθρακα σε οργανικές ενώσεις – Απανθράκωση ζάχαρης",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14184",
        image: "/images/gGymnasiou/exp-4-1.jpg"
      },
      {
        unit: "4.2",
        title: "Τέλεια και ατελής καύση βουτανίου & παραφίνης – Ανίχνευση αιθάλης & CO2",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14394",
        image: "/images/gGymnasiou/exp-4-2.jpg"
      },
      {
        unit: "4.3",
        title: "Παρασκευή πλαστικού από άμυλο (Βιοπλαστικό)",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14191",
        image: "/images/gGymnasiou/exp-4-3.jpg"
      },
      {
        unit: "4.4",
        title: "Διαλυτότητα ουσιών σε νερό και αιθανόλη",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/11632",
        image: "/images/gGymnasiou/exp-4-4.jpg"
      }
    ];
  } else if (chapterId === "chapter-5") {
    experiments = [
      {
        unit: "5.3",
        title: "Δείκτης κόκκινο λάχανο – Χρωματική κλίμακα pH",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14273",
        image: "/images/gGymnasiou/exp-5-3.jpg"
      },
      {
        unit: "5.3",
        title: "Μέτρηση pH με πεχάμετρο, πεχαμετρικό χαρτί και δείκτη",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14194",
        image: "/images/gGymnasiou/exp-5-3(2).jpg"
      },
      {
        unit: "5.4",
        title: "Εξουδετέρωση, Δείκτες και Παρασκευή Άλατος NaCl",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14375",
        image: "/images/gGymnasiou/exp-5-4.jpg"
      },
      {
        unit: "5.4",
        title: "Εξουδετέρωση – Σχηματισμός και παραλαβή άλατος Ca3(PO4)2",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14295",
        image: "/images/gGymnasiou/exp-5-4(2).jpg"
      },
      {
        unit: "5.6",
        title: "Αντιδράσεις απλής αντικατάστασης – Δραστικότητα μετάλλων",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/21037",
        image: "/images/gGymnasiou/exp-5-6.jpg"
      },
      {
        unit: "5.6",
        title: "Πυροχημική ανίχνευση ιόντων μετάλλων σε άλατά τους",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14170",
        image: "/images/gGymnasiou/exp-5-6(2).jpg"
      },
      {
        unit: "5.7",
        title: "Ανίχνευση ιόντων Cl-, Br- & I- με υδατικό διάλυμα AgNO3",
        url: "https://ebooksdl.cti.gr/view?item=20.500.14040/14370",
        image: "/images/gGymnasiou/exp-5-7.jpg"
      }
    ];
  }

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
                   {theoryPdfs.length > 0 ? (
                     theoryPdfs.map((pdf) => (
                       <div key={pdf.url} className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-6 flex flex-col overflow-hidden">
                         <h3 className="text-xl font-bold mb-4 font-proxima text-white flex items-center gap-2">
                           <BookOpen className="w-5 h-5 text-emerald-300" />
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
                       <p className="text-emerald-200 text-center max-w-md font-inter">
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
                      <p className="text-emerald-200 text-center max-w-md font-inter">
                        Οι ερωτήσεις και ασκήσεις για αυτό το κεφάλαιο βρίσκονται υπό κατασκευή.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "experiments" && (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {experiments.length > 0 ? (
                    experiments.map((exp, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl p-6 flex flex-col overflow-hidden hover:bg-white/10 transition-colors">
                        <h3 className="text-lg font-bold mb-4 font-proxima text-white flex items-start gap-2 h-14" title={`Ενότητα ${exp.unit}: ${exp.title}`}>
                          <FlaskConical className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">Ενότητα {exp.unit}: {exp.title}</span>
                        </h3>
                        <a 
                          href={exp.url}
                          target={exp.url !== "#" ? "_blank" : undefined}
                          rel={exp.url !== "#" ? "noopener noreferrer" : undefined}
                          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group block flex items-center justify-center bg-black/20 border border-white/10 mt-auto"
                        >
                          <Image 
                            src={exp.image}
                            alt={exp.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {/* Hover overlay with button */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-20">
                            <div className="opacity-0 group-hover:opacity-100 bg-orange-500 text-white font-bold py-2 px-4 text-sm md:text-base rounded-full shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
                      <p className="text-emerald-200 text-center max-w-md font-inter">
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
