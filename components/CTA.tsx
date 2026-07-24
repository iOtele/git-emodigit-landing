import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-20 text-center shadow-lift sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]"
          aria-hidden="true"
        />

        <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Everything you need. One platform.
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-balance text-white/70">
          Join thousands across the UK already living smarter with Emo Media.
        </p>

        <a
          href="#pricing"
          className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-lg font-semibold text-indigo-650 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
        >
          Get Started Today
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
