import type React from "react"
import type { Metadata } from "next"
import { Archivo, Nunito_Sans} from "next/font/google"
import "./style.css"


const _archivo = Archivo({ subsets: ["latin"] })
const _nunitoSans = Nunito_Sans({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Sisters in Birth - Maternal Health & Midwifery Care",
  description:
    "Empowering women through prenatal, birth, and postpartum care. Increasing access to midwifery services and reducing maternal mortality in Mississippi.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div lang="en">
      <div className={` ${_archivo.className} ${_nunitoSans.className}  antialiased`}>
        {children}
      </div>
    </div>
  )
}
