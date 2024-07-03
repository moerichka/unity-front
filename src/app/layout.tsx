import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "styles/main.scss";

import MainLayout from "components/layouts/MainLayout";

import Providers from "./providers";

const inter = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Test",
  description: "Test telegram bot",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://telegram.org/js/telegram-web-app.js" />
      </head>
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
