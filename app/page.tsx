"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Database,
  Download,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  PenTool,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";

/* ----------------------------------------------------------------------------
   Content
---------------------------------------------------------------------------- */

const EMAIL = "eloisalumbes@gmail.com";
const GITHUB_URL = "https://github.com/rhonaeloisa";
const GITHUB_LABEL = "github.com/rhonaeloisa";
const FACEBOOK_URL = "https://www.facebook.com/rhonaeloisa/";
const CV_PATH = "/Rhona-Eloisa-Lumbes-CV.pdf";

const NAV = [
  { label: "About", id: "about" },
  { label: "Projects", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const SERVICES: {
  title: string;
  text: string;
  Icon: LucideIcon;
  tone: string;
}[] = [
  {
    title: "Web Development",
    text: "JavaScript, HTML, CSS, Vue.js",
    Icon: Code,
    tone: "bg-silk",
  },
  {
    title: "UI/UX Design",
    text: "Figma, Canva, prototyping",
    Icon: PenTool,
    tone: "bg-cream",
  },
  {
    title: "Backend & Databases",
    text: "PHP, Laravel, MySQL",
    Icon: Database,
    tone: "bg-camel/60",
  },
  {
    title: "Data & Systems",
    text: "Python, C, Linux (Ubuntu)",
    Icon: Terminal,
    tone: "bg-alabaster",
  },
];

const PROJECTS = [
  {
    slug: "lextrack",
    name: "LexTrack",
    tag: "Legal Tech",
    text: "Document management system for legal affairs built with Laravel and Vue.js. Records retrieval workflows strictly managed via staff authorization.",
    image: "/projects/lextrack-preview.png",
    from: "from-silk",
    to: "to-cream",
  },
  {
    slug: "fleurchase",
    name: "FleurChase",
    tag: "E-commerce",
    text: "Web-based e-commerce platform for custom bouquet ordering with GCash integration.",
    image: "/projects/fleurchase-preview.png",
    from: "from-cream",
    to: "to-camel/60",
  },
];

const SKILL_GROUPS = [
  {
    label: "Programming Languages",
    items: ["JavaScript", "C", "Python", "PHP"],
  },
  {
    label: "Web Technologies",
    items: ["HTML", "CSS", "Vue"],
  },
  {
    label: "Frameworks & Backend",
    items: ["Laravel"],
  },
  {
    label: "Databases",
    items: ["MySQL"],
  },
  {
    label: "Design & Prototyping",
    items: ["Figma", "Canva"],
  },
  {
    label: "Deployment & DevOps",
    items: ["Linux (Ubuntu)"],
  },
  {
    label: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    label: "Development Tools",
    items: ["Visual Studio Code", "XAMPP", "VirtualBox"],
  },
];

/* ----------------------------------------------------------------------------
   Helpers
---------------------------------------------------------------------------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="relative inline-block pb-4 font-serif text-4xl font-bold text-camel sm:text-5xl">
      {children}
      <svg
        className="absolute bottom-0 left-0 h-3 w-full text-silk"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M2 8 Q 25 1 50 7 T 100 6 T 150 7 T 198 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </h2>
  );
}

function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    />
  );
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-serif text-8xl font-bold text-camel/80">RL</span>
      </div>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/profile.png"
          alt="Portrait of Rhona Eloisa L. Lumbes"
          className="absolute inset-0 h-full w-full object-contain object-bottom"
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}

/* ----------------------------------------------------------------------------
   Page
---------------------------------------------------------------------------- */

export default function Home() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cream/60 bg-mist/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-serif text-xl font-bold text-ink sm:text-2xl">
            Rhona Eloisa
            <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-silk align-middle" />
          </a>

          <nav aria-label="Primary" className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="relative py-1 text-sm font-medium text-ink/80 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel"
              >
                {n.label}
                {active === n.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-camel"
                  />
                )}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-camel md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="flex flex-col gap-1 border-t border-cream/60 bg-mist px-5 pb-4 pt-2 md:hidden"
          >
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium hover:bg-cream/60"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 lg:pb-28 lg:pt-16"
      >
        <Blob className="-left-24 top-10 h-72 w-72 rounded-blob bg-silk/30 blur-2xl" />
        <Blob className="right-0 top-40 h-80 w-80 rounded-blob2 bg-cream/70 blur-2xl" />

        <div className="relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative inline-block">
              <h1 className="font-serif text-[5.5rem] font-bold leading-[0.88] tracking-tight text-camel sm:text-[8rem] lg:text-[9.5rem]">
                Port
                <br />
                <span className="ml-10 sm:ml-16">folio</span>
              </h1>
              <span className="mt-5 inline-flex -rotate-6 whitespace-nowrap rounded-full bg-silk px-4 py-2 text-xs font-semibold tracking-wide text-ink shadow-soft sm:absolute sm:left-[18rem] sm:top-[6rem] sm:mt-0 sm:px-5 sm:py-2.5 sm:text-sm lg:left-[22rem] lg:top-[7rem]">
                UI/UX Designer
              </span>
            </div>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/85">
              I build digital products that are fast, scalable, and thoughtfully
              designed.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-camel px-7 py-3.5 text-sm font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                Let&apos;s Work Together <ArrowRight size={16} />
              </a>
              <a
                href={CV_PATH}
                download
                className="inline-flex items-center gap-2 rounded-full bg-silk px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                Download CV <Download size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-md pb-28 sm:pb-24">
            <svg
              className="absolute -right-6 -top-8 h-28 w-28 text-camel/70"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="46" />
              <circle cx="50" cy="50" r="30" />
              <path d="M50 4v92M4 50h92" />
            </svg>
            <svg
              className="absolute -left-8 bottom-32 h-20 w-20 text-silk"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden="true"
            >
              <path d="M10 90 L50 10 L90 90 Z" />
            </svg>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-blob bg-gradient-to-br from-silk via-cream to-alabaster shadow-lift">
              <ProfilePhoto />
            </div>

            <div className="absolute bottom-0 left-0 right-0 rounded-3xl bg-alabaster p-5 shadow-lift sm:-left-8 sm:right-auto sm:w-[21rem]">
              <p className="font-serif text-xl font-bold">Rhona Eloisa L. Lumbes</p>
              <ul className="mt-3 space-y-2.5 text-sm text-ink/85">
                <li className="flex items-center gap-2.5">
                  <MapPin size={16} className="shrink-0 text-camel" />
                  Albay, Philippines
                </li>
                <li className="flex items-center gap-2.5 break-all">
                  <Mail size={16} className="shrink-0 text-camel" />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe size={16} className="shrink-0 text-camel" />
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-silk decoration-2 underline-offset-4"
                  >
                    {GITHUB_LABEL}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 break-all">
                  <MessageCircle size={16} className="shrink-0 text-camel" />
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-silk decoration-2 underline-offset-4"
                  >
                    facebook.com/rhonaeloisa
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8"
      >
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr_auto] md:gap-14">
          <Reveal>
            <SectionTitle>About me</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-base leading-relaxed text-ink/85 sm:text-lg">
              I&apos;m an Information Technology developer from Bicol
              University who enjoys turning ideas into real web applications
              and information systems. I care about clean code, carefully
              designed databases and interfaces that feel effortless to use.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="justify-self-start pt-6 md:justify-self-end">
            <div className="rotate-[-4deg] rounded-2xl bg-cream px-8 py-7 shadow-soft">
              <div
                className="mx-auto -mt-11 mb-3 h-5 w-16 rounded-sm bg-silk/80"
                aria-hidden="true"
              />
              <p className="font-serif text-2xl italic leading-snug text-camel">
                Code.
                <br />
                Create.
                <br />
                Elevate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What I Do */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <SectionTitle>What I do</SectionTitle>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, text, Icon, tone }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="h-full rounded-3xl bg-alabaster p-6 shadow-soft transition-shadow hover:shadow-lift">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-ink ${tone}`}
                >
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section
        id="work"
        className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8"
      >
        <Blob className="-right-20 top-24 h-72 w-72 rounded-blob2 bg-silk/25 blur-3xl" />
        <div className="relative flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionTitle>Selected projects</SectionTitle>
          </Reveal>
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <Link
                href={`/projects/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-alabaster shadow-soft transition-shadow hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel"
              >
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${p.from} ${p.to}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={`${p.name} project preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-xl font-bold">{p.name}</h3>
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
                    {p.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-silk decoration-2 underline-offset-4">
                    View project <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Details */}
      <section
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Timeline
              title="Experience"
              when="2026"
              role="UI/UX Designer"
              org="LexTrack System Integration & Automated Testing"
              shape="rounded-pebble"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Timeline
              title="Education"
              when="2023 - Present"
              role="BS Information Technology"
              org="Bicol University"
              shape="rounded-pebble"
            />
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-2">
            <div
              id="skills"
              className="h-full w-full scroll-mt-24 rounded-xl bg-alabaster p-8 shadow-soft sm:p-10"
            >
              <h3 className="font-serif text-2xl font-bold text-camel">Skills</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-camel">
                      {group.label}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-cream px-3 py-1.5 text-sm font-medium"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer / CTA */}
      <section
        id="contact"
        className="relative scroll-mt-20 px-5 pb-10 pt-16 sm:px-8"
      >
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-cream px-8 py-14 shadow-soft sm:px-14">
            <Blob className="-right-16 -top-20 h-64 w-64 rounded-blob bg-silk/60 blur-xl" />
            <Blob className="-bottom-24 left-1/3 h-56 w-56 rounded-blob2 bg-alabaster/80 blur-xl" />
            <div className="relative grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight text-camel sm:text-5xl">
                  Have a project in mind? Let&apos;s build something amazing
                  together!
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75">
                  Fill out the form below and send your message directly to my email.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <footer className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-ink/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Rhona Eloisa L. Lumbes</p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-silk decoration-2 underline-offset-4"
          >
            GitHub
          </a>
        </footer>
      </section>
    </main>
  );
}

/* ----------------------------------------------------------------------------
   Timeline card
---------------------------------------------------------------------------- */

function Timeline({
  title,
  when,
  role,
  org,
  shape,
}: {
  title: string;
  when: string;
  role: string;
  org: string;
  shape: string;
}) {
  return (
    <div
      className={`relative mx-auto h-full w-full max-w-[27rem] overflow-hidden ${shape} bg-cream/70 p-8 pb-12 shadow-soft sm:p-10`}
    >
      <h3 className="font-serif text-2xl font-bold text-camel">{title}</h3>
      <ol className="relative mt-6 border-l border-camel/50 pl-6">
        <li className="relative">
          <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full bg-silk ring-4 ring-cream" />
          <p className="text-xs font-semibold text-camel">{when}</p>
          <p className="mt-0.5 font-medium">{role}</p>
          <p className="text-sm text-ink/75">{org}</p>
        </li>
      </ol>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mgaaovyw"
      method="POST"
      className="rounded-3xl bg-alabaster/75 p-5 shadow-soft sm:p-6"
    >
      <input type="hidden" name="_subject" value="New portfolio inquiry" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-camel/25 bg-mist/80 px-4 py-3 font-normal outline-none transition focus:border-camel focus:ring-2 focus:ring-silk"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-camel/25 bg-mist/80 px-4 py-3 font-normal outline-none transition focus:border-camel focus:ring-2 focus:ring-silk"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink">
        Message
        <textarea
          name="message"
          required
          rows={4}
          className="mt-2 w-full resize-y rounded-2xl border border-camel/25 bg-mist/80 px-4 py-3 font-normal outline-none transition focus:border-camel focus:ring-2 focus:ring-silk"
          placeholder="Tell me a little about your project..."
        />
      </label>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-camel px-6 py-3 text-sm font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          Send Email <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
