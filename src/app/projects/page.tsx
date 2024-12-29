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
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch('api/user')
      const json: UserModel = await response.json()
      setResponseData(json.my_projects)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <>
      <TopBar />
      <Pagina header="My Projects" classNameHeader="pb-20">
        {!isLoading ? (
          <Table data={responseData} />
        ) : (
          <Spin childClassName="!text-black">
            <p>Loading...</p>
          </Spin>
        )}
      </Pagina>
    </>
  )
}
