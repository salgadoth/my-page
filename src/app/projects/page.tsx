'use client'

import Spin from '@/components/layout/Spin'
import Pagina from '@/components/templates/Pagina'
import Table from '@/components/templates/Table'
import TopBar from '@/components/templates/TopBar'
import { ProjectModel } from '@/data/models/ProjectModel'
import { UserModel } from '@/data/models/UserModel'
import { useEffect, useState } from 'react'

export default function ProjectsPage() {
  const [responseData, setResponseData] = useState<ProjectModel[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://my-page-salgadoth.vercel.app/api/user',
      )
      const json: UserModel = await response.json()
      setResponseData(json.UserProjects)
      setLoading(false)
    }
    getData()
  }, [])
  if (loading) {
    return (
      <>
        <TopBar />
        <Pagina header="My Projects">
          <Spin childClassName="!text-black">
            <p>Loading...</p>
          </Spin>
        </Pagina>
      </>
    )
  } else {
    return (
      <>
        <TopBar />
        <Pagina header="My Projects">
          <Table data={responseData} />
        </Pagina>
      </>
    )
  }
}
