import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "OAuth | CS 391",
  description: "MP-6 OAuth application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex items-center justify-center w-screen h-screen bg-[linear-gradient(to_bottom,#27FB6B,#32E875)] antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
