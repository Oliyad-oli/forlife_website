import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/hooks/use-reveal";
import { Search } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors — ForLife Hospital" },
      {
        name: "description",
        content:
          "Meet the specialists of ForLife Hospital in Addis Ababa — physicians trained at Ethiopia's top institutions and leading centers abroad.",
      },
      { property: "og:title", content: "Doctors — ForLife Hospital" },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

const doctors = [
  { img: doctor1, name: "Dr. Dawit Bekele", role: "Chief Surgeon", spec: "Cardiothoracic", dept: "Cardiology", exp: "22 yrs" },
  { img: doctor2, name: "Dr. Marcus Thorne", role: "Head of Neuro", spec: "Neurology", dept: "Neurology", exp: "18 yrs" },
  { img: doctor3, name: "Dr. Sarah Alemu", role: "Consultant", spec: "Interventional Cardiology", dept: "Cardiology", exp: "14 yrs" },
  { img: doctor1, name: "Dr. Yonas Tesfaye", role: "Director", spec: "Emergency Medicine", dept: "Emergency", exp: "20 yrs" },
  { img: doctor2, name: "Dr. Rafael Ortiz", role: "Consultant", spec: "Orthopedic Surgery", dept: "Orthopedics", exp: "16 yrs" },
  { img: doctor3, name: "Dr. Hanna Girma", role: "Head of Oncology", spec: "Medical Oncology", dept: "Oncology", exp: "19 yrs" },
];

const depts = ["All", "Cardiology", "Neurology", "Emergency", "Orthopedics", "Oncology"] as const;

function DoctorsPage() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState<(typeof depts)[number]>("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return doctors.filter((d) => {
      const okDept = dept === "All" || d.dept === dept;
      const okQ = !query || d.name.toLowerCase().includes(query) || d.spec.toLowerCase().includes(query);
      return okDept && okQ;
    });
  }, [q, dept]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
              Medical Staff
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              OUR SPECIALISTS
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
              Every physician at ForLife is board-certified, actively researching, and personally
              accountable for your care plan.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by name or specialty…"
                  className="w-full bg-background border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {depts.map((t) => (
                  <button
                    key={t}
                    onClick={() => setDept(t)}
                    className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest border transition-all ${
                      dept === t ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="border border-border p-12 text-center text-muted-foreground">
                No specialists match your search.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                {filtered.map((d, i) => (
                  <Reveal key={d.name + i} delay={i * 60}>
                    <article className="group">
                      <div className="overflow-hidden mb-6">
                        <img
                          src={d.img}
                          alt={d.name}
                          loading="lazy"
                          width={512}
                          height={640}
                          className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                      <span className="font-mono text-[10px] uppercase text-primary">{d.role}</span>
                      <h3 className="text-xl font-bold tracking-tight mt-1">{d.name}</h3>
                      <p className="text-sm text-muted-foreground">{d.spec}</p>
                      <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {d.exp} experience · {d.dept}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
