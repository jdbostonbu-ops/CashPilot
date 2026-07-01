import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CashPilot — Automated cash logistics for independent ATM operators",
  description:
    "Know which machines need cash before you leave the house. Skip wasted trips. Never lose a Friday night to an empty machine.",
  icons: {
    icon: "/favicon.svg",
  },
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => (
  <html lang="en" className={inter.variable} suppressHydrationWarning>
    <body suppressHydrationWarning>{children}</body>
  </html>
);

export default RootLayout;
