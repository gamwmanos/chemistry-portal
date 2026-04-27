import { authorsData } from '@/data/authors';
import AuthorsClientPage from '@/components/authors/AuthorsClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Οι Συγγραφείς | Chemistry Portal',
  description: 'Γνωρίστε την επιστημονική ομάδα πίσω από το Chemistry Portal: Σιδέρη Φιλλένια, Παπαδόπουλος Αθανάσιος, Eleni Paloumpa, Αντώνης Χρονάκης.',
};

export default function AuthorsPage() {
  return (
    <main className="w-full bg-slate-50 overflow-hidden">
      <AuthorsClientPage authors={authorsData} />
    </main>
  );
}
