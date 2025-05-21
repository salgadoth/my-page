interface PaginaProps {
  children: any
  header?: string
  classNameParent?: string
  classNameChild?: string
  classNameHeader?: string
}

export default function Pagina(props: PaginaProps) {
  return (
    <div
      className={`
            ${props.classNameParent ?? ''}
            bg-white
            flex flex-col justify-center items-center
            text-red-50 h-auto min-h-screen
            `}
    >
      <div
        className={`
                    w-3/5
                    ${props.classNameChild ?? ''}
                    `}
      >
        <p
          className={`text-6xl text-black font-kanit ${
            props.classNameHeader ?? ''
          }`}
        >
          {props.header}
        </p>
        {props.children}
      </div>
    </div>
  )
}
