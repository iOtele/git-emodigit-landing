import {
  Lock,
  Rocket,
  Wallet,
  BadgeCheck,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Every transaction is encrypted end-to-end, so your card details stay yours.",
  },
  {
    icon: Rocket,
    title: "Fast Setup",
    description:
      "Go from download to fully connected home in under five minutes.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Transparent monthly plans with no hidden fees or long-term contracts.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Professionals",
    description:
      "Every workman is ID-checked and rated by real customers near you.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Stay connected in over 40 countries with a single eSIM profile.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Built for your phone from the ground up — no desktop required.",
  },
];

export default function Features() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-indigo-50/40 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-650">
              Why choose us
            </p>

            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Built to be trusted with your home and your data
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-ink/60 sm:text-lg">
              We designed Emo Media around the things people actually worry
              about, security, cost, and speed, so you can get on with your day.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-black/5 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                    <Icon
                      className="h-5 w-5 text-indigo-650 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2.25}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-ink/60">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
