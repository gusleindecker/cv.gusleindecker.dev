import type { Metadata } from "next";
import { connection } from "next/server";
import { getExperienceIntroduction } from "@/lib/experience";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  await connection();

  return {
    title: `${process.env.NEXT_PUBLIC_FULL_NAME || "Gustavo Leindecker Pereira"} - Résumé`,
    description: `${getExperienceIntroduction()} Specializing in Vue.js with React and Next.js experience.`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
