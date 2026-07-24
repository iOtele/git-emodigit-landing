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
    <section id="services" className="relative py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-650">
            Services
          </p>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Everything runs on one account
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/60 sm:text-lg">
            Three powerful services designed to simplify your everyday life.
            Subscribe to one—or enjoy the convenience of having them all in a
            single platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-white" strokeWidth={2.25} />
                </div>

                <h3 className="text-xl font-semibold text-ink">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow text-base leading-7 text-ink/60">
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
