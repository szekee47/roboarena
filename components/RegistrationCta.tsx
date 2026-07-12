import { registrationCta, registrationNote } from "@/lib/event-config";

export default function RegistrationCta() {
  return (
    <section id="register" className="section-shell border-t border-white/10">
      <p className="section-kicker">Registration</p>
      <h2 className="section-title mb-10">Secure Your Spot</h2>

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="card-panel w-full hover:translate-y-0 hover:shadow-none">
          <p className="text-slate-300">
            Registration is handled through our sign-up form. Click below to fill it out — it only takes a
            couple of minutes.
          </p>

          <a
            href={registrationCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 w-full sm:w-auto sm:px-10"
          >
            {registrationCta.label}
          </a>

          <p className="mt-6 text-xs text-slate-400">{registrationNote}</p>
        </div>
      </div>
    </section>
  );
}
