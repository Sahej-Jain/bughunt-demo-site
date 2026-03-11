import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "ShopBug Store",
  description: "A simple e-commerce app with intentional bugs."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="page-container">{children}</main>
      </body>
    </html>
  );
}
