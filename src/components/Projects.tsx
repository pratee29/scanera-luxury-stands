"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Layers } from "lucide-react";

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
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Labelyon",
    description:
      "AI-powered label design platform with a Canva-like editor, dynamic pricing calculator, e-commerce checkout, Razorpay integration, WebSocket support chat, admin panel, and automated email system.",
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "Razorpay", "AI API"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "E-commerce and retail workspace",
    href: "https://labelyon.com",
    featured: true,
  },
  {
    id: 2,
    name: "Aqua2Promo",
    description:
      "3D bottle preview platform using Three.js, allowing users to upload label designs and visualize them on products. Features contract signing, booking system, and admin dashboard.",
    tags: ["React", "Three.js", "Node.js", "MongoDB", "JWT"],
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Water bottles product photography",
    href: "https://aqua2promo.com",
    featured: true,
  },
  {
    id: 3,
    name: "CareConnect",
    description:
      "Full-stack medical appointment platform with separate dashboards for patients, doctors, and admins. Integrated Clerk authentication, Razorpay payments, and Cloudinary for document uploads.",
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
      "Complete train ticket booking system with passenger and admin dashboards, Cashfree payment gateway integration, and automated email ticket delivery.",
    tags: ["React", "Node.js", "MySQL", "Cashfree"],
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
      "Machine learning pipeline comparing Logistic Regression, KNN, Decision Tree, and SVM algorithms for fraud detection with comprehensive data preprocessing and evaluation.",
    tags: ["Python", "Pandas", "Scikit-learn", "ML"],
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Analytics and data visualization",
    github: "https://github.com/PRATIKSINDHIYA/CreditCardFraudDetection-AIML",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-emerald-500/5 blur-[150px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-blue-500/5 blur-[120px]" />

      {/* Top Border Gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Projects &{" "}
            <span className="text-gradient">Products</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-lg max-w-2xl">
            A selection of projects I&apos;ve built, from full-stack web applications to machine learning experiments
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12"
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-xs font-semibold text-black">
                Featured
              </div>

              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

                {/* Year Badge & Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-mono text-white/90 backdrop-blur-md">
                    {project.year}
                  </span>
                  <div className="flex gap-2">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
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
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-base text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Other Projects - Smaller Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-0.5 text-xs font-mono text-white/80 backdrop-blur-md">
                    {project.year}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur-md transition hover:border-emerald-400/50 hover:bg-emerald-500/20"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-[10px] font-mono text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
