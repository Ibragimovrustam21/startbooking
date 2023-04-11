'use client'
import { usePathname } from 'next/navigation';
import { SideBar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import "../styles/output.css";
import './globals.css'

interface IRootLayout {
  children: React.ReactNode,
}

export default function RootLayout({ children }: IRootLayout) {
  const path = usePathname()
  const isUserPage = path.split('/').find(e => e === 'user')

  return (
    <html>
      <body>
        <I18nextProvider i18n={i18n}>
          <SideBar />
          {children}
          {
            !isUserPage && <Footer />
          }
        </I18nextProvider>
      </body>
    </html>
  )
}
