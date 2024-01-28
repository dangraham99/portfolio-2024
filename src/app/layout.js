import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/util/Header'

const inter = Inter({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export const metadata = {
  title: 'Daniel Graham',
  description: 'Personal site for Daniel Graham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ` bg-stone-100 dark:bg-black dark:text-stone-100`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
