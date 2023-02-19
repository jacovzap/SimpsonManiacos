import { Open_Sans } from '@next/font/google'
import NavBar from '../components/Navbar'
//export styles from main.scss
import '../styles/main.scss'

const openSans = Open_Sans({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={openSans.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
