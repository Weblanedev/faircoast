import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://th.bing.com/th/id/R.67ee88df7f8fb15d9c54a261bb38a234?rik=gAWDR%2fHFjEpJMA&pid=ImgRaw&r=0',
        href: 'https://th.bing.com/th/id/R.67ee88df7f8fb15d9c54a261bb38a234?rik=gAWDR%2fHFjEpJMA&pid=ImgRaw&r=0',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'https://th.bing.com/th/id/R.67ee88df7f8fb15d9c54a261bb38a234?rik=gAWDR%2fHFjEpJMA&pid=ImgRaw&r=0',
        href: 'https://th.bing.com/th/id/R.67ee88df7f8fb15d9c54a261bb38a234?rik=gAWDR%2fHFjEpJMA&pid=ImgRaw&r=0',
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              {/* <SiteBlob /> */}
              <div className="flex-1">{children}</div>

              <SiteFooter />
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
