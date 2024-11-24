import {
  Montserrat as FontMono,
} from "next/font/google"

export const fontSans = FontMono({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
