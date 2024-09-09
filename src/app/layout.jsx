import { Inter } from "next/font/google";
import { UserInfo } from "../components/UserInfo";

import "./globals.css";
import Link from "next/link";
import { Providers } from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spezialist",
  description: "Just what the world needs: a Reddit clone.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="border-b border-zinc-200 p-4 flex items-center shadow-lg sticky top-0 bg-green-700 bg-opacity-65 backdrop-blur-sm">
            <Link href="/" className="text-xl text-green-200">
              Spezialist
            </Link>
            <Link
              href="/add-post"
              className="ml-10 hover:bg-zinc-300 p-2 rounded bg-green-300 text-orange-950"
            >
              Add post
            </Link>
            <div className="ml-auto">
              <UserInfo />
            </div>
          </header>
          <main className="max-w-screen-xl lg:mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
