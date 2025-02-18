import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { AuthProvider } from "@/providers/Auth";
import { ToastProvider } from "@/providers/Toast";
import { getSession } from "@/auth/options";
import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";
import { LangParams } from "@/types/Locale";
import DictionaryProvider from "@/providers/Dictionary";
import { getDictionary } from "./dictionaries";
import { RootTemplate } from "@/templates/root";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export const metadata: Metadata = {
  title: {
    template: "%s | Booker",
    default: "Booker",
  },
  description: "Booker, the all-in-one booking platform",
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: LangParams;
}>) => {
  const lang = (await params).lang;
  const session = await getSession();
  const notProduction = process.env.NODE_ENV !== "production";
  const dictionary = await getDictionary(lang);

  return (
    <AuthProvider session={session}>
      <DictionaryProvider dictionary={dictionary}>
        <Analytics />
        <html lang={lang}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white grid grid-cols-3 md:grid-cols-12 min-h-screen relative`}
          >
            <ToastProvider>
              <RootTemplate>{children}</RootTemplate>
              {notProduction && <VercelToolbar />}
            </ToastProvider>
          </body>
        </html>
      </DictionaryProvider>
    </AuthProvider>
  );
};

export default RootLayout;
