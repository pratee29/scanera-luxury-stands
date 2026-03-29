import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EducationSkills from "@/components/EducationSkills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] text-white min-h-screen font-sans selection:bg-emerald-500/30">
      <ScrollyCanvas />
      <Experience />
      <Projects />
      <EducationSkills />
      <Contact />
    </main>
  );
}
