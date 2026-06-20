// ── Categorías disponibles ──────────────────────────────────────────────────
export type Category =
  | "data-engineering"
  | "cloud"
  | "machine-learning"
  | "sql"
  | "python"
  | "devops";

export type Level = "principiante" | "intermedio" | "avanzado";

// ── Curso ───────────────────────────────────────────────────────────────────
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;       // URL imagen (puede ser thumbnail de YouTube)
  category: Category;
  level: Level;
  lessons_count: number;
  duration_minutes: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

// ── Lección ─────────────────────────────────────────────────────────────────
export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  description: string;
  youtube_id: string;      // ID del video de YouTube (e.g. "dQw4w9WgXcQ")
  duration_seconds: number;
  order_index: number;
  is_published: boolean;
  created_at: string;
}

// ── Progreso de usuario ──────────────────────────────────────────────────────
export interface UserProgress {
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at: string | null;
}

// ── Perfil ───────────────────────────────────────────────────────────────────
export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
}
