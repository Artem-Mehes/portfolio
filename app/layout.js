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

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jetbrains-mono",
});

export const metadata = {
  title: "Artem Mehes",
  description: "Portfolio",
  metadataBase: new URL("https://www.artemmehes.dev/"),
  openGraph: {
    title: "Artem Mehes",
    description:
      "Experienced front-end developer with a passion for technology.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-inter bg-slate-900 text-primary antialiased selection:bg-teal-600 selection:text-slate-50 ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
