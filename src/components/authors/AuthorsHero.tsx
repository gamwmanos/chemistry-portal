'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Author } from '@/data/authors';

interface AuthorsHeroProps {
  authors: Author[];
  onSelectAuthor: (id: string) => void;
  onScrollDown: () => void;
}

export default function AuthorsHero({ authors, onSelectAuthor }: AuthorsHeroProps) {
  const authorIds = [
    "fillenia-sideri",
    "athanasios-papadopoulos",
    "eleni-paloumpa",
    "antonis-chronakis"
  ];

  const [hoveredAuthor, setHoveredAuthor] = useState<string | null>(null);

  const getAuthorData = (id: string) => {
    switch (id) {
      case "fillenia-sideri": return { name: "Σιδέρη Φιλλένια", left: "18%", top: "22%" };
      case "athanasios-papadopoulos": return { name: "Παπαδόπουλος Αθανάσιος", left: "40%", top: "23%" };
      case "eleni-paloumpa": return { name: "Παλούμπα Ελένη", left: "60%", top: "23%" };
      case "antonis-chronakis": return { name: "Αντώνης Χρονάκης", left: "83%", top: "18%" };
      default: return null;
    }
  };

  const activeAuthor = hoveredAuthor ? getAuthorData(hoveredAuthor) : null;

  return (
    <div className="relative w-full min-h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full">
        <Image 
          src="/oloi.jpg" 
          alt="Οι Συγγραφείς" 
          width={1920} 
          height={1080} 
          sizes="100vw"
          className="w-full h-auto block"
          priority
        />
        
        {/* 
          Διαδραστικό SVG Overlay
          Απλοποιημένα πολύγωνα (hitboxes) προσαρμοσμένα στη νέα φωτογραφία
        */}
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute inset-0 w-full h-full z-10"
        >
          {/* 1. Σιδέρη Φιλλένια */}
          <polygon 
            points="0,100 0,30 10,20 28,20 33,40 33,100" 
            onClick={() => onSelectAuthor(authorIds[0])}
            onMouseEnter={() => setHoveredAuthor(authorIds[0])}
            onMouseLeave={() => setHoveredAuthor(null)}
            className="fill-transparent stroke-transparent cursor-pointer outline-none hover:bg-white/5 transition-colors duration-300"
          />
          
          {/* 2. Παπαδόπουλος Αθανάσιος */}
          <polygon 
            points="33,100 33,40 35,20 48,20 50,40 48,100" 
            onClick={() => onSelectAuthor(authorIds[1])}
            onMouseEnter={() => setHoveredAuthor(authorIds[1])}
            onMouseLeave={() => setHoveredAuthor(null)}
            className="fill-transparent stroke-transparent cursor-pointer outline-none hover:bg-white/5 transition-colors duration-300"
          />
          
          {/* 3. Eleni Paloumpa */}
          <polygon 
            points="48,100 50,40 53,20 67,20 70,40 68,100" 
            onClick={() => onSelectAuthor(authorIds[2])}
            onMouseEnter={() => setHoveredAuthor(authorIds[2])}
            onMouseLeave={() => setHoveredAuthor(null)}
            className="fill-transparent stroke-transparent cursor-pointer outline-none hover:bg-white/5 transition-colors duration-300"
          />
          
          {/* 4. Αντώνης Χρονάκης */}
          <polygon 
            points="68,100 70,40 75,15 92,15 100,40 100,100" 
            onClick={() => onSelectAuthor(authorIds[3])}
            onMouseEnter={() => setHoveredAuthor(authorIds[3])}
            onMouseLeave={() => setHoveredAuthor(null)}
            className="fill-transparent stroke-transparent cursor-pointer outline-none hover:bg-white/5 transition-colors duration-300"
          />
        </svg>

        {/* Δυναμικό Tooltip Στατικά τοποθετημένο πάνω από το κεφάλι */}
        {activeAuthor && (
          <div 
            className="absolute z-50 pointer-events-none bg-slate-900/80 backdrop-blur-md text-white px-5 py-2 rounded-full border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] transform -translate-x-1/2 -translate-y-full transition-opacity duration-150 ease-in-out"
            style={{ 
              left: activeAuthor.left, 
              top: activeAuthor.top 
            }}
          >
            <span className="font-semibold tracking-wide text-lg whitespace-nowrap">
              {activeAuthor.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
