"use client";
// import sayHello from "@/lib/sayHello";

import { ReactNode, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
