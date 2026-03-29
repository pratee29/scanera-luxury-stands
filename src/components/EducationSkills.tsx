"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Wrench, Database, Globe, CreditCard, Brain, Settings } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Java", "C", "C++", "JavaScript", "Python", "TypeScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    icon: Globe,
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Backend",
    icon: Settings,
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Realtime",
    icon: Wrench,
    items: ["WebRTC", "MediaSoup", "WebSocket", "Socket.io"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Payments & Auth",
    icon: CreditCard,
    items: ["Razorpay", "Cashfree", "JWT", "OAuth", "Clerk"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI / ML",
    icon: Brain,
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Tools",
    icon: Settings,
    items: ["Git", "GitHub", "Postman", "Figma", "VS Code"],
    color: "from-slate-500 to-zinc-500",
  },
];

const fundamentals = ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Operating Systems", "Computer Networks"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EducationSkills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#080808] py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px]" />

      {/* Top Border Gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-[1fr,2fr]">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                Education
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              IIIT Vadodara
            </h2>

            <div className="space-y-4">
              <p className="text-xl text-neutral-300 leading-relaxed">
                Indian Institute of Information Technology Vadodara (IIITV), Gandhinagar
              </p>

              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                <span className="text-sm font-mono text-neutral-400">
                  B.Tech Computer Science
                </span>
                <span className="text-sm text-neutral-500">|</span>
                <span className="text-sm font-mono text-neutral-400">2022 - 2026</span>
              </div>
            </div>

            {/* Fundamentals */}
            <div className="mt-10">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">
                Core Fundamentals
              </h3>
              <div className="flex flex-wrap gap-2">
                {fundamentals.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] text-sm text-neutral-400 hover:border-emerald-500/30 hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                  Skills
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Technical <span className="text-gradient">Toolkit</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {skillGroups.map((group) => (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-5`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${group.color} bg-opacity-10`}>
                        <group.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md border border-white/5 bg-white/[0.02] text-sm text-neutral-300 transition-colors hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
