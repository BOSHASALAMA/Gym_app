import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/_components/Header";
import { Suspense } from "react";
import Provider from "./Provider";
import Footer from "@/_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITNESS GYM",
  description: "WITH PATRIC POTTER - BUILD PERFECT BODY SHAPE",
  viewport: "width=device-width, initial-scale=1",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          elements: {
            rootBox: "shadow-none",
          },
        }}
        dynamic
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
        afterSignInUrl="/"
        afterSignUpUrl="/"
      >
        <Provider>
          <html
            lang="en"
          
          >
              <link rel="dns-prefetch" href="https://clerk.accounts.dev" />
              <link
                rel="preconnect"
                href="https://clerk.accounts.dev"
                crossOrigin="anonymous"
              />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />

            <body className="relative bg-black ">
              <Header />

              {children}
              <Footer />
                    <Toaster />
        
            </body>
          </html>
        </Provider>
      </ClerkProvider>
    </Suspense>
  );
}
