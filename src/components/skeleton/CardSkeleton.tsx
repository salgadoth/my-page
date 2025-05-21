interface SkeletonProps {
  cards: number
}

export default function Skeleton({ cards }: SkeletonProps) {
  return (
    <>
      {Array.from({ length: cards }).map((_, i) => (
        <div
          key={i}
          className="group h-80 w-80 my-1 [perspective:1000px] hover:cursor-pointer bg-white rounded-xl xs:my-3"
        >
          <div className="relative isolate h-full w-full rounded-xl animate-pulse [transform-style:preserve-3d]">
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <div className="z-10 w-full h-full flex flex-col justify-center items-center p-4 my-1">
                <div className="skeleton-text mb-6"></div>
                <div className="skeleton-text mb-6"></div>
                <div className="skeleton-text mb-1"></div>
                <div className="skeleton-text"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
