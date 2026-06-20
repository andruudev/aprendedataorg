import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock hasta conectar Supabase
const MOCK_LESSON = {
  id: "1",
  title: "Introducción y bienvenida",
  description:
    "En esta lección introductoria veremos qué vamos a aprender a lo largo del curso y qué herramientas necesitamos.",
  youtube_id: "dQw4w9WgXcQ",
  course_slug: "fundamentos-data-engineering",
  course_title: "Fundamentos de Data Engineering",
};

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = MOCK_LESSON;

  return (
    <div className="flex flex-col gap-6">
      {/* Back */}
      <Link
        href={`/cursos/${lesson.course_slug}`}
        className="flex w-fit items-center gap-2 text-sm transition-colors hover:text-white"
        style={{ color: "var(--muted)" }}
      >
        <ArrowLeft size={16} />
        {lesson.course_title}
      </Link>

      {/* Player de YouTube */}
      <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${lesson.youtube_id}?rel=0&modestbranding=1&color=white`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      {/* Info de la lección */}
      <div className="flex flex-col gap-2">
        <h1
          className="text-xl font-extrabold tracking-tight sm:text-2xl"
          style={{ color: "var(--text)" }}
        >
          {lesson.title}
        </h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>
          {lesson.description}
        </p>
      </div>
    </div>
  );
}
