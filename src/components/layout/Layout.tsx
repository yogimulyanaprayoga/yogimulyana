import * as React from "react";

// import sayHello from "@/lib/sayHello";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Navbar";

// import { sayHelloFlag } from "@/constants/env";
import { PreloadProvider } from "@/context/PreloadContext";

// let saidHello = !sayHelloFlag;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <PreloadProvider>
        <div id="skip-nav">{children}</div>
      </PreloadProvider>
      <Footer />
    </>
  );
}
