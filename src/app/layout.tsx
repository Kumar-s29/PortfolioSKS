import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CliTerminal from "./components/CliTerminal";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kumar Swamy | Full Stack Engineer",
  description: "Portfolio of Swayamvarapu Kumara Swamy, a Full Stack Developer specializing in premium web experiences and scalable architectures.",
};

import { ProfileProvider } from "./context/ProfileContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${jetBrainsMono.variable} font-sans bg-bg text-text-primary antialiased selection:bg-accent-green/30 selection:text-accent-green`}
      >
        <ProfileProvider>
          <div className="relative min-h-screen">
            {/* Scanline Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
              <div className="scanline" />
            </div>
            
            {children}
            <CliTerminal />
          </div>
        </ProfileProvider>
      </body>
    </html>
  );
}
