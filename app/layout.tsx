// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { Inter, Roboto } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/_components/Header";
import Footer from "@/_components/Footer";
import Provider from "./Provider";

// Optimize fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "FITNESS GYM",
  description: "WITH PATRIC POTTER - BUILD PERFECT BODY SHAPE",
};

// Separate viewport export (required in Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://clerk.accounts.dev" />
        <link rel="dns-prefetch" href="https://clerk.accounts.dev" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      
      <body className={`relative bg-black ${inter.className}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClerkProvider
            appearance={{
              baseTheme: dark,
              elements: {
                rootBox: "shadow-none",
              },
            }}
          >
            <Provider>
              <Header />
              {children}
              <Footer />
              <Toaster />
            </Provider>
          </ClerkProvider>
        </Suspense>

        {/* Load analytics after page is interactive */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}