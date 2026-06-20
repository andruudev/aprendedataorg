import CourseCard from "@/components/platform/CourseCard";
import type { Course } from "@/types";

// Datos mock mientras conectamos Supabase
const MOCK_COURSES: Course[] = [
  {
    id: "1",
    slug: "fundamentos-data-engineering",
    title: "Fundamentos de Data Engineering",
    description:
      "Aprende los conceptos base de los pipelines de datos, ETL/ELT, y cómo diseñar arquitecturas de datos modernas.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "data-engineering",
    level: "principiante",
    lessons_count: 12,
    duration_minutes: 180,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    slug: "aws-para-data-engineers",
    title: "AWS para Data Engineers",
    description:
      "Domina los servicios de AWS más usados en proyectos de datos: S3, Glue, Redshift, Lambda y más.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "cloud",
    level: "intermedio",
    lessons_count: 20,
    duration_minutes: 360,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    slug: "sql-avanzado",
    title: "SQL Avanzado para Analistas",
    description:
      "Window functions, CTEs, optimización de queries y patrones avanzados de SQL para análisis de datos.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    category: "sql",
    level: "intermedio",
    lessons_count: 8,
    duration_minutes: 120,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const metadata = {
  title: "Cursos — AprendeData",
  description: "Explora todos los cursos de Data Engineering y Cloud.",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1
          className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          style={{ color: "var(--text)" }}
        >
          Cursos
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
          Todo el contenido es gratuito. Aprende a tu ritmo.
        </p>
      </div>

      {/* Filtros (próximamente) */}
      <div className="flex flex-wrap gap-2">
        {["Todos", "Data Engineering", "Cloud", "SQL", "Python", "ML"].map((f) => (
          <button
            key={f}
            className="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors first:border-[var(--accent)] first:text-white"
            style={{
              background: f === "Todos" ? "var(--accent)" : "var(--surface)",
              borderColor: f === "Todos" ? "var(--accent)" : "var(--border)",
              color: f === "Todos" ? "#fff" : "var(--muted)",
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid de cursos */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
