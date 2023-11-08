import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export const robotoMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--roboto-mono",
});

export const metadata = {
  title: "Artem Mehes",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark bg-gray-900 text-neutral-300 antialiased selection:bg-teal-600 selection:text-white",
          inter.className,
          robotoMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
