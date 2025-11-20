import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "AI Tutor",
  description: "Your Private AI Tutor - Modern dark-themed interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#121212]">
          <Sidebar />
          <main className="lg:ml-[280px] min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
