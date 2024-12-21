import './globals.css'
import { Bricolage_Grotesque, Work_Sans } from 'next/font/google'

const bricolageGrotesque = Bricolage_Grotesque({ 
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const metadata = {
  title: 'Prmise',
  description: 'Make and keep promises to yourself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} ${workSans.variable} font-primary bg-off-white`}>
        {children}
      </body>
    </html>
  )
}

