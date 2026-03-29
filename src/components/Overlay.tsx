"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface OverlayProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/pratiksindhiya", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/pratiksindhiya", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://x.com/PrateekSindhiya", label: "Twitter" },
];

export default function Overlay({ containerRef }: OverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [0, 0, -150]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0.9]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [100, 0, 0, -100]);
  const x2 = useTransform(scrollYProgress, [0.25, 0.35], [-50, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [100, 0, 0, -100]);
  const x3 = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse-slow"
        />
        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-slow"
        />
      </div>

      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">
          Pratik
          <span className="text-gradient">.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-400 tracking-[0.2em] font-light uppercase">
          Full Stack Developer
        </p>

        <p className="mt-4 max-w-md text-base text-neutral-500 leading-relaxed">
          Building production-ready web applications with React, Node.js, and modern technologies
        </p>

        <div className="mt-8 flex items-center gap-4 pointer-events-auto">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs text-neutral-500 tracking-widest uppercase">Scroll to explore</span>
          <div className="p-2 rounded-full border border-white/10 animate-bounce">
            <ArrowDown className="w-4 h-4 text-neutral-400" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2, x: x2 }}
        className="absolute left-6 sm:left-12 md:left-24 top-1/2 -translate-y-1/2 text-left max-w-2xl"
      >
        <span className="inline-block px-3 py-1.5 mb-6 text-xs font-mono tracking-widest text-emerald-400 uppercase border border-emerald-500/20 rounded-full bg-emerald-500/5">
          01 / What I Do
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          I ship{" "}
          <span className="text-gradient">
            end-to-end
          </span>
          <br />
          products.
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-lg">
          From realtime video conferencing and WebSocket systems to payment integrations, 
          admin dashboards, and ML experiments. Building with React, Node.js, and MongoDB in production.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["React", "Node.js", "MongoDB", "WebRTC", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm text-neutral-300 border border-white/10 rounded-full bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3, x: x3 }}
        className="absolute right-6 sm:right-12 md:right-24 top-1/2 -translate-y-1/2 text-right max-w-2xl flex flex-col items-end"
      >
        <span className="inline-block px-3 py-1.5 mb-6 text-xs font-mono tracking-widest text-cyan-400 uppercase border border-cyan-500/20 rounded-full bg-cyan-500/5">
          02 / Background
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          CS @{" "}
          <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            IIIT Vadodara
          </span>
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-lg text-right">
          B.Tech Computer Science (2022-2026) at Indian Institute of Information Technology Vadodara.
          Focused on full-stack development, realtime systems, and practical machine learning.
        </p>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          {["DSA", "System Design", "DBMS", "OS", "Networking"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm text-neutral-300 border border-white/10 rounded-full bg-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
