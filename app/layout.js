import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uden Shakya',
  description: 'Portfolio Website of Uden Shakya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-gray-900 min-h-screen max-w-full text-white'>
          <div className='container mx-auto p-4 '>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
