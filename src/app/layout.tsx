import { Roboto_Flex } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";
// import Script from "next/script";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=a7567872-d0aa-4b6e-9c0d-fd6a7c08e798"
        />
      </head> */}
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
