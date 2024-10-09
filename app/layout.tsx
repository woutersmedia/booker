import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/providers/Auth";
import { NotificationsProvider } from "@/providers/Notifications";
import { getSession } from "@/auth/options";
import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from "@vercel/toolbar/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Booker",
  description: "Generated by create next app"
};

export default async function RootLayout({
                                           children
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const notProduction = process.env.NODE_ENV !== 'production';

  return (
    <AuthProvider session={session}>
      <Analytics />
      <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NotificationsProvider>
          {children}
        </NotificationsProvider>
        {notProduction && <VercelToolbar />}
      </body>
      </html>
    </AuthProvider>
  );
}
