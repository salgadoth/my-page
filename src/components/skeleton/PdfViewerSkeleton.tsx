export default function PdfViewerSkeleton() {
  return (
    <div className="w-full h-full bg-gray-200 animate-pulse rounded-md">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-3/4 h-2 bg-gray-300 mb-4"></div>
        <div className="w-2/3 h-4 bg-gray-300 mb-4"></div>
        <div className="w-1/2 h-3 bg-gray-300 mb-4"></div>
      </div>
    </div>
  )
}
