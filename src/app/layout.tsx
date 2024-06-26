import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/query-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ambisius Coding Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4 md:p-8">
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
