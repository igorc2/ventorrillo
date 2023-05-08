import getCurrentUser from '@/actions/getCurrentUser'
import { Inter, Montserrat } from '@next/font/google'
import { Client } from './client'

export const metadata = {
  title: 'Ventorrillo App',
  description: 'Ventorrillo app',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <head />
      <body>
        <main className={`${montserrat.className} ${inter.variable}`}>
          <Client currentUser={currentUser}>
            {children}
          </Client>
        </main>
      </body>
    </html>
  )
}
