import type { Metadata } from "next";
import { Inter, Alata, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const alata = Alata({ subsets:  ["latin"], weight: ["400"], variable: "--font-alata" });
const tajawal = Tajawal({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-tajawal" })

export const metadata: Metadata = {
  title: "Antonio Berrones",
  description: "Graduate with bachelor’s and master’s degrees in Electrical Engineering and Computer Science from MIT. With experience ranging from full-stack software engineering at a small software startup, product management at a large financial firm and academic research as part of my master’s thesis, I have developed a diverse and unique skillset. I am drawn to both art and technology, with particular interest in projects where they intersect.",
  keywords: "Antonio, Berrones, MIT, software engineer, full-stack engineer, software developer, ai, machine learning, photography, film",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${alata.variable} ${tajawal.variable}`}>{children}</body>
    </html>
  );
}
