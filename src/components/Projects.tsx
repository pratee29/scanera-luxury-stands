import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";

type Project = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  year: string;
  image: string;
  imageAlt: string;
  href?: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Labelyon",
    description:
      "AI-powered label design with a Canva-like editor, dynamic pricing, e-commerce checkout, Razorpay, WebSocket support chat, admin panel, invoices, and post-delivery email automation.",
    tags: ["React", "Node", "MongoDB", "WebSocket", "Razorpay", "AI"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "E-commerce and retail workspace",
    href: "https://labelyon.com",
  },
  {
    id: 2,
    name: "Aqua2Promo",
    description:
      "3D bottle preview with Three.js, label upload workflow, contract signing, booking, contact flows, admin product management, and email automation.",
    tags: ["React", "Three.js", "Node", "MongoDB", "JWT"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Water bottles product photography",
    href: "https://aqua2promo.com",
  },
  {
    id: 3,
    name: "CareConnect",
    description:
      "MERN appointment platform with Patient, Doctor, and Admin dashboards, Clerk auth, Razorpay, Cloudinary uploads, and appointment tracking.",
    tags: ["MERN", "Clerk", "Razorpay", "Cloudinary"],
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Healthcare and medical technology",
    github: "https://github.com/PRATIKSINDHIYA/careconnect",
  },
  {
    id: 4,
    name: "Railway Management System",
    description:
      "Train ticket booking with passenger and admin dashboards, Cashfree payments, and email ticket delivery.",
    tags: ["React", "Node", "MySQL", "Cashfree"],
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb7141657?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Train on railway tracks",
    github: "https://github.com/PRATIKSINDHIYA/RailwayManagementSystem",
  },
  {
    id: 5,
    name: "Credit Card Fraud Detection",
    description:
      "ML pipeline comparing Logistic Regression, KNN, Decision Tree, and SVM with preprocessing and evaluation on transaction data.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Analytics and data visualization",
    github: "https://github.com/PRATIKSINDHIYA/CreditCardFraudDetection-AIML",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-[#121212] py-32 px-6 md:px-24">
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <p className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-4">Featured Work</p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
            Projects <br className="hidden md:block" /> & products.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-emerald-500/5 hover:border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-mono text-white/90 backdrop-blur-md">
                    {project.year}
                  </span>
                  <div className="flex gap-2">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
                      >
                        <Code2 className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-1 flex-col justify-between p-8 pt-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-base text-neutral-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono tracking-wider text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
