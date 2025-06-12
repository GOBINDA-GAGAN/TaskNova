import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskNova",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* header */}
          <Header />
          <main>{children}</main>

          {/* footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
