import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/hooks/use-reveal";
import { HOSPITAL } from "@/lib/contact-info";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ForLife Hospital" },
      {
        name: "description",
        content:
          "Contact ForLife Hospital in Addis Ababa. 24/7 emergency line, general inquiries, and international patient services.",
      },
      { property: "og:title", content: "Contact — ForLife Hospital" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      h: "Emergency",
      Icon: Phone,
      lines: [HOSPITAL.phoneEmergency, "24/7 · Level 1 Trauma"],
      href: HOSPITAL.phoneEmergencyHref,
      mono: true,
      accent: true,
    },
    {
      h: "General inquiries",
      Icon: Mail,
      lines: [HOSPITAL.phoneMain, HOSPITAL.email],
      href: `mailto:${HOSPITAL.email}`,
    },
    {
      h: "International patients",
      Icon: MapPin,
      lines: [HOSPITAL.phoneInternational, HOSPITAL.emailInternational],
      href: `mailto:${HOSPITAL.emailInternational}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
              Get in touch
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              CONTACT US
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
              Speak to a care coordinator, request records, or reach our international patient
              services team in Addis Ababa.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
            {cards.map((c, i) => (
              <Reveal key={c.h} delay={i * 80}>
                <a
                  href={c.href}
                  className={`block h-full p-8 sm:p-10 transition-all ${
                    c.accent ? "bg-background hover:bg-emergency hover:text-emergency-foreground" : "bg-background hover:bg-primary hover:text-primary-foreground"
                  } group`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold group-hover:text-current">
                      {c.h}
                    </span>
                    <c.Icon className="size-5 opacity-60 group-hover:opacity-100 transition" />
                  </div>
                  <div className={`mt-6 space-y-2 ${c.mono ? "font-mono" : ""}`}>
                    {c.lines.map((l) => (
                      <p key={l} className="text-base sm:text-lg font-medium break-words">
                        {l}
                      </p>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter mb-6">
                MAIN CAMPUS
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>ForLife Hospital</p>
                <p>{HOSPITAL.addressLine1}</p>
                <p>{HOSPITAL.addressLine2}</p>
              </div>
              <div className="mt-8 space-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <p className="flex items-center gap-2"><Clock className="size-3.5" /> Visiting hours · 8am — 8pm daily</p>
                <p className="flex items-center gap-2"><Clock className="size-3.5" /> Outpatient clinics · Mon — Sat</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="aspect-[4/3] border border-border overflow-hidden">
                <iframe
                  title="ForLife Hospital location — Addis Ababa"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=38.75%2C8.98%2C38.80%2C9.02&amp;layer=mapnik&amp;marker=9.0054%2C38.7636"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
