import ChapterContent from "./ChapterContent";
import { notFound } from "next/navigation";
import { gGymnasiouChapters } from "@/data/curriculum";

type Props = {
  params: Promise<{ chapter: string }>;
};

export default async function ChapterPage({ params }: Props) {
  const { chapter } = await params;
  
  const validChapters = gGymnasiouChapters.map(c => c.id);
  
  if (!validChapters.includes(chapter)) {
    notFound();
  }

  return <ChapterContent chapterId={chapter} />;
}
