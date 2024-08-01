import "~/styles/globals.css";

import { type Metadata } from "next";

import { Inter as FontSans } from "next/font/google"

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils"


export const metadata: Metadata = {
  title: "Gym workout tracker",
  description: "An app to track your workouts",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" 
      className={cn(
        "min-h-screen bg-background font-sans antialiased dark",
        fontSans.variable
      )}
    >
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
