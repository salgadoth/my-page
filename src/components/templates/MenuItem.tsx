'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface MenuItemProps {
  text: string
  url: string
  renderAs?: 'listItem' | 'button' // Control rendering type
  target?: string
  number?: number
  linkStyling?: string
}

export default function MenuItem(props: MenuItemProps) {
  const { renderAs = 'listItem', number } = props
  const [animateMobileUnderline, setAnimateMobileUnderline] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.innerWidth < 768) {
        setAnimateMobileUnderline(true)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Link
      href={props.url}
      className={`${props.linkStyling}`}
      target={props.target}
    >
      {renderAs === 'listItem' ? (
        <p
          className={`
                 after:content-['']
                 after:block
                 after:border-b-2
                 after:border-b-seaGreen
                 after:scale-x-0
                 after:transition 
                 after:duration-700 
                 after:ease-in-out 
                 hover:after:scale-x-100
                 ${
                   animateMobileUnderline
                     ? 'after:scale-x-100'
                     : 'after:scale-x-0'
                 }
                 md:after:scale-x-0
                 md:hover:after:scale-x-100
                 font-sourceCode`}
        >
          <span className="text-seaGreen font-bold">
            {String(number).padStart(2, '0')}.
          </span>
          {props.text}
        </p>
      ) : (
        <button
          className="bg-gray-200 
                 hover:bg-seaGreen
                 hover:font-semibold 
                 transition 
                 duration-300 
                 ease-in-out 
                 text-black 
                 px-4 
                 py-2 
                 rounded-md 
                 font-sourceCode
                 font-medium"
        >
          {props.text}
        </button>
      )}
    </Link>
  )
}
