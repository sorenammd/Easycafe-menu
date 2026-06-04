import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "swiper/css";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easycafe | کافه رستوران ایزی، طعم خوش قهوه و لحظه های خوب",
  description: "ایزی کافه جایی برای قهوه های باکیفیت، غذاهای خوش طعم و قرارهای صمیمی در فضایی گرم و متفاوت است.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Easycafe | کافه رستوران ایزی، طعم خوش قهوه و لحظه های خوب",
    description: "ایزی کافه جایی برای قهوه های باکیفیت، غذاهای خوش طعم و قرارهای صمیمی در فضایی گرم و متفاوت است.",
    images: [
      {
        url: "/banner.png",
        alt: "بنر منوی کافه رستوران ایزی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easycafe | کافه رستوران ایزی، طعم خوش قهوه و لحظه های خوب",
    description: "ایزی کافه جایی برای قهوه های باکیفیت، غذاهای خوش طعم و قرارهای صمیمی در فضایی گرم و متفاوت است.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
