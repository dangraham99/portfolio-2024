import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Graham',
  description: 'Personal site for Daniel Graham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ` bg-stone-100 dark:bg-black dark:text-stone-100`}>{children}</body>
    </html>
  )
}
