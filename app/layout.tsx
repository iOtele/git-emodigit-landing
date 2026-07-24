import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Emo Media UK | Smart Home, Local Services & Global eSIM",
  description:
    "Connect your home appliances, hire trusted local workmen, and stay connected worldwide with our global eSIM.",
  icons: [{ rel: "icon", url: "/logo.ico", type: "image/x-icon" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="font-body">{children}</body>
    </html>
  );
}
