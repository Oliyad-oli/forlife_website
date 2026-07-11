import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { HOSPITAL } from "@/lib/contact-info";

export const Route = createFileRoute("/appointments")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — ForLife Hospital" },
      {
        name: "description",
        content:
          "Schedule a consultation with a ForLife Hospital specialist. Same-day appointments available for urgent care.",
      },
      { property: "og:title", content: "Book an Appointment — ForLife Hospital" },
      { property: "og:url", content: "/appointments" },
    ],
    links: [{ rel: "canonical", href: "/appointments" }],
  }),
  component: AppointmentsPage,
});

const depts = [
  "Cardiology",
  "Neurology",
  "Oncology",
  "Orthopedics",
  "Pediatrics",
  "Emergency Medicine",
  "General Consultation",
];

function AppointmentsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-primary font-bold mb-4 block">
              Patient Booking
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-6">
              BOOK AN APPOINTMENT
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Choose your department and preferred time. Our care coordinators will confirm
              within 4 business hours.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {submitted ? (
              <div className="border border-border bg-card p-12 text-center">
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">
                  Request received
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight mt-4 mb-4">
                  Thank you — we'll be in touch shortly.
                </h2>
                <p className="text-muted-foreground">
                  A ForLife care coordinator will confirm your appointment within 4 business
                  hours. For emergencies in Addis Ababa, call{" "}
                  <a href={HOSPITAL.phoneEmergencyHref} className="text-primary font-bold">
                    {HOSPITAL.phoneEmergency}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-6 border border-border bg-card p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Full name" required>
                    <input required type="text" className={inputCls} />
                  </Field>
                  <Field label="Phone" required>
                    <input required type="tel" className={inputCls} />
                  </Field>
                  <Field label="Email" required>
                    <input required type="email" className={inputCls} />
                  </Field>
                  <Field label="Department" required>
                    <select required className={inputCls} defaultValue="">
                      <option value="" disabled>
                        Select department
                      </option>
                      {depts.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred date" required>
                    <input required type="date" className={inputCls} />
                  </Field>
                  <Field label="Preferred time">
                    <input type="time" className={inputCls} />
                  </Field>
                </div>
                <Field label="Reason for visit">
                  <textarea rows={4} className={inputCls} />
                </Field>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground max-w-md">
                    By submitting, you agree to be contacted about your appointment. This is a
                    portfolio demonstration and no real booking will be created.
                  </p>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95"
                  >
                    Request Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const inputCls =
  "w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
        {label} {required && <span className="text-emergency">*</span>}
      </span>
      {children}
    </label>
  );
}
