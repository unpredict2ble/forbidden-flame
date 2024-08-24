import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
  title: "Forbidden Flames",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <Providers><main className="container mx-auto p-10">{children}</main></Providers>
      </body>
    </html>
  );
}
