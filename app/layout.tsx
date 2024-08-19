import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google"
import Navbar from "./navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const popins = Poppins({subsets: ["latin"],weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]})
export const metadata: Metadata = {
  title: "Uni Events",
  description: "Your gateway to every party, hackathon, and workshop on campus.Never miss a beat – find, track, and attend events that shape your college experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
