'use client'
import Navbar from '@/components/Navbar'
import theme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter, Montserrat } from '@next/font/google'
import styles from '../styles/component.module.css'


const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className={`${montserrat.className} ${inter.variable}`}>
          <ChakraProvider theme={theme}>
            <Navbar>
              {children}
            </Navbar>
          </ChakraProvider>
        </main>
      </body>
    </html>
  )
}
