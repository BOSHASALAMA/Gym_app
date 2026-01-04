import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Header } from "@/_components/Header";
import { Suspense } from "react";
import Provider from "./Provider";
import Footer from "@/_components/Footer";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
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
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <Provider>
          <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
            <head>
              {/* Preconnect to critical domains */}
              <link rel="preconnect" href="https://clerk.accounts.dev" />
              <link rel="dns-prefetch" href="https://clerk.accounts.dev" />
              <link rel="preconnect" href="https://images.unsplash.com" />
              <link rel="dns-prefetch" href="https://images.unsplash.com" />
            </head>

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
