"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Briefcase, Calendar } from "lucide-react";

const roles = [
  {
    company: "Lyfex SkillTech Private Limited",
    role: "SDE Intern",
    period: "Dec 2025 - Present",
    live: "https://thelyfex.com",
    highlights: [
      "Built real-time video conferencing platform using SFU architecture with MediaSoup and WebRTC",
      "Created topic-based discussion rooms enabling live user communication",
      "Developed live teaching platform with paid sessions and creator earnings system",
      "Implemented multiple subscription plans and freelancer-client collaboration module",
      "Built earning + withdrawal system for creators with live WebSocket chat",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "MediaSoup", "WebRTC", "JWT", "WebSocket"],
  },
  {
    company: "ManMa Services Private Limited",
    role: "Full Stack Web Developer Intern",
    period: "Feb 2025 - Oct 2025",
    live: ["https://manmadigital.com", "https://crowd2capital.com"],
    highlights: [
      "Built course selling platform with Razorpay payment integration and 1% initial payment system",
      "Developed multiple admin dashboards with AI blog generator and real-time student-mentor chat",
      "Created job hiring platform with resume auto-fill and swipe-based hiring system",
      "Implemented Google login, OTP authentication, and comprehensive SEO optimization",
      "Built commission model system with Cashfree payment integration",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Firebase", "JWT", "Razorpay", "Cashfree"],
  },
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

export default function Experience() {
  const { ref: sectionRef, isVisible: sectionVisible } = useInView();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`mb-16 md:mb-20 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Where I&apos;ve{" "}
            <span className="text-gradient">contributed</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl">
            Professional experience building production-ready applications at scale
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {roles.map((job, index) => (
            <article
              key={job.company}
              className={`group relative rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8 lg:p-10 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] ${
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-emerald-500/25">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="pt-4 md:pt-2">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {job.company}
                    </h3>
                    <p className="mt-2 text-lg text-emerald-400/90 font-medium">{job.role}</p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{job.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(job.live) ? (
                      job.live.map((url, i) => (
                        <a
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Platform {i + 1}</span>
                        </a>
                      ))
                    ) : (
                      <a
                        href={job.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Product</span>
                      </a>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {job.highlights.map((line) => (
                    <li key={line} className="flex gap-3 text-neutral-400 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-neutral-400 transition-colors hover:text-white hover:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
