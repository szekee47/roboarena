import { scheduleNote, scheduleRows } from "@/lib/event-config";

export default function Schedule() {
  return (
    <section id="schedule" className="section-shell border-t border-white/10">
      <p className="section-kicker">Schedule</p>
      <h2 className="section-title">Daily Timetable</h2>
      <p className="mt-3 text-sm text-slate-400">{scheduleNote}</p>

      <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-navy-800/60">
              <th className="px-6 py-4 font-heading text-xs font-semibold uppercase tracking-widest text-electric">
                Time
              </th>
              <th className="px-6 py-4 font-heading text-xs font-semibold uppercase tracking-widest text-electric">
                Activity
              </th>
            </tr>
          </thead>
          <tbody>
            {scheduleRows.map((row, i) => (
              <tr
                key={row.time}
                className={i % 2 === 0 ? "bg-navy-900/40" : "bg-transparent"}
              >
                <td className="border-t border-white/5 px-6 py-4 font-medium text-white">{row.time}</td>
                <td className="border-t border-white/5 px-6 py-4 text-slate-300">{row.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
