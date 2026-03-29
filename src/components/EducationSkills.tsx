const skillGroups = [
  {
    title: "Programming",
    items: ["Java", "C", "C++", "JavaScript", "Python", "R"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Realtime",
    items: ["WebRTC", "MediaSoup", "WebSocket"],
  },
  {
    title: "Payments & Auth",
    items: ["Razorpay", "Cashfree", "JWT", "Google OAuth", "Clerk"],
  },
  {
    title: "AI / ML",
    items: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma"],
  },
  {
    title: "Fundamentals",
    items: ["DSA", "OOP", "DBMS", "OS", "CN"],
  },
];

export default function EducationSkills() {
  return (
    <section className="relative w-full bg-[#0e0e0e] py-28 px-6 md:px-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-4">Education</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-8">
              IIIT Vadodara
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Indian Institute of Information Technology Vadodara (IIITV), Gandhinagar
            </p>
            <p className="mt-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-mono text-neutral-400">
              B.Tech Computer Science · 2022 – 2026
            </p>
          </div>

          <div>
            <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-4">Skills</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-10">
              Technical toolkit.
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 text-xs font-mono uppercase tracking-widest text-neutral-500">
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-neutral-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
