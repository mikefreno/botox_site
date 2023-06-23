import Navbar from "~/app/Navbar";
import "src/styles/globals.css";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Upper East Clinicians</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1 viewport-fit=cover"
      />
      <body className="max-w-screen scroll-x-disabled overflow-x-clip">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
