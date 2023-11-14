import { Inter } from "next/font/google";
import dayjs from "dayjs";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "lib/utils";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

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
          "bg-gray-900 text-slate-400 font-sans antialiased selection:bg-teal-600 selection:text-white",
          inter.variable,
          robotoMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
