import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"]
})
export const metadata = {
  title: 'Course Store',
  description: 'Web Development Courses',
  keywords: "web development, web design, javascript, angular, vue, html, css"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
