import { Home, MapPinned, Globe2, type LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Smart Home Control",
    description: (
      <>
        Connect all your home appliances from your mobile for only{" "}
        <span className="font-mono font-semibold text-ink">£1.99/month</span>.
      </>
    ),
  },
  {
    icon: MapPinned,
    title: "Find Local Workmen",
    description: (
      <>
        Find trusted workmen using your postcode for{" "}
        <span className="font-mono font-semibold text-ink">£2.99/month</span>{" "}
        and pay securely with a single click.
      </>
    ),
  },
  {
    icon: Globe2,
    title: "Global eSIM",
    description: (
      <>
        Travel with our global eSIM and enjoy{" "}
        <span className="font-mono font-semibold text-ink">
          500 MB of FREE data
        </span>{" "}
        when you get started.
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-60 h-[100vh] ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
        <div className=" mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold uppercase tracking-widest text-indigo-650">
            Services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everything runs on one account
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-ink/60">
            Three ways to make your day easier: pick one, or bring them all
            together.
          </p>
        </div>

        <div className="mt-36 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative rounded-3xl border border-black/[0.06] bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient shadow-soft transition-transform duration-300 group-hover:scale-105">
                  <Icon
                    className="h-5 w-5 text-white"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-ink/60">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
