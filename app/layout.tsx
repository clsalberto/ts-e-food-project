import type { Metadata } from 'next'
import { Nunito as FontSans } from 'next/font/google'
import { Header } from '~/components/layout/header'
import { Logo } from '~/components/layout/logo'
import { Sidebar } from '~/components/layout/sidebar'
import { ThemeProvider } from '~/components/theme-provider'
import { ThemeToggle } from '~/components/theme-toggle'
import { cn } from '~/lib/utils'
import './globals.css'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'E-food',
  description: 'Controle de pedidos e delivery para seu restaurante.',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header>
            <div className='flex items-center gap-2'><Sidebar /><Logo /></div>
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
