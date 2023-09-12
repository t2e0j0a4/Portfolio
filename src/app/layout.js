import './globals.css'
import { Epilogue } from "next/font/google";
import Navbar from '@/app/components/Navbar/Navbar'
import Contact from '@/app/components/Contact/Contact'

export const metadata = {
  title: 'Nagateja | Portfolio',
  description: 'Shows a full credential of mine as a developer in this portfolio.',
}

const epilogue = Epilogue({ subsets:['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Navbar/>
        {children}
        <Contact/>
      </body>
    </html>
  )
}
