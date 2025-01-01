interface SkeletonProps {
  rows: number
}

export default function TableSkeleton({ rows }: SkeletonProps) {
  return (
    <div className="border rounded-lg bg-zinc-100 p-1">
      <table className="w-full border-separate border-spacing-x-0 border-spacing-y-1">
        <tbody className="text-black text-center p-4">
          {Array.from({ length: rows }).map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SkeletonRow() {
  return (
    <>
      {/* Skeleton row for main project row */}
      <tr className="h-12 bg-gray-300 animate-pulse">
        <td className="rounded-tl-lg rounded-bl-lg p-2">
          <div className="h-4 w-3/4 bg-gray-400 rounded"></div>
        </td>
        <td>
          <div className="h-4 w-1/2 bg-gray-400 rounded"></div>
        </td>
        <td className="rounded-tr-lg rounded-br-lg">
          <div className="h-4 w-1/4 bg-gray-400 rounded mx-auto"></div>
        </td>
      </tr>
    </>
  )
}
