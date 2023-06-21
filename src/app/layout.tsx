import Navbar from "~/components/Navbar";
import "src/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>Upper East Clinicians</title>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
