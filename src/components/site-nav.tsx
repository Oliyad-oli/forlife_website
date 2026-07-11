import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { HOSPITAL } from "@/lib/contact-info";

const links = [
  { to: "/departments", label: "Departments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-8">
          <Link to="/" className="font-extrabold text-xl sm:text-2xl tracking-tighter uppercase shrink-0">
            For<span className="text-primary">Life</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium uppercase tracking-wider text-muted-foreground">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-[10px] font-mono uppercase text-emergency font-bold tracking-tight animate-pulse">
              Emergency 24/7
            </span>
            <a href={HOSPITAL.phoneEmergencyHref} className="text-xs lg:text-sm font-bold font-mono">
              {HOSPITAL.phoneEmergency}
            </a>
          </div>
          <Link
            to="/appointments"
            className="hidden sm:inline-block bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:brightness-110 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Book Appointment
          </Link>
          <a
            href={HOSPITAL.phoneEmergencyHref}
            aria-label="Call emergency"
            className="sm:hidden grid place-items-center size-10 rounded-full bg-emergency text-emergency-foreground animate-pulse"
          >
            <PhoneCall className="size-4" />
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center size-10 rounded-md border border-border hover:bg-muted transition"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-1 bg-background">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-3 px-3 text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-muted hover:text-primary transition-colors"
              activeProps={{ className: "text-primary bg-muted" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/appointments"
            onClick={() => setOpen(false)}
            className="mt-3 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest text-center"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
