'use client'

import Apresentacao from '@/components/templates/Apresentacao'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

export default function Home() {
  // TODO: RETRIEVE CURRENT POSITION FROM API AND DISPLAY IT AS: "Currently I'm focused in building solutions for {current_position}."
  return (
    <>
      <TopBar />
      <Pagina classNameParent="!bg-indigo" classNameHeader="pb-10">
        <Apresentacao />
      </Pagina>
    </>
  )
}
