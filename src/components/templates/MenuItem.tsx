import Link from 'next/link'

export interface MenuItemProps {
  text: string
  url: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} className='pr-14'>
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
    </Link>
  )
}
