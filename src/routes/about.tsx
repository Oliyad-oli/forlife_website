import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ForLife Hospital" },
      {
        name: "description",
        content:
          "About ForLife Hospital — our mission, values, and commitment to precision medicine and compassionate care.",
      },
      { property: "og:title", content: "About — ForLife Hospital" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
              Who we are
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              ABOUT FORLIFE
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              For more than three decades, ForLife Hospital has delivered specialty medicine
              anchored in rigorous research, world-class infrastructure, and a single patient
              promise: precision, always.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { h: "Mission", b: "Deliver clinically excellent, human-centered care to every patient — regardless of complexity." },
              { h: "Vision", b: "Set the global standard for the intersection of precision medicine and compassion." },
              { h: "Values", b: "Integrity. Rigor. Empathy. Accountability. Continuous improvement." },
            ].map((c) => (
              <div key={c.h} className="bg-background p-10">
                <span className="font-mono text-xs text-primary uppercase tracking-widest">
                  {c.h}
                </span>
                <p className="mt-6 text-lg font-medium leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tighter mb-6">
                A HOSPITAL BUILT AROUND YOU
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ForLife was founded in 1992 by a coalition of physician-researchers who believed
                the hospital of the future should be organized around the patient, not the
                specialty. Every department, every workflow, and every square foot of our
                facility is designed to make your journey through care simpler, safer, and
                more human.
              </p>
            </div>
            <div className="space-y-8">
              {[
                ["1992", "Founded as a specialty research institute"],
                ["2008", "Accredited as a Level 1 Trauma Center"],
                ["2019", "Launched precision oncology & genomics program"],
                ["2024", "Recognized as #1 regional hospital"],
              ].map(([y, e]) => (
                <div key={y} className="flex gap-6 border-b border-border pb-6">
                  <span className="font-mono text-primary font-bold w-16 shrink-0">{y}</span>
                  <span className="text-foreground">{e}</span>
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
