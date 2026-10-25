import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

const PROJECT_DETAILS = {
  lextrack: {
    name: "LexTrack",
    tag: "Legal Tech",
    summary:
      "A document management portal for the Bicol University Legal Affairs Office.",
    overview:
      "LexTrack organizes document submissions, request tracking, and official updates for the university legal affairs workflow. Staff authorization keeps records retrieval controlled and easy to follow.",
    features: [
      "Submit documents to the Legal Affairs Office",
      "Track document requests from submission to completion",
      "Manage staff-authorized records retrieval",
      "Receive official status updates in one portal",
    ],
    techStack: ["Laravel", "Vue.js", "MySQL", "REST APIs"],
    gallery: [
      {
        src: "/projects/lextrack-preview.png",
        alt: "LexTrack Bicol University Legal Affairs Office portal preview",
      },
      {
        src: "/projects/lextrack/lextrack-overview.png",
        alt: "LexTrack Legal Office mission and vision page preview",
      },
      {
        src: "/projects/lextrack/lextrack-services.png",
        alt: "LexTrack Legal Office services page preview",
      },
      {
        src: "/projects/lextrack/lextrack-guide.png",
        alt: "LexTrack Legal Office portal guide and frequently asked questions preview",
      },
      {
        src: "/projects/lextrack/lextrack-tracking.png",
        alt: "LexTrack document tracking page preview",
      },
    ],
  },
  fleurchase: {
    name: "FleurChase",
    tag: "E-commerce",
    summary:
      "A web-based flower shop experience for custom bouquet ordering across Albay.",
    overview:
      "FleurChase helps customers browse flower arrangements, discover seasonal offerings, and place custom bouquet orders through a warm, editorial storefront experience.",
    features: [
      "Browse flower arrangements and collections",
      "Order custom bouquets for different occasions",
      "Support GCash checkout integration",
      "Present shop information, promos, and reviews clearly",
    ],
    techStack: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    gallery: [
      {
        src: "/projects/fleurchase-preview.png",
        alt: "FleurChase Albay flower shop homepage preview",
      },
      {
        src: "/projects/fleurchase/fleurchase-favorites.jpeg",
        alt: "FleurChase handpicked favorites collection preview",
      },
      {
        src: "/projects/fleurchase/fleurchase-stems.jpeg",
        alt: "FleurChase single stem flowers shop preview",
      },
      {
        src: "/projects/fleurchase/fleurchase-customize.jpeg",
        alt: "FleurChase custom bouquet builder preview",
      },
      {
        src: "/projects/fleurchase/fleurchase-contact.jpeg",
        alt: "FleurChase contact page preview",
      },
      {
        src: "/projects/fleurchase/fleurchase-collection.jpeg",
        alt: "FleurChase product collection preview",
      },
      {
        src: "/projects/fleurchase/fleurchase-extras.jpeg",
        alt: "FleurChase bouquet extras and wrapping options preview",
      },
      {
        src: "/projects/fleurchase/fleurchase-promos-reviews.jpeg",
        alt: "FleurChase promotions and customer reviews preview",
      },
    ],
  },
} as const;

type ProjectSlug = keyof typeof PROJECT_DETAILS;

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECT_DETAILS[params.slug as ProjectSlug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-mist text-ink">
      <header className="sticky top-0 z-50 border-b border-cream/60 bg-mist/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-camel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <span className="font-serif text-lg font-bold text-camel">
            Project case study
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="inline-flex rounded-full bg-silk px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
              {project.tag}
            </span>
            <h1 className="mt-6 font-serif text-6xl font-bold leading-[0.9] text-camel sm:text-8xl">
              {project.name}
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/80 sm:text-xl">
              {project.summary}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-alabaster p-3 shadow-lift sm:p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.gallery[0].src}
              alt={project.gallery[0].alt}
              className="h-auto w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 sm:px-8 sm:pb-24 lg:grid-cols-2">
        <article className="rounded-3xl bg-alabaster p-8 shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-camel">
            Project overview
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Designed around a clearer workflow.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80 sm:text-lg">
            {project.overview}
          </p>
        </article>

        <article className="rounded-3xl bg-cream p-8 shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-camel">
            Key features
          </p>
          <ul className="mt-6 space-y-4">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-base leading-relaxed text-ink/85">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-silk text-ink">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="rounded-3xl bg-cream p-8 shadow-soft sm:p-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-camel">
                Built with
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink sm:text-4xl">
                Tech stack
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/70">
              The tools and technologies used to shape this project from idea to
              working product.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.techStack.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-alabaster px-5 py-2.5 text-sm font-semibold text-ink"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-camel">
              Project gallery
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-camel sm:text-5xl">
              Preview photos
            </h2>
          </div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-silk decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel"
          >
            See all projects <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {project.gallery.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-3xl bg-alabaster p-3 shadow-soft sm:p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
