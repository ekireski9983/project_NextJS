import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the font to the head */}
        <style>{inter.styles}</style>
      </head>
      <body className={inter.className}>
        <header className="py-2">
          <nav className="w-full">
            <div className="mx-w-5xl max-auto px-6 md:px-12 xl:px-6">
              <div className="flex flex-wrap items-center justify-between">
                <a href="/">LOGO</a>
                <div>
                  <ul className="flex flex-row gap-6">
                    <li>
                      <a href="/">home</a>
                    </li>
                    <li>
                      <a href="/about">about</a>
                    </li>
                    <li>
                      <a href="/contact">contact</a>
                    </li>
                    <li>
                      <a href="/work">work</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-5xl max-auto px-6 md:px-12 xl:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}