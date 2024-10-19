import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { InternetCheck } from "@/utils";
import { AuthProvider, EFCircular } from "@/lib";
import { NextUIProvider } from "@nextui-org/system";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: {
    template: "%s | Klone",
    default: "Klone",
  },
  description: "Klone Admin Portal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${EFCircular.variable} debug-screens font-EFCircular`}>

        <AuthProvider session={session}>

          <NextUIProvider>

            {children}

          </NextUIProvider>

          <InternetCheck />

        </AuthProvider>

        <Toaster
          position="top-center"
          reverseOrder={false}
        />

      </body>
    </html>
  );
}
