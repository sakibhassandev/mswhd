import type { Metadata } from "next";
import { poppins } from "./ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "MSWHD | Home",
  description: "MSWHD is a platform for watching movies and tv shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
