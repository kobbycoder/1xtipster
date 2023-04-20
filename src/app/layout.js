import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import "./globals.css";

export const metadata = {
  title: "Free - Daily Betting prediction",
  description: "Free betting sporty 1xbet betway predictions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
