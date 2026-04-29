import ChapterContent from "./ChapterContent";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ chapter: string }>;
};

import { bGymnasiouChapters } from "@/data/curriculum";

const validChapters = bGymnasiouChapters.map(c => c.id);

export default async function ChapterPage({ params }: Props) {
  const { chapter } = await params;
  
  if (!validChapters.includes(chapter)) {
    notFound();
  }

  return <ChapterContent chapterId={chapter} />;
}
