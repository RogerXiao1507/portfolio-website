"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Link, Mail, Sparkles } from "lucide-react";

const project = {
  title: "RolePilot",
  eyebrow: "Flagship Project",
  description:
    "A full-stack AI career platform for job parsing, resume analysis, resume-to-job matching, tailored resume generation, and application tracking.",
  details: [
    "Built with Next.js, FastAPI, PostgreSQL, OpenAI, and pgvector",
    "Implemented RAG with semantic retrieval to ground resume tailoring in project evidence",
    "Created a document pipeline for recruiter-ready DOCX and PDF exports",
  ],
  tags: [
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "OpenAI",
    "pgvector",
    "RAG",
    "Semantic Retrieval",
  ],
  github: "https://github.com/RogerXiao1507",
};

const skills = [
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "OpenAI",
  "pgvector",
  "TypeScript",
  "Python",
  "RAG",
  "Semantic Retrieval",
  "Git",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function PortfolioSite() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06070A] text-white antialiased">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.16),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_24%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:px-10 lg:px-12">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl md:px-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.01em]">Roger Xiao</p>
              <p className="text-xs tracking-[0.02em] text-white/45">
                RolePilot • Full-Stack • AI Workflows
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
            <a href="#project" className="transition hover:text-white">
              Project
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </motion.header>

        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/68 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Building thoughtful software and AI projects
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-7xl">
              UIUC electrical engineering student building RolePilot, a full stack AI career platform.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/80">
              I am interested in software engineering, hardware, and building practical tools that make the internship and application process easier to manage.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#project"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                View RolePilot
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/RogerXiao_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,255,255,0.08)] transition hover:bg-white/15"
              >
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-transparent blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.03)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-base text-white/70">Currently focused on</p>
                  <p className="mt-1 text-xl font-medium text-white">RolePilot</p>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  In progress
                </div>
              </div>

              <div className="grid gap-4 pt-5">
                {[
                  [
                    "Platform",
                    "Application tracking, resume analysis, and job parsing in one workflow",
                  ],
                  [
                    "Retrieval",
                    "Semantic retrieval with RAG and project evidence chunking",
                  ],
                  [
                    "Output",
                    "Recruiter-ready resume generation in DOCX and PDF formats",
                  ],
                ].map(([title, desc], i) => (
                  <motion.div
                    key={title}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-2 text-base leading-7 text-white/75">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <section id="project" className="pt-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Featured Project
            </p>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                A project I am currently building and continuing to improve.
              </h2>
              <p className="max-w-md text-sm leading-6 text-white/55">
                Focused on one main product that brings together retrieval, resume tailoring, and workflow design.
              </p>
            </div>
          </motion.div>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="mt-10 grid max-w-5xl gap-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition shadow-[0_0_40px_rgba(255,255,255,0.03)] md:grid-cols-[1.15fr_0.85fr] md:p-10"
          >
            <div>
              <p className="text-sm text-white/35">{project.eyebrow}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <ul className="space-y-3 text-base leading-7 text-white/78">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-white/85 transition hover:bg-white/[0.07]"
                >
                  GitHub
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        </section>

        <section id="skills" className="pt-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Core tools I have used in building RolePilot.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl md:p-8"
          >
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="pt-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-white/55">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Interested in both software engineering and hardware opportunities.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
                  I am open to internship opportunities where I can contribute across software engineering, backend systems, hardware related work, digital systems, and AI powered product workflows.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:xiaoroger1507@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm text-white/85 transition hover:bg-white/[0.07]"
                >
                  Email
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rogerxiao"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm text-white/85 transition hover:bg-white/[0.07]"
                >
                  LinkedIn
                  <Link className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/RogerXiao1507"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                >
                  GitHub
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </main>
  );
}