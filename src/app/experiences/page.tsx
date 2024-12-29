'use client'

import Spin from '@/components/layout/Spin'
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
        classNameParent="!bg-indigo"
        classNameHeader="!text-white pb-20"
      >
        {loading === true ? (
          <Spin childClassName="text-white">
            <p>Loading...</p>
          </Spin>
        ) : (
          <CardContainer>
            <Cards data={responseData} />
          </CardContainer>
        )}
      </Pagina>
    </>
  )
}
