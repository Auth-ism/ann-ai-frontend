import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ann AI",
  description: "Ann AI for pay as you go API calls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const featureSections = [
    {
      tag: "QUANTUM LEVEL PROTECTION",
      title: "You and for you only",
      description:
        "As part of our open-source initiative, the project is fully transparent and trusted by all our users. And with cutting-edge, quantum-level encryption technology, your data is protected like never before",
      src: "/image 1.png",
    },
    {
      tag: "ACTIVELY DEVELOPING",
      title: "Don't miss a thing",
      description:
        "With regular updates, new features, and community-driven improvements keeping you ahead of the curve. Our team will keep innovating to deliver a secure, seamless experience",
      alignRight: true,
      src: "/image 2.png",
    },
    {
      tag: "CUSTOMERS FIRST",
      title: "Your feedback drives everything we do",
      description:
        "Want a feature you think would be nice to have? Or having trouble using existing features? You can reach out to us anytime — we're just an email away!",
      src: "/image 4.png",
    },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`} style={{ margin: 0, padding: 0, position: "relative" }}>
        {children}
      </body>
    </html>
  );
}
