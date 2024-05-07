import type { Metadata } from "next";
import "./globals.css";
import  Navbar  from "./components/header/Navbar";
import  Footer  from "./components/footer/Footer";
import { AppWrapper } from "./context/Store";

export const metadata: Metadata = {
  title: "Авто-диллер",
  description: "Лучшие в мире авто",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <Navbar/>
        <AppWrapper>
         {children}
        </AppWrapper>
        <Footer/>
      </body>
    </html>
  );
}
