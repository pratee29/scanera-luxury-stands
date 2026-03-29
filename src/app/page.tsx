"use client";

import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false });
const ScrollyCanvas = dynamic(() => import("@/components/ScrollyCanvas"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const EducationSkills = dynamic(() => import("@/components/EducationSkills"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-emerald-500/30 selection:text-white">
      <Navigation />
      <ScrollyCanvas />
      <Experience />
      <Projects />
      <EducationSkills />
      <Contact />
    </main>
  );
}
