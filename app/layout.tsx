import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purchase Tracker",
  description: "Track purchases to see total amount spent at end of year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={roboto.className}>
          <Header />
          <main className='container'>{children}</main>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}



