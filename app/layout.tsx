import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HVD",
  description: "A fun and playful Valentine page",
  keywords: ["valentine", "love", "romantic", "fun", "emoji"],
  authors: [{ name: "Cupid" }],
  openGraph: {
    title: "Will You Be My Valentine? 💖",
    description: "A fun Valentine page.",
    url: "https://hvd.vercel.app",
    siteName: "Valentine Page",
    images: [
      {
        url: "https://hvd.vercel.app/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will You Be My Valentine? 💖",
    description: "A fun Valentine page with floating hearts and emojis.",
    images: ["https://hvd.vercel.app/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
