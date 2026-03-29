"use client";

import Navigation from "@/components/Navigation";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationSkills from "@/components/EducationSkills";
import Contact from "@/components/Contact";

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
