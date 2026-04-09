import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Felipe Velasco Hernández | Ingeniero DevOps / DevSecOps',
  description: 'Ingeniero DevOps / DevSecOps con más de 4 años de experiencia en automatización, infraestructura cloud, Kubernetes, CI/CD y seguridad operacional.',
  keywords: ['DevOps', 'DevSecOps', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Cloud Infrastructure', 'Chile'],
  authors: [{ name: 'Felipe Velasco Hernández' }],
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#293242',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
