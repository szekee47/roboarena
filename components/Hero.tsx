import { hero } from "@/lib/event-config";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-electric/10 via-transparent to-transparent" />

      <div className="section-shell relative flex flex-col items-center pb-16 pt-20 text-center sm:pt-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Supported by
        </p>
        <div className="mb-6 flex items-center justify-center gap-6">
          <img src="/kbs-logo.png" alt="Kementerian Belia & Sukan (Ministry of Youth and Sports)" className="h-28 w-auto sm:h-36" />
          <img src="/rakan-muda-logo.png" alt="Rakan Muda" className="h-28 w-auto sm:h-36" />
        </div>

        <p className="section-kicker">{hero.eyebrow}</p>

        <h1 className="max-w-3xl text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-6xl">
          {hero.headline}
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">{hero.subheading}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {hero.pills.map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-navy-800/60 px-4 py-2 text-sm"
            >
              <span className="font-heading font-semibold uppercase tracking-wider text-electric">
                {pill.label}
              </span>
              <span className="text-slate-300">{pill.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href={hero.ctaPrimary.href} className="btn-primary">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="btn-secondary">
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className="mt-16 w-full">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Countdown to Day 1
          </p>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
