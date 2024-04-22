import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yogimulyana.vercel.app"),
  title: {
    default: "Yogi Mulyana Prayoga",
    template: `%s | Yogi Mulyana Prayoga`,
  },
  description:
    "An online portfolio and blog by Yogi Mulyana Prayoga. Showcase of my projects, and some of my thoughts about website development.",
  authors: [
    { name: "Yogi Mulyana Prayoga", url: "https://www.yogimulyana.vercel.app" },
  ],
  alternates: {
    canonical: "https://www.yogimulyana.vercel.app",
  },
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="bg-white dark:bg-[#0e1111]">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
