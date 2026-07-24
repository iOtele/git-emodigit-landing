import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emo Media UK | Smart Home, Local Services & Global eSIM",
  description:
    "Connect your home appliances, hire trusted local workmen, and stay connected worldwide with our global eSIM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
