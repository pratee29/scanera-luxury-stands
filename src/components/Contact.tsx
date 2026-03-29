"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MessageCircle, Send, MapPin } from "lucide-react";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const contactLinks = [
  { label: "Email", value: "pratiksindhiya3@gmail.com", href: "mailto:pratiksindhiya3@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 9302351349", href: "tel:+919302351349", icon: Phone },
  { label: "WhatsApp", value: "+91 9302351349", href: "https://wa.me/919302351349", icon: MessageCircle },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/pratiksindhiya", icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/pratiksindhiya", icon: GithubIcon },
  { label: "Twitter", href: "https://x.com/PrateekSindhiya", icon: TwitterIcon },
  { label: "Instagram", href: "https://www.instagram.com/im_prateek29/", icon: InstagramIcon },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function Contact() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView();

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[600px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Let&apos;s work{" "}
              <span className="text-gradient">together</span>
            </h2>

            <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
              Open to internships, freelance opportunities, and full-stack developer roles. 
              I&apos;m always excited to work on challenging projects and collaborate with great teams.
            </p>

            <div className="flex items-center gap-3 text-neutral-500 mb-8">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">India | Open to Remote</span>
            </div>

            <a
              href="mailto:pratiksindhiya3@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-black font-semibold text-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </div>

          <div className="space-y-6">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] transition-all hover:border-white/10 hover:bg-white/[0.04] hover:translate-x-2 ${
                  sectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                  <contact.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">{contact.label}</p>
                  <p className="text-lg text-white font-medium">{contact.value}</p>
                </div>
              </a>
            ))}

            <div
              className={`pt-6 transition-all duration-700 ${
                sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-sm text-neutral-500 mb-4 font-mono uppercase tracking-widest">
                Social Links
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] text-neutral-400 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white hover:scale-110 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-20 pt-8 border-t border-white/5 transition-all duration-700 ${
            sectionVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600">
              Designed & Built by{" "}
              <span className="text-neutral-400">Pratik Sindhiya</span>
            </p>
            <p className="text-sm text-neutral-600">
              Built with{" "}
              <span className="text-neutral-400">Next.js</span>,{" "}
              <span className="text-neutral-400">Tailwind CSS</span> &{" "}
              <span className="text-neutral-400">Framer Motion</span>
            </p>
            <p className="text-sm text-neutral-600">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
