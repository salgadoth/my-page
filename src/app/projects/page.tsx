'use client'

import TableSkeleton from '@/components/skeleton/TableSkeleton'
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
        {!isLoading && responseData && responseData?.length > 0 ? (
          <Table data={responseData} />
        ) : (
          <TableSkeleton rows={2} />
        )}
      </Pagina>
    </>
  )
}
