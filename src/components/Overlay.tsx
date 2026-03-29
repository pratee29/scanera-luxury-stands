"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

interface OverlayProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% -> 15% (Opacities and transforms mapped to 0 -> 1 progress)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [0, -20, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1.05, 1.1]);

  // Section 2: 25% -> 45% -> 55%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [100, 0, -20, -100]);

  // Section 3: 65% -> 85% -> 95%
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [100, 0, -20, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }} 
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
      >
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Pratik.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-400 mt-6 tracking-[0.15em] font-light uppercase">
          Full Stack Developer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }} 
        className="absolute left-6 sm:left-12 md:left-24 top-1/2 -translate-y-1/2 text-left"
      >
        <div className="flex flex-col gap-4">
          <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-4 opacity-70">
            [ 01 / WHAT I DO ]
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-2xl drop-shadow-md leading-tight">
            I ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">end-to-end products.</span>
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-lg mt-4 font-light leading-relaxed">
            From realtime video and WebSocket systems to payments, dashboards, and ML experiments — React, Node, and MongoDB in production.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }} 
        className="absolute right-6 sm:right-12 md:right-24 top-1/2 -translate-y-1/2 text-right flex flex-col items-end"
      >
        <div className="flex flex-col items-end gap-4 text-right">
          <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-4 opacity-70">
            [ 02 / PHILOSOPHY ]
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white max-w-2xl drop-shadow-md leading-tight">
            CS @ <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-400 to-purple-500">IIIT Vadodara.</span>
          </h2>
          <p className="text-neutral-400 text-lg sm:text-xl max-w-lg mt-4 font-light leading-relaxed">
            B.Tech Computer Science (2022–2026). Focus on full-stack web, realtime systems, and practical ML.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
