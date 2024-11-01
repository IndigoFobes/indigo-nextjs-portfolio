import type { Metadata } from "next";
import "./globals.css";
import { Monoton, Fira_Code } from "next/font/google";

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
  variable: "--font-monoton",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "300",
  style: ["normal"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Indigo Codes",
  description: `Indigo Fobes' Web Development Portfolio`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monoton.variable} ${firaCode.variable}`}>
        <div className="container">
          <div className={"wrapper"}>{children}</div>
        </div>
      </body>
    </html>
  );
}
