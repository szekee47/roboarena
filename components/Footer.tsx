import { contact, footerQuickLinks } from "@/lib/event-config";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-navy-900/60">
      <div className="section-shell py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
              ROBO<span className="text-electric"> ARENA</span> 2026
            </h3>
            <p className="mt-3 max-w-xs text-sm text-slate-400">{contact.organiserBlurb}</p>
            <p className="mt-2 text-sm text-slate-500">{contact.registrationInfo}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-electric">Contact</h4>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 block text-sm text-slate-300 hover:text-electric"
            >
              {contact.email}
            </a>
            <ul className="mt-2 space-y-1">
              {contact.phones.map((phone) => (
                <li key={phone.number}>
                  <a
                    href={`tel:${phone.number.replace(/\s|-/g, "")}`}
                    className="text-sm text-slate-300 hover:text-electric"
                  >
                    {phone.number}
                  </a>
                  <span className="text-sm text-slate-500"> ({phone.name})</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-electric">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-300 hover:text-electric">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          {contact.copyright}
        </div>
      </div>
    </footer>
  );
}
