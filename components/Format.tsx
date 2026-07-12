import { dailyFlow, games, goodieBagNote } from "@/lib/event-config";

export default function Format() {
  return (
    <section id="format" className="section-shell border-t border-white/10">
      <p className="section-kicker">Format</p>
      <h2 className="section-title mb-12">The Games</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {games.map((game) => (
          <div key={game.name} className="card-panel">
            <h3 className="text-xl font-bold uppercase tracking-wide text-electric">{game.name}</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-400">{game.day}</p>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-slate-400">Entry Type</dt>
                <dd className="text-right text-slate-200">{game.entryType}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-slate-400">Structure</dt>
                <dd className="text-right text-slate-200">{game.structure}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Category</dt>
                <dd className="text-right text-slate-200">{game.category}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-8 text-center font-heading text-lg font-semibold uppercase tracking-widest text-white">
          Daily Flow
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {dailyFlow.map((item) => (
            <div key={item.step} className="card-panel flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-electric font-heading text-sm font-bold text-electric">
                  {item.step}
                </span>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-white">{item.title}</h4>
                  <p className="text-xs text-electric">{item.time}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium uppercase tracking-wider text-amber">
          {goodieBagNote}
        </p>
      </div>
    </section>
  );
}
