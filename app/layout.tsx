import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "الخليج للستائر",
  description: "موقع متخصص لعرض أعمال الستائر بجودة عالية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        <Navbar />
        {children}
        <Footer />  
      </body>
    </html>
  );
}
