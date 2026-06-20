"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

// Fecha objetivo: 3 meses desde la fecha del build
const TARGET = new Date();
TARGET.setMonth(TARGET.getMonth() + 3);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculate() {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      });
    }

    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <div
      className="flex w-full justify-center"
      style={{ gap: "clamp(0.5rem, 2.5vw, 1.2rem)" }}
    >
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-1 flex-col items-center justify-center border text-center"
          style={{
            maxWidth: 90,
            background: "var(--surface)",
            borderColor: "var(--border)",
            borderRadius: "clamp(10px, 2vw, 14px)",
            padding: "clamp(0.6rem, 2vh, 1.1rem) 0.5rem",
          }}
        >
          <span
            className="font-bold leading-none tabular-nums"
            style={{ fontSize: "clamp(1.5rem, 5.5vw, 2.6rem)" }}
          >
            {pad(value)}
          </span>
          <span
            className="mt-[0.3rem] uppercase tracking-widest"
            style={{
              fontSize: "clamp(0.58rem, 1.5vw, 0.68rem)",
              color: "var(--muted)",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
