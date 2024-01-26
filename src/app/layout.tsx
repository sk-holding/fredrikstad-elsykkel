import { Roboto_Flex } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
