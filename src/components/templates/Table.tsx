import { ProjectModel } from '@/data/models/ProjectModel'
import { useEffect, useState } from 'react'
import Spin from '../layout/Spin'
import { getFormattedMonth } from '@/util/StringUtils'
import { Rating } from '../layout/StarsRating'

interface TableProps {
  data?: ProjectModel[]
}

interface ProjectState {
  id: string
  currentState: boolean
}

export default function Table(props: TableProps) {
  const [, setLoading] = useState(true)
  const [projectsState, setProjectsState] = useState<ProjectState[]>([])

  const handleClick = (id: string) => {
    const newArray = projectsState.map((item: ProjectState) => {
      if (id === item.id) {
        return { ...item, currentState: !item.currentState }
      } else {
        return item
      }
    })

    setProjectsState(newArray)
  }

  useEffect(() => {
    if (props.data !== undefined && projectsState.length === 0) {
      for (let i = 0; i < props.data.length; i++) {
        const proj: ProjectState = { id: props.data[i].id, currentState: false }
        projectsState.push(proj)
      }

      setLoading(false)
    }
  }, [props.data, projectsState])

  if (projectsState.length > 0) {
    return (
      <div className="border rounded-lg bg-zinc-100 p-1">
        <table className="w-full border-separate border-spacing-0">
          <tbody className="text-black text-center p-4">
            {props.data?.map((proj: ProjectModel, i) => {
              const date = new Date(proj.date)
              const month = getFormattedMonth(proj.date, true)
              return (
                <>
                  <tr
                    key={proj.id}
                    className="h-12 hover:bg-zinc-300 hover:cursor-pointer rounded-t-lg"
                    onClick={() => handleClick(proj.id)}
                  >
                    <td className="rounded-tl-lg rounded-bl-lg">{proj.name}</td>
                    <td className="flex flex-row flex-wrap justify-center">
                      {proj.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-teal-500 rounded-lg w-[25%] text-center m-1"
                        >
                          <p className="font-semibold">{tech}</p>
                        </span>
                      ))}
                    </td>
                    <td>{month + '/' + date.getFullYear()}</td>
                    <td className="rounded-tr-lg rounded-br-lg">
                      {proj.screenshot}
                    </td>
                  </tr>
                  <tr
                    className={`${
                      projectsState[i].currentState === true ? '' : 'hidden'
                    }`}
                  >
                    <td colSpan={1} className="bg-gray-200 rounded-l-lg">
                      <Rating total={proj.rating} />
                    </td>
                    <td
                      colSpan={2}
                      className="bg-gray-200 rounded-r-lg text-left"
                    >
                      {proj.details}
                    </td>
                    {/* <td colSpan={2}>{proj.screenshot}</td> */}
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <Spin>
        <p>Loading...</p>
      </Spin>
    )
  }
}
