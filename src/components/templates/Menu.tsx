interface MenuProps {
  children: any
}

export default function Menu(props: MenuProps) {
  return (
    <div
      className={`
            flex items-center justify-center
            h-full
        `}
    >
      <ol
        className={`
                flex place-content-evenly 
                w-full list-[decimal-leading-zero]
                text-zinc-50 marker:text-seaGreen
            `}
      >
        {props.children}
      </ol>
    </div>
  )
}
