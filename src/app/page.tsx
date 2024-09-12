'use client'

import Apresentacao from '@/components/templates/Apresentacao'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'
import { AuthProvider } from '@/providers/AuthProvider'

export default function Home() {
  return (
    <>
      <AuthProvider>
        <TopBar />
        <Pagina classNameParent="!bg-indigo">
          <Apresentacao />
        </Pagina>
      </AuthProvider>
    </>
  )
}
