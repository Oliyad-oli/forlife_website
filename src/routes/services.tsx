import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ForLife Hospital" },
      {
        name: "description",
        content:
          "Comprehensive medical services at ForLife Hospital: diagnostics, surgery, rehabilitation, health screenings, and international patient care.",
      },
      { property: "og:title", content: "Services — ForLife Hospital" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", name: "Advanced Diagnostics", body: "3T MRI, PET-CT, molecular imaging, and genetic testing." },
  { n: "02", name: "Robotic Surgery", body: "Da Vinci-assisted minimally invasive procedures." },
  { n: "03", name: "Rehabilitation", body: "Physical, occupational, speech, and cardiac rehab." },
  { n: "04", name: "Health Screening", body: "Executive and preventive health packages." },
  { n: "05", name: "Ambulance & Transport", body: "24/7 critical care and inter-facility transfer." },
  { n: "06", name: "International Patients", body: "Concierge services, visas, and translation." },
  { n: "07", name: "Pharmacy", body: "On-site outpatient and specialty pharmacy." },
  { n: "08", name: "Telemedicine", body: "Virtual consultations with our specialists." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
              What we do
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              SERVICES
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              End-to-end medical care — from your first screening through recovery and long-term
              follow-up.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {services.map((s) => (
                <div key={s.n} className="bg-background p-8 hover:bg-primary transition-all group">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground/60 mb-6 block">
                    {s.n} —
                  </span>
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-primary-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
