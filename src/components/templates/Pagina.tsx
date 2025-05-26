interface PaginaProps {
  children: any
  header?: string
  parentStyling?: string
  childStyling?: string
  headerStyling?: string
}

export default function Pagina(props: PaginaProps) {
  return (
    <div
      className={`
            ${props.parentStyling ?? ''}
            bg-white
            flex flex-col justify-center items-center
            text-red-50 h-auto min-h-screen
            `}
    >
      <div
        className={`
                    md:w-3/5
                    ${props.childStyling ?? ''}
                    `}
      >
        <p
          className={`text-6xl text-black font-kanit ${
            props.headerStyling ?? ''
          }`}
        >
          {props.header}
        </p>
        {props.children}
      </div>
    </div>
  )
}
