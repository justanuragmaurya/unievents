import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google"
import Navbar from "./navbar";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
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
        <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-10 opacity-70",
        )}
      />
      </body>
    </html>
  );
}
