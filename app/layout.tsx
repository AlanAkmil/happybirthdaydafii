import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Balloons from "@/components/Balloons";
import ConfettiField from "@/components/ConfettiField";
import Footer from "@/components/Footer";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Happy Birthday, Dafi!",
  description: "Selamat ulang tahun, Dafi! Dari Alan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body
        className={`${baloo.variable} ${nunito.variable} font-body bg-cream text-ink relative overflow-x-hidden`}
      >
        <ConfettiField />
        <Balloons />
        <NavBar />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
