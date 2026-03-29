import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:pratiksindhiya3@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+919302351349", icon: Phone },
  { label: "WhatsApp", href: "https://wa.me/919302351349", icon: MessageCircle },
  { label: "LinkedIn", href: "https://linkedin.com/in/pratiksindhiya", icon: ExternalLink },
  { label: "GitHub", href: "https://github.com/pratiksindhiya", icon: ExternalLink },
  { label: "X (Twitter)", href: "https://x.com/PrateekSindhiya", icon: ExternalLink },
  { label: "Instagram", href: "https://www.instagram.com/im_prateek29/", icon: ExternalLink },
];

export default function Contact() {
  return (
    <footer className="relative w-full bg-[#121212] py-24 px-6 md:px-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
              Let&apos;s work together.
            </h2>
            <p className="mt-4 max-w-md text-neutral-400 leading-relaxed">
              Open to internships, freelance, and full-stack roles. Reach out on email, phone, or WhatsApp.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3" aria-label="Social and contact links">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-neutral-300 transition hover:border-emerald-500/40 hover:bg-white/[0.07] hover:text-white"
              >
                <Icon className="h-4 w-4 shrink-0 text-emerald-400/80" aria-hidden />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-16 text-center text-sm text-neutral-600 md:text-left">
          © {new Date().getFullYear()} Pratik Sindhiya. Built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
