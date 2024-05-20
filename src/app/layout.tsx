import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const dana = localFont({
  src: [
    {
      path: './fonts/woff2/Dana-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/woff2/Dana-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-dana',
})

export const metadata: Metadata = {
  title: "مسابقه الگوریتم تریدینگ امیرکبیر",
  description: "مسابقه الگوریتم تریدینگ امیرکبیر (ATC)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${dana.variable} font-sans`}>{children}</body>
    </html>
  );
}
