"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Linkedin, Github, Twitter, Instagram, Send, MapPin } from "lucide-react";

const contactLinks = [
  { label: "Email", value: "pratiksindhiya3@gmail.com", href: "mailto:pratiksindhiya3@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 9302351349", href: "tel:+919302351349", icon: Phone },
  { label: "WhatsApp", value: "+91 9302351349", href: "https://wa.me/919302351349", icon: MessageCircle },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/pratiksindhiya", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/pratiksindhiya", icon: Github },
  { label: "Twitter", href: "https://x.com/PrateekSindhiya", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/im_prateek29/", icon: Instagram },
];

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

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[600px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px]" />

      {/* Top Border Gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Let&apos;s work{" "}
              <span className="text-gradient">together</span>
            </h2>

            <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
              Open to internships, freelance opportunities, and full-stack developer roles. 
              I&apos;m always excited to work on challenging projects and collaborate with great teams.
            </p>

            {/* Location */}
            <div className="flex items-center gap-3 text-neutral-500 mb-8">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">India | Open to Remote</span>
            </div>

            {/* Primary CTA */}
            <motion.a
              href="mailto:pratiksindhiya3@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-black font-semibold text-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </motion.a>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            {contactLinks.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                  <contact.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">{contact.label}</p>
                  <p className="text-lg text-white font-medium">{contact.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <p className="text-sm text-neutral-500 mb-4 font-mono uppercase tracking-widest">
                Social Links
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] text-neutral-400 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600">
              Designed & Built by{" "}
              <span className="text-neutral-400">Pratik Sindhiya</span>
            </p>
            <p className="text-sm text-neutral-600">
              Built with{" "}
              <span className="text-neutral-400">Next.js</span>,{" "}
              <span className="text-neutral-400">Tailwind CSS</span> &{" "}
              <span className="text-neutral-400">Framer Motion</span>
            </p>
            <p className="text-sm text-neutral-600">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
