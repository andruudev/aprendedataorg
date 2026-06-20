import Countdown from "@/components/coming-soon/Countdown";
import EmailForm from "@/components/coming-soon/EmailForm";
import Socials from "@/components/coming-soon/Socials";

export default function ComingSoonPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-between"
      style={{
        minHeight: "100dvh",
        padding: "clamp(1rem, 4vh, 2rem) clamp(1rem, 5vw, 2rem)",
        overflow: "hidden",
      }}
    >
      {/* Gradiente de fondo */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 15%, rgba(108, 99, 255, 0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 85%, rgba(255, 101, 132, 0.14) 0%, transparent 60%)
          `,
        }}
      />

      {/* Contenido principal */}
      <main
        className="relative z-10 flex w-full flex-col items-center justify-center gap-[clamp(0.6rem,2.5vh,1.4rem)]"
        style={{ maxWidth: 640, flex: 1 }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-[0.45rem] rounded-full border px-[0.9rem] py-[0.35rem]"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            fontSize: "clamp(0.65rem, 1.8vw, 0.78rem)",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span
            className="h-[6px] w-[6px] shrink-0 animate-pulse rounded-full"
            style={{ background: "var(--accent)" }}
          />
          Próximamente
        </div>

        {/* Título */}
        <h1
          className="text-center font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2rem, 9vw, 4.2rem)" }}
        >
          Aprende
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
        </h1>

        {/* Subtítulo */}
        <p
          className="max-w-[480px] text-center leading-relaxed"
          style={{
            fontSize: "clamp(0.82rem, 2.2vw, 1.05rem)",
            color: "var(--muted)",
          }}
        >
          Estamos construyendo algo increíble. Una plataforma para aprender{" "}
          <strong className="text-white/80">Data Engineering</strong>,{" "}
          <strong className="text-white/80">Cloud</strong> e{" "}
          <strong className="text-white/80">Inteligencia Artificial</strong>.
          100% gratuito.
        </p>

        {/* Countdown */}
        <Countdown />

        {/* Formulario de email */}
        <EmailForm />

        {/* Redes sociales */}
        <Socials />
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 text-center"
        style={{
          color: "var(--muted)",
          fontSize: "clamp(0.68rem, 1.6vw, 0.78rem)",
          paddingBottom: "env(safe-area-inset-bottom, 0)",
        }}
      >
        © 2026 AprendeData · Todos los derechos reservados
      </footer>
    </div>
  );
}
