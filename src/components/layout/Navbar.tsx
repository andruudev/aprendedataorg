import Link from "next/link";
import { BookOpen, Home, User } from "lucide-react";

const navLinks = [
  { href: "/cursos", label: "Cursos", icon: BookOpen },
  { href: "/perfil", label: "Mi perfil", icon: User },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        background: "rgba(10, 14, 26, 0.85)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
          <span style={{ color: "var(--text)" }}>Aprende</span>
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Data
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/5"
              style={{ color: "var(--muted)" }}
            >
              <Icon size={15} />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
