import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "swiper/css";
import "./globals.css";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easycafe | منوی کافه رستوران ایزی",
  description: "منوی دیجیتال کافه رستوران ایزی با تم مشکی و نارنجی.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Easycafe | منوی کافه رستوران ایزی",
    description: "منوی دیجیتال کافه رستوران ایزی با تم مشکی و نارنجی.",
    images: [
      {
        url: "/banner.png",
        alt: "بنر منوی کافه رستوران ایزی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easycafe | منوی کافه رستوران ایزی",
    description: "منوی دیجیتال کافه رستوران ایزی با تم مشکی و نارنجی.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
