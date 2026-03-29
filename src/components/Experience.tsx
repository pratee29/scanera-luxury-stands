export default function Experience() {
  const roles = [
    {
      company: "Lyfex SkillTech Private Limited",
      role: "SDE Intern",
      period: "Dec 2025 – Present",
      live: "https://thelyfex.com",
      highlights: [
        "Real-time video conferencing with SFU architecture (MediaSoup, WebRTC)",
        "Topic-based discussion rooms and live teaching with paid sessions",
        "Subscription plans, freelancer–client collaboration, and creator payouts",
        "JWT auth, role-based dashboards, and WebSocket live chat",
      ],
      tech: "React, Node, Express, MongoDB, MediaSoup, WebRTC, JWT, WebSocket",
    },
    {
      company: "ManMa Services Private Limited",
      role: "Full Stack Web Developer Intern",
      period: "Feb 2025 – Oct 2025",
      live: ["https://manmadigital.com", "https://crowd2capital.com"],
      highlights: [
        "Course platform with Razorpay, admin dashboards, and AI blog generator",
        "Google login, OTP auth, student–mentor chat, and email automation",
        "Hiring platform with resume auto-fill, swipe hiring, and Cashfree",
        "SEO, meta tags, and JWT across products",
      ],
      tech: "React, Node, Express, MongoDB, Firebase, JWT, Razorpay, Cashfree",
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-28 px-6 md:px-24 border-t border-white/[0.06]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-4">Experience</p>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-16">
          Where I&apos;ve built.
        </h2>

        <div className="flex flex-col gap-12">
          {roles.map((job) => (
            <article
              key={job.company}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm transition-colors hover:border-white/10 hover:bg-white/[0.03]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-white">{job.company}</h3>
                  <p className="mt-1 text-lg text-emerald-400/90">{job.role}</p>
                  <p className="mt-2 text-sm font-mono text-neutral-500">{job.period}</p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  {Array.isArray(job.live) ? (
                    job.live.map((url) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition hover:border-emerald-500/40 hover:text-white"
                      >
                        Live
                      </a>
                    ))
                  ) : (
                    <a
                      href={job.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition hover:border-emerald-500/40 hover:text-white"
                    >
                      Live product
                    </a>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-3 text-neutral-400 leading-relaxed">
                {job.highlights.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-white/5 pt-6 text-sm text-neutral-500">
                <span className="font-mono text-neutral-600">Stack · </span>
                {job.tech}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
