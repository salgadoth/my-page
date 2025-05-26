import { ProjectModel } from '@/data/models/ProjectModel'
import { getFormattedMonth } from '@/util/StringUtils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Rating } from '../layout/StarsRating'

interface TableProps {
  data?: ProjectModel[]
}

interface ProjectState {
  id: string
  currentState: boolean
}

export default function Table({ data }: TableProps) {
  const [, setLoading] = useState(true)
  const [projectsState, setProjectsState] = useState<ProjectState[]>([])
  const VPS_URL = process.env.NEXT_PUBLIC_VPS_URL

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
    if (data) {
      setProjectsState(
        data.map((proj) => ({ id: proj.id, currentState: false })),
      )

      setLoading(false)
    }
  }, [data])

  if (projectsState.length > 0) {
    return (
      <div className="border rounded-lg bg-zinc-100 p-1">
        <table className="w-full border-separate border-spacing-0">
          <tbody className="text-black text-center p-4">
            {data?.map((proj: ProjectModel, i) => {
              const date = new Date(proj.date)
              const month = getFormattedMonth(proj.date, true)
              return (
                <>
                  <tr
                    key={`${proj.id}-main`}
                    className="hover:bg-zinc-300 hover:cursor-pointer rounded-t-lg md:h-12 xs:h-20"
                    onClick={() => handleClick(proj.id)}
                  >
                    <td className="rounded-tl-lg rounded-bl-lg">{proj.name}</td>
                    <td>
                      {proj.tech.map((tech, idx) =>
                        idx === proj.tech.length - 1 ? tech : tech + ', ',
                      )}
                    </td>
                    <td className="rounded-tr-lg rounded-br-lg">
                      {month + '/' + date.getFullYear()}
                    </td>
                  </tr>
                  <tr
                    key={`${proj.id}-details`}
                    className={`${
                      projectsState[i].currentState === true ? '' : 'hidden'
                    }`}
                  >
                    <td className="bg-gray-200 xl:min-w-[260px] md:min-w-[180px] xs:min-w-0 p-2 rounded-l-lg">
                      <Rating total={proj.rating} />
                    </td>
                    <td className="bg-gray-200 rounded-r-lg p-2 text-left text-sm">
                      {proj.details}
                    </td>
                    <td className="bg-gray-200">
                      <Image
                        src={VPS_URL + proj.screenshot}
                        alt="Project image"
                        width={200}
                        height={100}
                      />
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  } else {
    // Component renders nothing while waiting for the projectState finish mounting.
    return null
  }
}
