import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";
import { Footer } from "./components";
import { AppWrapper } from "./context/Store";

export const metadata: Metadata = {
  title: "Авто-диллер",
  description: "Лучшие в мире авто",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <Navbar />
        <AppWrapper>
         {children}
        </AppWrapper>
        <Footer />
      </body>
    </html>
  );
}
