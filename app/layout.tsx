import type React from "react"
import type { Metadata } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// ✅ Fonts
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

// ✅ Metadata
export const metadata: Metadata = {
  title: "FAVTECH - Multi-Service Technology Solutions",
  description:
    "Professional web development, cybersecurity, design, and business services by Omeiri Favour",
  generator: "v0.app",
}

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Fix for iPhone Safari scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ iOS WebApp / Safari compatibility */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* ✅ Fallback favicon for Safari */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`font-sans ${outfit.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
