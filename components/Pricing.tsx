import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Smart Home",
    price: "£1.99",
    features: ["Mobile Control", "Easy Setup", "Secure Access"],
    cta: "Subscribe",
  },
  {
    name: "Workmen Finder",
    price: "£2.99",
    features: [
      "Local Tradesmen",
      "One-click Payment",
      "Verified Professionals",
    ],
    cta: "Start Now",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-650">
            Pricing
          </p>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Simple plans, no surprises
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/60 sm:text-lg">
            Choose the plan that fits your lifestyle. Transparent pricing with
            no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-brand-gradient text-white shadow-lift"
                  : "border border-black/5 bg-white text-ink shadow-soft hover:shadow-lift"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-white px-4 py-1 text-xs font-semibold text-indigo-650 shadow-soft">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  plan.highlighted ? "text-white/70" : "text-ink/50"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <span className="font-mono text-5xl font-semibold">
                  {plan.price}
                </span>

                <span
                  className={`pb-2 ${
                    plan.highlighted ? "text-white/70" : "text-ink/50"
                  }`}
                >
                  /month
                </span>
              </div>

              <ul className="mt-8 flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-indigo-650"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "bg-white text-indigo-650 hover:bg-white/90"
                    : "bg-ink text-white hover:bg-indigo-650"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
