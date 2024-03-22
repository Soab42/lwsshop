import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/nav/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LWS Shop | Learn With Sumit",
  description: "LWS Shopping Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="min-h-[65vh]">{children}</main>
        <footer className="w-11/12 lg:w-10/12 max-w-7xl mx-auto flex flex-wrap items-center justify-between py-10 lg:py-16">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
