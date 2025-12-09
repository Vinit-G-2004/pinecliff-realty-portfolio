import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pinecliff Realty — Portfolio",
  description: "Single-scroll premium portfolio",
  icons: { icon: "/favicon.png" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm -z-10"></div>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
