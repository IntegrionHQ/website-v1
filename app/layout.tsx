import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/app/components/ui/Footer"
export const metadata: Metadata = {
  title: "Intergion",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
