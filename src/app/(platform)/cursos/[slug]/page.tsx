import Link from "next/link";
import { ArrowLeft, Clock, PlayCircle } from "lucide-react";

// Temporal hasta conectar Supabase
const MOCK_LESSONS = [
  { id: "1", title: "Introducción y bienvenida", youtube_id: "dQw4w9WgXcQ", duration_seconds: 420 },
  { id: "2", title: "¿Qué es un pipeline de datos?", youtube_id: "dQw4w9WgXcQ", duration_seconds: 900 },
  { id: "3", title: "ETL vs ELT", youtube_id: "dQw4w9WgXcQ", duration_seconds: 780 },
];

function formatSeconds(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Back */}
      <Link
        href="/cursos"
        className="flex w-fit items-center gap-2 text-sm transition-colors hover:text-white"
        style={{ color: "var(--muted)" }}
      >
        <ArrowLeft size={16} />
        Volver a cursos
      </Link>

      {/* Header del curso */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: "rgba(108,99,255,0.2)", color: "#a5b4fc" }}
          >
            data engineering
          </span>
          <span
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: "rgba(255,255,255,0.05)", color: "var(--muted)" }}
          >
            Principiante
          </span>
        </div>
        <h1
          className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          style={{ color: "var(--text)" }}
        >
          Fundamentos de Data Engineering
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: 640, lineHeight: 1.7 }}>
          Aprende los conceptos base de los pipelines de datos, ETL/ELT, y cómo
          diseñar arquitecturas de datos modernas desde cero.
        </p>
        <div className="flex items-center gap-4 text-sm" style={{ color: "var(--muted)" }}>
          <span className="flex items-center gap-1.5">
            <PlayCircle size={15} /> {MOCK_LESSONS.length} lecciones
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} /> 3 horas
          </span>
        </div>
      </div>

      {/* Lista de lecciones */}
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>
          Contenido del curso
        </h2>
        <div className="flex flex-col gap-2">
          {MOCK_LESSONS.map((lesson, i) => (
            <Link
              key={lesson.id}
              href={`/lecciones/${lesson.id}`}
              className="group flex items-center gap-4 rounded-xl border p-4 transition-all duration-150 hover:border-[var(--accent)]/40 hover:bg-white/[0.03]"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{ background: "rgba(108,99,255,0.15)", color: "var(--accent)" }}
              >
                {i + 1}
              </span>
              <span className="flex-1 text-sm font-medium" style={{ color: "var(--text)" }}>
                {lesson.title}
              </span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                {formatSeconds(lesson.duration_seconds)}
              </span>
              <PlayCircle
                size={16}
                className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: "var(--accent)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
