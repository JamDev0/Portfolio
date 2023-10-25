import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import type { Metadata } from 'next'
import { Chakra_Petch, Crimson_Text, Inter, Rubik_Mono_One } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const crimsonText = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson-text',
  display: 'swap',
  weight: '400'
})

const rubikMonoOne = Rubik_Mono_One({
  subsets: ['latin'],
  variable: '--font-rubik-mono-one',
  display: 'swap',
  weight: '400'
})

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  variable: '--font-chakra-petch',
  display: 'swap',
  weight: ['500', '400']
})

export const metadata: Metadata = {
  title: 'Juan Garcia',
  description: "Juan Garcia's portfolio",
}

const fonts = `${inter.variable} ${crimsonText.variable} ${rubikMonoOne.variable} ${chakraPetch.variable}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fonts} flex flex-col items-stretch min-h-screen`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
