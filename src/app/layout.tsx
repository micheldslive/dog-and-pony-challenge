'use client'
import { Metadata } from 'next'

import { ThemeProvider } from 'next-themes'
import { Roboto } from 'next/font/google'

import '@/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Dog And Pony Studios - Offices',
  description: 'An application to list all Dog And Pony Studio Offices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='text-primary-grey' lang='en'>
      <body className={`${roboto.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
