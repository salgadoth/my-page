'use client'

import CardContainer from '@/components/templates/CardContainer'
import Cards from '@/components/templates/Cards'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'
import { useEffect, useState } from 'react'

export default function ExperiencePage(props: any) {
  const [responseData, setResponseData] = useState()

  useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3001/api/user')
      const json = await response.json()
      setResponseData(json.UserExperience)
    }
    getData()
  }, [])

  return (
    <>
      <TopBar />
      <Pagina
        header="My experiences"
        classNameParent="!bg-indigo"
        classNameHeader="!text-white"
      >
        <CardContainer>
          <Cards data={responseData} />
        </CardContainer>
      </Pagina>
    </>
  )
}
