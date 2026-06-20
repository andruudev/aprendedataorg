import Navbar from "@/components/layout/Navbar";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      {/* Gradiente sutil de fondo */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 0% 0%, rgba(108, 99, 255, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 100% 100%, rgba(255, 101, 132, 0.06) 0%, transparent 60%)
          `,
        }}
      />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {children}
      </main>
    </div>
  );
}
