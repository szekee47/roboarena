import { prizePoolNote, prizes } from "@/lib/event-config";

export default function Prizes() {
  return (
    <section id="prizes" className="section-shell border-t border-white/10">
      <p className="section-kicker">Prizes</p>
      <h2 className="section-title mb-12">What&apos;s at Stake</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {prizes.map((prize) => (
          <div
            key={prize.badge}
            className={
              prize.highlight
                ? "card-panel border-amber/50 bg-gradient-to-b from-amber/10 to-navy-800/60 shadow-glow-amber"
                : "card-panel"
            }
          >
            <span
              className={
                prize.highlight
                  ? "inline-flex items-center rounded-full border border-amber px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest text-amber"
                  : "inline-flex items-center rounded-full border border-white/20 px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest text-slate-300"
              }
            >
              {prize.badge}
            </span>
            <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide text-white">{prize.title}</h3>
            <p
              className={
                prize.highlight
                  ? "mt-2 font-heading text-3xl font-extrabold text-amber"
                  : "mt-2 font-heading text-2xl font-bold text-electric"
              }
            >
              {prize.amount}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm font-medium uppercase tracking-wider text-slate-400">
        {prizePoolNote}
      </p>
    </section>
  );
}
