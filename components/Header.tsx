import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/70 backdrop-blur-xl py-2 lg:py-3">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="#"
          className="flex items-end "
          aria-label="Emo Media UK home"
        >
          <Image
            src="/logo.png"
            alt="Emo Media UK logo"
            width={90}
            height={90}
            className="p-1"
          />
          <span className="text-[14px] font-medium text-gray-500">UK</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-ink/70 transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-650"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
