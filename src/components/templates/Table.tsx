import { ProjectModel } from '@/data/models/ProjectModel'

interface TableProps {
  data: ProjectModel[]
}

export default function Table(props: TableProps) {
  return (
    <div className="border rounded-lg bg-zinc-100 p-1">
      <table className="w-full border-separate border-spacing-0">
        <tbody className="text-black text-center p-4">
          {props.data?.map((proj: ProjectModel) => {
            return (
              <>
                <tr
                  className="h-12 hover:bg-zinc-300 hover:cursor-pointer rounded-t-lg"
                  onClick={show}
                >
                  <td className="rounded-tl-lg rounded-bl-lg">{proj.name}</td>
                  <td>{proj.languages}</td>
                  <td>{proj.date}</td>
                  <td className="rounded-tr-lg rounded-br-lg">
                    {proj.screenshot}
                  </td>
                </tr>
                <tr className="hidden">
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

function show() {
  console.log()
}
