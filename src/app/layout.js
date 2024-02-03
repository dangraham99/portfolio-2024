import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/util/Header'

const inter = Inter({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export const metadata = {
  title: 'Daniel Graham',
  description: 'Daniel Graham. Software and web developer. Get in touch.',
}

export const viewport = {

  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className + ` bg-zinc-100 dark:bg-black dark:text-stone-100 w-full`}>
        <Header />
        <div class="mx-auto xl:w-1/2 md:w-2/3 px-8  min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
