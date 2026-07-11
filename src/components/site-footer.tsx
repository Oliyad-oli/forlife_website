import { Link } from "@tanstack/react-router";
import { HOSPITAL } from "@/lib/contact-info";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border pt-16 sm:pt-20 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 mb-16 sm:mb-20">
          <div className="sm:col-span-2">
            <span className="font-extrabold text-2xl tracking-tighter uppercase mb-6 block">
              For<span className="text-primary">Life</span>
            </span>
            <p className="max-w-xs text-sm text-muted-foreground mb-8 italic">
              "Medicine at the intersection of precision and compassion."
            </p>
            <div className="text-xs font-mono text-muted-foreground space-y-1">
              <p>{HOSPITAL.addressLine1}</p>
              <p>{HOSPITAL.addressLine2}</p>
              <p className="pt-2">
                <a href={HOSPITAL.phoneMainHref} className="hover:text-primary transition-colors">
                  {HOSPITAL.phoneMain}
                </a>
              </p>
            </div>
          </div>
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-widest text-primary mb-6">
              Hospital
            </h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-primary transition-colors">About ForLife</Link></li>
              <li><Link to="/departments" className="hover:text-primary transition-colors">Departments</Link></li>
              <li><Link to="/doctors" className="hover:text-primary transition-colors">Our Doctors</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-widest text-primary mb-6">
              Patients
            </h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/appointments" className="hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Insurance Partners</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-12 border-t border-border gap-6">
          <div className="space-y-2">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              © {new Date().getFullYear()} ForLife Hospital · {HOSPITAL.city}, {HOSPITAL.country}
            </p>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Developed by Oliad Dandena
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hover:text-primary">Patient Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
