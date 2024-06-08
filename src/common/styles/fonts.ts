import { Inconsolata, Inter, Poppins, Roboto_Slab } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700"],
});

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-roboto-slab",
  weight: ["400", "500", "600", "700"],
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-inconsolata",
  weight: ["400", "500", "600", "700"],
});
