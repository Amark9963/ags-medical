import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-display", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "AGS Medical | Medical Products & Equipment",
    template: "%s | AGS Medical",
  },
  description:
    "Medical products and equipment from AGS Medical.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "AGS Medical | Medical Products & Equipment",
    description:
      "A reliable and professional source for your medical product needs.",
    images: [
      {
        url: "/og-corporate.png",
        width: 1731,
        height: 909,
        alt: "AGS Medical corporate website redesign preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGS Medical | Medical Products & Equipment",
    description:
      "A reliable and professional source for your medical product needs.",
    images: ["/og-corporate.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
