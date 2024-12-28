interface MenuProps {
  children: any
}

export default function Menu(props: MenuProps) {
  return (
    <div
      className={`
            flex items-center justify-center
            h-full w-full
        `}
    >
      <ol
        className={`
                flex w-50% list-[decimal-leading-zero]
                text-zinc-50 marker:text-seaGreen items-center
            `}
      >
        {props.children}
      </ol>
    </div>
  )
}
