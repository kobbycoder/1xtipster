import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Head from "next/head";
import "animate.css";
import "./globals.css";

export const metadata = {
  title: "Free - Daily Betting prediction",
  description: "Free betting sporty 1xbet betway predictions",
  keywords: ["1xbet", "Sporty", "Betting"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1236839468535523"
          crossorigin="anonymous"
        ></script>{" "}
      </Head>
      <body>
        {/* Header */}
        <Header />
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
