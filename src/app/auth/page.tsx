'use client'

import AuthShell from '@/components/layout/AuthShell'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'
import { useState } from 'react'

export default function AuthPage() {
  const [variant, setVariant] = useState('login')

  function toggleVariant() {
    setVariant(variant === 'login' ? 'register' : 'login')
  }

  return (
    <>
      <TopBar />
      <Pagina
        header={variant === 'login' ? 'Log in' : 'Register'}
        classNameParent="!bg-indigo"
        classNameHeader="!text-white"
      >
        <div className="flex justify-center">
          <AuthShell
            toggleVariant={toggleVariant}
            variant={variant}
          ></AuthShell>
        </div>
      </Pagina>
    </>
  )
}
