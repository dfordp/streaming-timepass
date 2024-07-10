import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/providers/theme"
import { CustomToaster } from "@/components/shared/CustomToaster";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Fada Club",
  description: "We believe that passionate tech enthusiasts often struggle to find a supportive environment due to college pressures and profit-driven communities. Despite the abundance of such groups, they can be exclusive, complex, or focused on numbers and money. Here, you'll find a platform to showcase and develop your projects alongside our core team. You can bring your ideas to life without handling everything alone, while learning about various domains. Join us to collaborate, innovate, and grow in a truly supportive and inclusive community!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <CustomToaster/>
          </ThemeProvider>
      </body>
    </html>
  );
}
