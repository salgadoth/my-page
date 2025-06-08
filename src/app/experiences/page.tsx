'use client'

import CardSkeleton from '@/components/skeleton/CardSkeleton'
import CardContainer from '@/components/templates/CardContainer'
import Cards from '@/components/templates/Cards'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'
import { ExperienceModel } from '@/data/models/ExperienceModel'
import { UserModel } from '@/data/models/UserModel'
import { useEffect, useState } from 'react'

export default function ExperiencePage(props: any) {
  const [responseData, setResponseData] = useState<ExperienceModel[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch('api/user')
      const json: UserModel = await response.json()
      setResponseData(json.my_experiences)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <>
      <TopBar />
      <Pagina
        header="My experiences"
        parentStyling="!bg-indigo"
        headerStyling="!text-white pb-20 md:pl-0 xs:pl-10"
      >
        {loading === true ? (
          <CardContainer>
            <CardSkeleton cards={3} />
          </CardContainer>
        ) : (
          <CardContainer>
            <Cards data={responseData} />
          </CardContainer>
        )}
      </Pagina>
    </>
  )
}
