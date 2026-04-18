import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { EnvironmentProvider } from "@/context/EnvironmentContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swayamvarapu Kumara Swamy | Full Stack Developer",
  description: "Portfolio of Swayamvarapu Kumara Swamy, a Full Stack Developer specializing in React.js, Python, and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans bg-background text-on-surface antialiased min-h-screen selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <EnvironmentProvider>
          {children}
        </EnvironmentProvider>
      </body>
    </html>
  );
}
