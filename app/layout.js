import { Inter } from "next/font/google";
import dayjs from "dayjs";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

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
  metadataBase: new URL("https://www.artemmehes.dev/"),
  openGraph: {
    title: "Artem Mehes",
    description: "Portfolio",
    url: "https://www.artemmehes.dev/",
    images: ["https://www.artemmehes.dev/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-900 font-sans text-primary antialiased selection:bg-teal-600 selection:text-slate-50 ${inter.variable} ${robotoMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
