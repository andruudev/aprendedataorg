import Link from "next/link";
import Image from "next/image";
import { Clock, PlayCircle } from "lucide-react";
import type { Course } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  "data-engineering": "rgba(108, 99, 255, 0.2)",
  cloud: "rgba(56, 189, 248, 0.2)",
  "machine-learning": "rgba(255, 101, 132, 0.2)",
  sql: "rgba(52, 211, 153, 0.2)",
  python: "rgba(251, 191, 36, 0.2)",
  devops: "rgba(249, 115, 22, 0.2)",
};

const CATEGORY_TEXT: Record<string, string> = {
  "data-engineering": "#a5b4fc",
  cloud: "#7dd3fc",
  "machine-learning": "#fca5a5",
  sql: "#6ee7b7",
  python: "#fde68a",
  devops: "#fdba74",
};

const LEVEL_LABEL: Record<string, string> = {
  principiante: "Principiante",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}min`;
  return m === 0 ? `${h}h` : `${h}h ${m}min`;
}

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Link
      href={`/cursos/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-white/5">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="rounded-full bg-black/50 p-3 backdrop-blur-sm">
            <PlayCircle size={28} className="text-white" />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{
              background: CATEGORY_COLORS[course.category] ?? "rgba(255,255,255,0.1)",
              color: CATEGORY_TEXT[course.category] ?? "var(--muted)",
            }}
          >
            {course.category.replace(/-/g, " ")}
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "var(--muted)",
            }}
          >
            {LEVEL_LABEL[course.level]}
          </span>
        </div>

        {/* Título */}
        <h3
          className="line-clamp-2 text-sm font-semibold leading-snug"
          style={{ color: "var(--text)" }}
        >
          {course.title}
        </h3>

        {/* Descripción */}
        <p
          className="line-clamp-2 text-xs leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {course.description}
        </p>

        {/* Meta */}
        <div
          className="mt-auto flex items-center gap-3 text-xs"
          style={{ color: "var(--muted)" }}
        >
          <span className="flex items-center gap-1">
            <PlayCircle size={13} />
            {course.lessons_count} lecciones
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {formatDuration(course.duration_minutes)}
          </span>
        </div>
      </div>
    </Link>
  );
}
