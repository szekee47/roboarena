"use client";

import { useEffect, useState } from "react";
import { countdownTargetISO } from "@/lib/event-config";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft(): TimeLeft {
  const diff = new Date(countdownTargetISO).getTime() - Date.now();
  if (diff <= 0) return ZERO;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  // Start null so the server-rendered markup and first client render match;
  // real values are filled in after mount to avoid a hydration mismatch.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const display = timeLeft ?? ZERO;
  const isLive = timeLeft !== null && Object.values(timeLeft).every((v) => v === 0);

  return (
    <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-3 sm:gap-4">
      {isLive ? (
        <p className="font-heading text-lg font-semibold uppercase tracking-widest text-electric">
          Event is live
        </p>
      ) : (
        UNITS.map((unit) => (
          <div
            key={unit.key}
            className="flex w-[70px] flex-col items-center rounded-lg border border-white/10 bg-navy-800/70 py-3 sm:w-20"
          >
            <span className="font-heading text-2xl font-bold text-electric sm:text-3xl tabular-nums">
              {String(display[unit.key]).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-400 sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
