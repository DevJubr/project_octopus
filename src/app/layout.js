import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/AppBar";

const inter = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "A simple blog app",
  description: "A simple blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1440px] w-[90%] m-0 m-auto overflow-x-hidden">
          <AppBar />
          {children}
        </div>
      </body>
    </html>
  );
}
