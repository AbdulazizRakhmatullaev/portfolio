import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider"
import PageWrapper from './components/fm';
import { AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
  title: "Abdulaziz R",
  description: "Created by Abdulaziz R.",
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="select-none">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatePresence mode="wait">
            <PageWrapper>
              <main id="main">
                <div className="concol">{children}</div>
              </main>
            </PageWrapper>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
