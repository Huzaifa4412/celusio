import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "Celusio",
  description: "The growth that your brand needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${urbanist.className}`}>{children}</body>
    </html>
  );
}
