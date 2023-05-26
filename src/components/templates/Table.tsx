import { ProjectModel } from '@/data/models/ProjectModel'
import { useEffect, useState } from 'react'
import Spin from '../layout/Spin'

interface TableProps {
  data: ProjectModel[]
}

interface Project {
  id: string
  currentState: boolean
}

export default function Table(props: TableProps) {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])

  const handleClick = (id: string) => {
    const newArray = projects.map((item: Project) => {
      if (id === item.id) {
        return { ...item, currentState: !item.currentState }
      } else {
        return item
      }
    })

    setProjects(newArray)
  }

  useEffect(() => {
    if (props.data !== undefined && projects.length <= 0) {
      for (let i = 0; i < props.data.length; i++) {
        const proj: Project = { id: props.data[i]._id, currentState: false }
        projects.push(proj)
      }
    }

    setLoading(false)
  }, [])

  if (loading) {
    return (
      <Spin childClassName="!text-black">
        <p>Loading...</p>
      </Spin>
    )
  } else {
    return (
      <div className="border rounded-lg bg-zinc-100 p-1">
        <table className="w-full border-separate border-spacing-0">
          <tbody className="text-black text-center p-4">
            {props.data?.map((proj: ProjectModel, i) => {
              return (
                <>
                  <tr
                    className="h-12 hover:bg-zinc-300 hover:cursor-pointer rounded-t-lg"
                    onClick={() => handleClick(proj._id)}
                  >
                    <td className="rounded-tl-lg rounded-bl-lg">{proj.name}</td>
                    <td>{proj.languages}</td>
                    <td>{proj.date}</td>
                    <td className="rounded-tr-lg rounded-br-lg">
                      {proj.screenshot}
                    </td>
                  </tr>
                  <tr
                    className={`${
                      projects[i].currentState === true ? '' : 'hidden'
                    }`}
                  >
                    <td colSpan={2}>{proj.details}</td>
                    <td colSpan={2}>{proj.screenshot}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
