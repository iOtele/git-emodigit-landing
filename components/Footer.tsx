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
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="text-center lg:text-left">
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
              <span className="text-[14px] font-medium text-indigo-650">
                UK
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-base leading-7 text-ink/60">
              Your trusted developer.
            </p>
          </div>

          {/* Social */}
          <nav aria-label="Social media" className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 text-ink/50 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-650"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-center text-sm text-ink/50 lg:flex-row lg:text-left">
          <div>
            <p>© 2026 Emo Media UK. All rights reserved.</p>
            <p className="mt-1">Powered by Emo Media UK.</p>
          </div>

          <a
            href="mailto:info@emodigit.com"
            className="break-all transition-colors duration-300 hover:text-indigo-650 sm:break-normal"
          >
            info@emodigit.com
          </a>
        </div>
      </div>
    </footer>
  );
}
