import "src/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./Navbar";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Upper East Clinicians</title>
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
