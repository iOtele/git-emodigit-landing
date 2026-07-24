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
    <section id="why-us" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-indigo-50/40 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xl font-semibold uppercase tracking-widest text-indigo-650">
              Why choose us
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built to be trusted with your home and your data
            </h2>
            <p className="mt-4 max-w-md text-balance text-lg leading-relaxed text-ink/60">
              We designed Emo Media around the things people actually worry
              about security, cost, and speed so you can get on with your day.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <Icon
                    className="h-5 w-5 text-indigo-650 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-sm font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink/60">
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
