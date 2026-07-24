import { Facebook, Instagram, Twitter, Linkedin, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
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
            </div>
            <p className="mt-2 text-base text-ink/50">Your trusted developer.</p>
          </div>

          <nav aria-label="Social media" className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] text-ink/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-650/30 hover:text-indigo-650"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-black/[0.06] pt-6 text-base text-ink/40 sm:flex-row">
          <p>Powered by Emo Media UK.</p>
          <a
            href="mailto:info@emodigit.com"
            className="transition-colors duration-300 hover:text-indigo-650"
          >
            info@emodigit.com
          </a>
        </div>
      </div>
    </footer>
  );
}
