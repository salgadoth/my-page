'use client'

import Apresentacao from '@/components/templates/Apresentacao'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'
import { ExperienceModel } from '@/data/models/ExperienceModel'
import { UserModel } from '@/data/models/UserModel'
import { useEffect, useState } from 'react'

export default function Home() {
  // TODO: RETRIEVE CURRENT POSITION FROM API AND DISPLAY IT AS: "Currently I'm focused in building solutions for {current_position}."
  const [userData, setUserData] = useState<ExperienceModel>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('api/user')
      .then((res) => res.json())
      .then((data: UserModel) => {
        console.log(data)
        setLoading(false)
        setUserData(data.curr_company)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])
  return (
    <>
      <TopBar />
      <Pagina parentStyling="!bg-indigo" headerStyling="pb-10">
        {!loading && userData ? (
          <Apresentacao data={userData} />
        ) : (
          <Apresentacao />
        )}
      </Pagina>
    </>
  )
}
