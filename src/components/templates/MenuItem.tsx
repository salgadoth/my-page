import Link from 'next/link'

export interface MenuItemProps {
  text: string
  url: string
  shouldntBeList?: true
  target?: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} className="pr-14" target={props.target}>
      {!props.shouldntBeList ? (
        <li
          className="after:content-['']
                 after:block
                 after:border-b-2
                 after:border-b-seaGreen
                 after:scale-x-0
                 after:transition 
                 duration-700 
                 ease-in-out 
                 hover:after:scale-x-100
                 font-sourceCode"
        >
          {props.text}
        </li>
      ) : (
        <p
          className="after:content-['']
                 after:block
                 after:border-b-2
                 after:border-b-seaGreen
                 after:scale-x-0
                 after:transition 
                 duration-700 
                 ease-in-out 
                 hover:after:scale-x-100
                 font-sourceCode"
        >
          {props.text}
        </p>
      )}
    </Link>
  )
}
