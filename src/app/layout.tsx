import Navbar from "~/app/Navbar";
import "src/styles/globals.css";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Upper East Clinicians</title>
      <meta></meta>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
