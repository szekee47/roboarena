import { rules } from "@/lib/event-config";

export default function Rules() {
  return (
    <section id="rules" className="section-shell border-t border-white/10">
      <p className="section-kicker">Rules & Regulations</p>
      <h2 className="section-title mb-12">Know Before You Compete</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {rules.map((rule) => (
          <div key={rule.game} className="card-panel">
            <h3 className="text-xl font-bold uppercase tracking-wide text-electric">{rule.game}</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-400">{rule.botName}</p>

            <ol className="mt-5 space-y-3">
              {rule.items.map((item, index) => (
                <li key={index} className="flex gap-3 border-b border-white/10 pb-3 text-sm text-slate-300 last:border-b-0 last:pb-0">
                  <span className="shrink-0 font-heading text-xs font-bold text-electric/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
