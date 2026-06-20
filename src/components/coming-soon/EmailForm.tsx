"use client";

import { useState } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwNZVnu2BpTmBl3i-WJLnCqKek-uUDKImyGkTageESZztNRwBiq2yL0xlUJ2pqiOborTg/exec";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState(false);

  async function subscribe() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      setTimeout(() => setError(false), 1500);
      return;
    }

    setStatus("loading");

    try {
      await fetch(`${SHEET_URL}?email=${encodeURIComponent(email)}`, {
        method: "GET",
        mode: "no-cors",
      });
      setEmail("");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  const inputStyle = {
    flex: 1,
    background: "var(--surface)",
    border: `1px solid ${error ? "var(--accent-2)" : "var(--border)"}`,
    borderRadius: 10,
    padding: "clamp(0.65rem, 1.8vh, 0.85rem) 1rem",
    color: "var(--text)",
    fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
    outline: "none",
    minWidth: 0,
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  return (
    <div className="flex w-full flex-col items-center gap-2" style={{ maxWidth: 460 }}>
      <div className="flex w-full gap-[0.6rem]">
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && subscribe()}
          style={inputStyle}
          aria-label="Correo electrónico"
        />
        <button
          onClick={subscribe}
          disabled={status === "loading"}
          className="shrink-0 font-semibold transition-all hover:opacity-[0.88] hover:-translate-y-px active:translate-y-0 disabled:opacity-60"
          style={{
            background: "linear-gradient(135deg, var(--accent), #8b5cf6)",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "clamp(0.65rem, 1.8vh, 0.85rem) clamp(1rem, 3vw, 1.4rem)",
            fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "..." : "Notifícame"}
        </button>
      </div>

      {status === "success" && (
        <p
          className="text-center"
          style={{ color: "#6ee7b7", fontSize: "clamp(0.78rem, 1.8vw, 0.88rem)" }}
        >
          ¡Listo! Te avisaremos cuando lancemos 🚀
        </p>
      )}
      {status === "error" && (
        <p
          className="text-center"
          style={{ color: "var(--accent-2)", fontSize: "clamp(0.78rem, 1.8vw, 0.88rem)" }}
        >
          Algo salió mal, intenta de nuevo.
        </p>
      )}
    </div>
  );
}
