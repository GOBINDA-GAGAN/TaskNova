import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskNova",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <div className="min-h-screen bg-gradient-to-br from-white via-green-100 to-green-200 dark:from-[#a9adb7] dark:via-[#1e293b] dark:to-[#1965cf] text-gray-900 dark:text-white">
            <ThemeProvider attribute="class" defaultTheme="light">
              <Header />
              <main className="min-h-screen px-4 py-8">{children}</main>
              <Footer />
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
