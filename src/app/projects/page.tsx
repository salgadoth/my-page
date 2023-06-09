'use client'

import Pagina from '@/components/templates/Pagina'
import Table from '@/components/templates/Table'
import TopBar from '@/components/templates/TopBar'

export default function ProjectsPage() {
  const data = [
    {
      _id: 'angsi132odbh24ndsijf',
      name: 'Project 1',
      languages: 'Used Languages',
      date: 'Date',
      screenshot: 'Screenshot',
      details: 'Details',
    },
    {
      _id: 'ghbnsdb18y3t23hugnvb',
      name: 'Project 2',
      languages: 'Used Languages',
      date: 'Date',
      screenshot: 'Screenshot',
      details: 'Details',
    },
  ]

  return (
    <>
      <TopBar />
      <Pagina header="My Projects">
        <Table data={data} />
      </Pagina>
    </>
  )
}
