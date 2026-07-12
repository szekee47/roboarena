import { eventDetails } from "@/lib/event-config";

export default function EventDetails() {
  return (
    <section id="event" className="section-shell">
      <p className="section-kicker">Event Details</p>
      <h2 className="section-title mb-12">What You Need to Know</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {eventDetails.map((item) => (
          <div key={item.number} className="card-panel">
            <span className="font-heading text-3xl font-bold text-electric/40">{item.number}</span>
            <h3 className="mt-3 text-lg font-semibold uppercase tracking-wide text-white">{item.title}</h3>
            <div className="mt-2 space-y-1">
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-slate-300">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
