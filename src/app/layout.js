import Header from "@/components/Header";
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

        {/* Hero */}

        {children}
        
        </body>
    </html>
  );
}
