import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  return (
 


    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
    {/* Logo */}
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
                priority
              />
              <span className="text-[14px] font-medium text-indigo-650">UK</span>
            </Link>

    {/* Navigation */}
    <nav
      aria-label="Primary"
      className="hidden items-center gap-10 lg:flex"
    >
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-ink/70 transition-colors duration-300 hover:text-indigo-650"
        >
          {link.label}
        </a>
      ))}
    </nav>

    {/* Right Side */}
    <div className="flex items-center gap-3">
      <a
        href="#pricing"
        className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-650 md:inline-flex"
      >
        Get Started
      </a>

      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 transition-colors hover:border-indigo-300 hover:text-indigo-650 lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>
    </div>
  </div>
</header>
  );
}
