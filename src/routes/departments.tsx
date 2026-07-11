import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/hooks/use-reveal";
import { Search } from "lucide-react";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — ForLife Hospital" },
      {
        name: "description",
        content:
          "Explore ForLife Hospital's specialized departments in Addis Ababa: cardiology, neurology, oncology, orthopedics, pediatrics, and emergency medicine.",
      },
      { property: "og:title", content: "Departments — ForLife Hospital" },
      { property: "og:url", content: "/departments" },
    ],
    links: [{ rel: "canonical", href: "/departments" }],
  }),
  component: DepartmentsPage,
});

const departments = [
  { name: "Cardiology", body: "Advanced heart care, structural interventions, and cardiac rehabilitation programs.", n: "01", tag: "Adult" },
  { name: "Neurology & Neurosurgery", body: "Comprehensive stroke center, epilepsy program, and complex neurosurgical care.", n: "02", tag: "Adult" },
  { name: "Oncology", body: "Precision oncology with genomic profiling, immunotherapy, and integrated survivorship care.", n: "03", tag: "Adult" },
  { name: "Orthopedics", body: "Robotic-assisted joint replacement, spine surgery, and sports medicine.", n: "04", tag: "Adult" },
  { name: "Pediatrics", body: "Family-centered pediatric care with a dedicated children's wing.", n: "05", tag: "Pediatric" },
  { name: "Emergency Medicine", body: "24/7 Level 1 trauma center with rapid imaging and on-site specialists.", n: "06", tag: "Emergency" },
  { name: "Radiology & Imaging", body: "State-of-the-art MRI, CT, PET, and interventional radiology.", n: "07", tag: "Diagnostic" },
  { name: "Obstetrics & Gynecology", body: "Maternity care, high-risk pregnancy management, and women's health surgery.", n: "08", tag: "Adult" },
  { name: "Laboratory Medicine", body: "Comprehensive diagnostic testing with 4-hour turnaround for critical labs.", n: "09", tag: "Diagnostic" },
];

const tags = ["All", "Adult", "Pediatric", "Emergency", "Diagnostic"] as const;

function DepartmentsPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<(typeof tags)[number]>("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return departments.filter((d) => {
      const matchTag = tag === "All" || d.tag === tag;
      const matchQ = !query || d.name.toLowerCase().includes(query) || d.body.toLowerCase().includes(query);
      return matchTag && matchQ;
    });
  }, [q, tag]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
              Our Specialties
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              DEPARTMENTS
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
              Multidisciplinary teams across every specialty, coordinated around a single medical
              record and one patient — you.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Search + filters */}
            <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search departments…"
                  className="w-full bg-background border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTag(t)}
                    className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest border transition-all ${
                      tag === t
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="border border-border p-12 text-center text-muted-foreground">
                No departments match your search.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
                {filtered.map((d, i) => (
                  <Reveal
                    key={d.n}
                    delay={i * 40}
                    className="bg-background p-8 sm:p-10 hover:bg-primary transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <span className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground/60">
                        {d.n} —
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 border border-border group-hover:border-primary-foreground/30 group-hover:text-primary-foreground/80">
                        {d.tag}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary-foreground">
                      {d.name}
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                      {d.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            )}

            <div className="mt-12 sm:mt-16 flex justify-center">
              <Link
                to="/appointments"
                className="bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
