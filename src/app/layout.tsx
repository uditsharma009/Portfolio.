import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udit Sharma | Performance Marketing Specialist",
  description:
    "Portfolio of Udit Sharma — Performance Marketing Specialist, Digital Marketing Enthusiast, SEO & Paid Media Practitioner based in Delhi, India. Expert in Meta Ads, Google Ads, Amazon Ads, DV360, SEO, and GA4.",
  keywords: [
    "Udit Sharma",
    "Performance Marketing",
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Amazon Ads",
    "DV360",
    "GA4",
    "Delhi",
  ],
  authors: [{ name: "Udit Sharma" }],
  openGraph: {
    title: "Udit Sharma | Performance Marketing Specialist",
    description:
      "Fresher with hands-on experience through live marketing projects, campaign simulations, and industry certifications.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-dark-bg text-cream">
        {children}
      </body>
    </html>
  );
}
