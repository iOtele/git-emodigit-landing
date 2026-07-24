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
    <section id="pricing" className="relative py-24 lg:py-60">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xl font-semibold uppercase tracking-widest text-indigo-650">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Simple plans, no surprises
          </h2>
        </div>

        <div className="mt-36 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.highlighted
                  ? "bg-brand-gradient text-white shadow-lift"
                  : "border border-black/[0.06] bg-white text-ink shadow-soft hover:shadow-lift"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-indigo-650 shadow-soft">
                  Most popular
                </span>
              )}

              <h3
                className={`text-lg font-semibold uppercase tracking-wide ${
                  plan.highlighted ? "text-white/70" : "text-ink/50"
                }`}
              >
                {plan.name}
              </h3>

              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={plan.highlighted ? "text-white/70" : "text-ink/50"}
                >
                  /month
                </span>
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-base"
                  >
                    <Check
                      className={`h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-indigo-650"
                      }`}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-10 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-white text-indigo-650 hover:bg-white/90"
                    : "bg-ink text-white hover:bg-indigo-650"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
