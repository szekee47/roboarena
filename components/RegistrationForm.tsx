"use client";

import { FormEvent, useState } from "react";
import { registrationEventOptions, registrationNote } from "@/lib/event-config";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-white/15 bg-navy-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-electric";

const labelClasses = "mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300";

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Registration failed. Please try again.");
      }

      setStatus("success");
      form.reset();
      setSelectedEvent("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Registration failed. Please try again.");
    }
  }

  return (
    <section id="register" className="section-shell border-t border-white/10">
      <p className="section-kicker">Registration</p>
      <h2 className="section-title mb-10">Secure Your Spot</h2>

      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit} className="card-panel space-y-6 hover:translate-y-0 hover:shadow-none">
          <div>
            <label htmlFor="participantName" className={labelClasses}>
              Participant Full Name *
            </label>
            <input
              id="participantName"
              name="participantName"
              type="text"
              required
              className={inputClasses}
              placeholder="e.g. Aiman bin Hassan"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="age" className={labelClasses}>
                Age (5-12) *
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min={5}
                max={12}
                required
                className={inputClasses}
                placeholder="e.g. 10"
              />
            </div>

            <div>
              <label htmlFor="schoolName" className={labelClasses}>
                School Name *
              </label>
              <input
                id="schoolName"
                name="schoolName"
                type="text"
                required
                className={inputClasses}
                placeholder="e.g. SJK Putra Jaya"
              />
            </div>
          </div>

          <div>
            <label htmlFor="event" className={labelClasses}>
              Event *
            </label>
            <select
              id="event"
              name="event"
              required
              className={inputClasses}
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
            >
              <option value="" disabled>
                Select an event
              </option>
              {registrationEventOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {selectedEvent === "soccer" && (
            <div>
              <label htmlFor="teamPartnerName" className={labelClasses}>
                Team Partner Name (Soccer only, optional)
              </label>
              <input
                id="teamPartnerName"
                name="teamPartnerName"
                type="text"
                className={inputClasses}
                placeholder="e.g. Danish bin Zulkifli"
              />
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="guardianName" className={labelClasses}>
                Parent/Guardian Name *
              </label>
              <input
                id="guardianName"
                name="guardianName"
                type="text"
                required
                className={inputClasses}
                placeholder="e.g. Hassan bin Ibrahim"
              />
            </div>

            <div>
              <label htmlFor="contactNumber" className={labelClasses}>
                Contact Number *
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                required
                className={inputClasses}
                placeholder="e.g. 012-3456789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClasses}
              placeholder="e.g. parent@example.com"
            />
          </div>

          <div>
            <label htmlFor="notes" className={labelClasses}>
              Notes/Questions (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className={inputClasses}
              placeholder="Anything else we should know?"
            />
          </div>

          <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
            {status === "submitting" ? "Submitting..." : "Submit Registration"}
          </button>

          {status === "success" && (
            <div className="rounded-md border border-electric/40 bg-electric/10 px-4 py-3 text-sm text-electric">
              Registration submitted successfully. We&apos;ll be in touch soon.
            </div>
          )}

          {status === "error" && (
            <div className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {errorMessage}
            </div>
          )}

          <p className="text-xs text-slate-400">{registrationNote}</p>
        </form>
      </div>
    </section>
  );
}
