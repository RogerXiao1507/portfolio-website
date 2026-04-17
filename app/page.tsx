"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Link, Mail, Sparkles } from "lucide-react";

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  details: string[];
  tags: string[];
  github: string;
  live?: string;
  liveLabel?: string;
  extraHref?: string;
  extraLabel?: string;
  status: string;
};

const projects: Project[] = [
  {
    title: "RolePilot",
    eyebrow: "Flagship Project",
    description:
      "A full stack AI career platform for job parsing, resume analysis, resume to job matching, tailored resume generation, application tracking, and agent based career guidance.",
    details: [
      "Built with Next.js, FastAPI, PostgreSQL, OpenAI, and pgvector",
      "Implemented RAG with semantic retrieval to ground resume tailoring in project evidence",
      "Created a document pipeline for recruiter ready DOCX and PDF exports",
    ],
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "pgvector",
      "RAG",
      "Semantic Retrieval",
      "TypeScript",
      "Python",
    ],
    github: "https://github.com/RogerXiao1507",
    live: "https://rolepilot-nu.vercel.app/",
    liveLabel: "Try RolePilot",
    extraHref: "https://cf_ai_rolepilot_agent.xiaoroger1507.workers.dev/",
    extraLabel: "Try Agent",
    status: "In progress",
  },
  {
    title: "HeatRisk AI",
    eyebrow: "Public Health + ML Project",
    description:
      "A county level heat intelligence platform that forecasts dangerous heat conditions by combining live weather, air quality, social vulnerability, and historical event pattern modeling.",
    details: [
      "Built a FastAPI and Next.js system that scores county level heat danger over a 72 hour horizon from NWS, AirNow, and CDC SVI data",
      "Expanded a historical training pipeline to 29,376 county day records with 468 labeled heat events using weather, AQI, vulnerability, and interaction features",
      "Improved heat event detection 8.8x in F1 over a rule based baseline with a Random Forest model that achieved 0.9854 ROC AUC and 0.7348 average precision",
    ],
    tags: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Python",
      "scikit-learn",
      "pandas",
      "NOAA API",
      "AirNow",
      "CDC SVI",
      "Machine Learning",
    ],
    github: "https://github.com/RogerXiao1507/HeatRisk_AI",
    live: "https://heat-risk-ai.vercel.app/",
    liveLabel: "View HeatRisk AI",
    status: "Recently launched",
  },
];

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
  "scikit-learn",
  "pandas",
  "REST APIs",
  "Tailwind CSS",
  "Cloudflare Workers",
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
                Software • AI • Systems
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
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
              UIUC electrical engineering student building full stack products, ML systems, and practical tools.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/80">
              I am interested in software engineering, machine learning, and systems work that turns technical ideas into usable products.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/Roger_Xiao_Master_Resume.pdf"
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
                  <p className="mt-1 text-xl font-medium text-white">RolePilot and HeatRisk AI</p>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Building
                </div>
              </div>

              <div className="grid gap-4 pt-5">
                {[
                  [
                    "RolePilot",
                    "AI career platform with job parsing, resume tailoring, semantic retrieval, and application tracking.",
                  ],
                  [
                    "HeatRisk AI",
                    "County level heat intelligence system combining live weather, AQI, vulnerability data, and historical event matching.",
                  ],
                  [
                    "Focus",
                    "Building practical products with strong backend systems, applied ML, and polished user facing interfaces.",
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

        <section id="projects" className="pt-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Selected Projects
            </p>
            <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Projects that reflect how I think across product, backend, and machine learning.
              </h2>
              <p className="max-w-md text-sm leading-6 text-white/55">
                A mix of full stack application work and data driven systems that solve practical problems with clear user value.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="grid max-w-5xl gap-8 rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition shadow-[0_0_40px_rgba(255,255,255,0.03)] md:grid-cols-[1.15fr_0.85fr] md:p-10"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-white/35">{project.eyebrow}</p>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-white/85 transition hover:bg-white/[0.07]"
                    >
                      GitHub
                      <Globe className="h-4 w-4" />
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]"
                      >
                        {project.liveLabel || "View Project"}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}

                    {project.extraHref ? (
                      <a
                        href={project.extraHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-white/85 transition hover:bg-white/[0.07]"
                      >
                        {project.extraLabel}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
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
              Core tools I have used across full stack and ML projects.
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
                  Interested in software engineering, machine learning, and systems opportunities.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
                  I am open to internship opportunities where I can contribute across backend engineering, applied AI, data driven products, and low level systems work.
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