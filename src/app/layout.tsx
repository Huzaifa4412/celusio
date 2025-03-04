import type { Metadata } from "next";
import "./globals.css";
import { font } from "@/utils/font";

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
      <body className={`antialiased ${font.urbanist.className}`}>
        {children}
      </body>
    </html>
  );
}
