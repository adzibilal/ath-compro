import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Maps from "@/components/Maps";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. Arga Teknologi Handal",
  description: "Solusi teknologi terpercaya untuk kebutuhan konstruksi dan teknologi Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <SplashScreen />
          <Navbar />
          {children}
          <Maps />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
