"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 174;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    if (!mounted) return;
    
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.webp`;

      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) setLoaded(true);
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [mounted]);

  const renderFrame = useCallback(
    (index: number) => {
      if (!images[index] || !images[index].complete || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = images[index];
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    [images]
  );

  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (loaded) {
      renderFrame(Math.round(latest));
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !mounted) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (loaded) {
        renderFrame(Math.round(currentIndex.get()));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [loaded, currentIndex, renderFrame, mounted]);

  if (!mounted) {
    return (
      <section id="home" className="relative">
        <div className="relative w-full h-[500vh] bg-[#0a0a0a]">
          <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative">
      <div ref={containerRef} className="relative w-full h-[500vh] bg-[#0a0a0a]">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />

          {!loaded && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
              <div className="relative w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-300"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <span className="text-sm text-neutral-500 font-mono tracking-widest">
                {loadProgress}%
              </span>
            </div>
          )}

          <canvas ref={canvasRef} className="w-full h-full block" />

          <Overlay containerRef={containerRef} />
        </div>
      </div>
    </section>
  );
}
