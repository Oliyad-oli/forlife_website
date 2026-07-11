import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal, CountUp } from "@/hooks/use-reveal";
import { HOSPITAL } from "@/lib/contact-info";
import heroFacility from "@/assets/hero-facility.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import { ArrowRight, HeartPulse, Brain, Activity, Baby, Bone, Siren } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const departments = [
  { n: "01", name: "Cardiology", Icon: HeartPulse, body: "Non-invasive cardiac procedures, valve repair, and structural heart disease." },
  { n: "02", name: "Neurology", Icon: Brain, body: "Advanced neuroimaging and a comprehensive stroke center, 24/7." },
  { n: "03", name: "Oncology", Icon: Activity, body: "Personalized genomic therapy across every stage of cancer care." },
  { n: "04", name: "Orthopedics", Icon: Bone, body: "Robotic-assisted joint replacement and sports medicine rehabilitation." },
  { n: "05", name: "Pediatrics", Icon: Baby, body: "A dedicated children's wing with family-centered care." },
  { n: "06", name: "Emergency", Icon: Siren, body: "Level 1 trauma center with 4-minute average triage response." },
];

const doctors = [
  { img: doctor1, role: "Chief Surgeon", name: "Dr. Dawit Bekele", spec: "Cardiothoracic" },
  { img: doctor2, role: "Head of Neuro", name: "Dr. Marcus Thorne", spec: "Neurology" },
  { img: doctor3, role: "Cardiology", name: "Dr. Sarah Alemu", spec: "Interventional" },
];

const testimonials = [
  { quote: "From the first consultation to the final follow-up, the ForLife team treated me with a level of precision and empathy I've never experienced before.", author: "Meseret K.", context: "Cardiology patient" },
  { quote: "Their stroke unit responded within minutes. I owe my recovery — and my mobility — to the neurology team here.", author: "Daniel R.", context: "Neurology patient" },
  { quote: "The oncology program is world-class. My care plan was tailored down to my genetic profile.", author: "Hanna S.", context: "Oncology patient" },
];

const partners = ["WHO", "JCI", "Ethiopian Ministry of Health", "Addis Ababa University", "AMREF", "PATH"];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-10 lg:pt-24 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 size-[500px] rounded-full bg-primary/10 blur-3xl animate-float-soft pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-reveal-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
                <div className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-mono uppercase font-bold text-primary tracking-wide">
                  Now serving all of Addis Ababa
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-balance leading-[0.9]">
                PRECISION <br />
                IN PRACTICE.
              </h1>
              <p className="max-w-md text-base sm:text-lg text-muted-foreground text-pretty">
                ForLife Hospital combines clinical excellence with Ethiopia's most advanced
                facilities — delivering a standard of care that exceeds expectations, every
                patient, every visit.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/appointments"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 hover:-translate-y-0.5 transition-all active:scale-95 shadow-lg shadow-primary/20"
                >
                  Book Appointment
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/departments"
                  className="border border-border px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                >
                  Explore Departments
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 animate-scale-reveal [animation-delay:200ms]">
              <div className="relative">
                <img
                  src={heroFacility}
                  alt="ForLife Hospital surgical facility in Addis Ababa"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover ring-1 ring-black/5"
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background border border-border p-4 sm:p-6 shadow-xl max-w-[220px] animate-reveal-up [animation-delay:600ms]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                    Accredited
                  </span>
                  <p className="text-xs sm:text-sm font-bold mt-1">JCI · ISO 9001 · WHO Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee partners */}
      <section className="border-y border-border py-6 bg-card overflow-hidden">
        <div className="flex marquee gap-16 whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <span key={i} className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground shrink-0">
              ● {p}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border py-10 sm:py-12 bg-card">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { v: 99, s: "%", l: "Success Rate" },
            { v: 420, s: "+", l: "Specialists" },
            { v: 24, s: "/7", l: "Trauma Care" },
            { v: 150, s: "K+", l: "Patients Served" },
          ].map((it) => (
            <Reveal key={it.l} className="space-y-1">
              <CountUp
                value={it.v}
                suffix={it.s}
                className="block text-3xl sm:text-4xl font-extrabold tracking-tighter"
              />
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {it.l}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end mb-12 sm:mb-16 gap-6">
            <div className="max-w-xl min-w-0">
              <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
                Specialized Units
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
                WORLD-CLASS DEPARTMENTS
              </h2>
            </div>
            <Link
              to="/departments"
              className="text-xs font-bold uppercase border-b-2 border-primary pb-1 hover:text-primary transition-colors shrink-0"
            >
              View All
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
            {departments.map((d, i) => (
              <Reveal
                key={d.n}
                delay={i * 60}
                className="bg-background p-8 sm:p-10 hover:bg-primary transition-all group/card cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="font-mono text-xs text-muted-foreground group-hover/card:text-primary-foreground/60">
                    {d.n} —
                  </span>
                  <d.Icon className="size-6 text-primary group-hover/card:text-primary-foreground transition-transform group-hover/card:scale-110" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover/card:text-primary-foreground">
                  {d.name}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground group-hover/card:text-primary-foreground/80">
                  {d.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-card py-20 sm:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-12">
            <Reveal className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tighter">ELITE MEDICAL STAFF</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our physicians are recruited from Ethiopia's top institutions and leading centers
                abroad, bringing global expertise directly to your bedside.
              </p>
              <Link
                to="/doctors"
                className="inline-block border border-border px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
              >
                Find a Specialist
              </Link>
            </Reveal>
            <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {doctors.map((d, i) => (
                <Reveal key={d.name} delay={i * 100} className="group">
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
                  <h4 className="text-lg font-bold tracking-tight">{d.name}</h4>
                  <p className="text-xs text-muted-foreground">{d.spec}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
              Patient Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter mb-12 sm:mb-16">
              TRUSTED BY THOUSANDS
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <figure className="bg-background p-8 sm:p-10 h-full">
                  <blockquote className="text-base leading-relaxed text-foreground">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm font-bold">{t.author}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                      {t.context}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency band */}
      <section className="bg-foreground text-background py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:flex-wrap items-center justify-between gap-6 sm:gap-8">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <div className="shrink-0 size-12 sm:size-16 rounded-full border border-background/20 grid place-items-center animate-pulse">
              <div className="size-3 sm:size-4 bg-emergency rounded-full" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-background/60">
                Emergency Care Center
              </p>
              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight truncate">
                Level 1 Trauma Available
              </h2>
            </div>
          </div>
          <div className="text-right shrink-0">
            <a href={HOSPITAL.phoneEmergencyHref} className="font-mono text-lg sm:text-2xl block hover:text-primary transition-colors">
              {HOSPITAL.phoneEmergency}
            </a>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-background/40">
              Direct line · Addis Ababa
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
