import ChapterContent from "./ChapterContent";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ chapter: string }>;
};

const validChapters = ["chapter-1", "chapter-2", "chapter-3", "chapter-4", "chapter-5", "chapter-6"];

export default async function ChapterPage({ params }: Props) {
  const { chapter } = await params;
  
  if (!validChapters.includes(chapter)) {
    notFound();
  }

  return <ChapterContent chapterId={chapter} />;
}
