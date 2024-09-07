import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { League_Spartan } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
export const LeagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Circlepe FrontEnd Assignment",
  description: "Circlepe Frontend Development Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased  ${LeagueSpartan.className}`}
      >
        {children}
      </body>
    </html>
  );
}
