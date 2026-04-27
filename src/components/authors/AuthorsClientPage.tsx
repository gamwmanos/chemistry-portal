'use client';

import React, { useState, useEffect } from 'react';
import { Author } from '@/data/authors';
import { AnimatePresence, motion } from 'framer-motion';
import AuthorsHero from './AuthorsHero';
import AuthorProfile from './AuthorProfile';

interface AuthorsClientPageProps {
  authors: Author[];
}

export default function AuthorsClientPage({ authors }: AuthorsClientPageProps) {
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);

  // Handle smooth scroll when clicking the "Discover them" arrow
  const handleScrollDown = () => {
    const firstAuthorEl = document.getElementById(`author-${authors[0].id}`);
    if (firstAuthorEl) {
      firstAuthorEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // Scroll to top when an author is explicitly selected to show their focused view
  useEffect(() => {
    if (selectedAuthorId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedAuthorId]);

  return (
    <div className="bg-blue-500 min-h-screen text-white">
      <AnimatePresence mode="wait">
        {!selectedAuthorId ? (
          // === MODE 1: ALL AUTHORS SCROLL VIEW ===
          <motion.div
            key="all-authors-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="w-full"
          >
            {/* The spectacular Hero & Selection Menu */}
            <AuthorsHero 
              authors={authors} 
              onSelectAuthor={setSelectedAuthorId} 
              onScrollDown={handleScrollDown} 
            />

            {/* List of all authors below the hero */}
            <div className="w-full bg-blue-500 relative z-20">
              {authors.map((author, idx) => (
                <AuthorProfile 
                  key={author.id} 
                  author={author} 
                  isFocusedMode={false}
                  onBack={() => {}} // Not needed in list view
                />
              ))}
            </div>
            
            {/* Footer space */}
            <div className="h-32 bg-blue-500" />
          </motion.div>
        ) : (
          // === MODE 2: FOCUSED AUTHOR VIEW ===
          <motion.div
            key="focused-author-view"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            className="w-full min-h-screen bg-blue-500 relative"
          >
            {/* Find the selected author */}
            {authors.find(a => a.id === selectedAuthorId) && (
              <AuthorProfile 
                author={authors.find(a => a.id === selectedAuthorId)!} 
                isFocusedMode={true}
                onBack={() => setSelectedAuthorId(null)} 
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
