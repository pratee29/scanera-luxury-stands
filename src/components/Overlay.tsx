"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

interface OverlayProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

const socialLinks = [
  { icon: Github, href: "https://github.com/pratiksindhiya", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/pratiksindhiya", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/PrateekSindhiya", label: "Twitter" },
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
