import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_FULL_NAME || "Your Name"} - Resume`,
  description:
    "Senior Frontend Engineer | Vue.js | React | TypeScript | Nuxt | Next.js | Tailwindcss | Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
