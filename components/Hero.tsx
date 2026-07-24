import { ArrowRight, Signal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink/70 shadow-soft">
          <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
          Now live across the UK
        </div>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-8xl">
          One platform.
          <br />
          <span className="bg-brand-gradient text-6xl bg-clip-text text-transparent lg:text-9xl">
            Smarter living.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/60 sm:text-xl">
          Control your home, hire trusted professionals, and stay connected
          wherever you go.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-650"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-black/20"
          >
            Learn More
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-ink/50">
          <span className="flex items-center gap-2">
            <Signal className="h-4 w-4" />
            UK-wide coverage
          </span>

          <span className="h-4 w-px bg-black/10" />

          <span>Trusted Professionals</span>

          <span className="h-4 w-px bg-black/10" />

          <span>Global eSIM</span>
        </div>
      </div>
    </section>
  );
}
