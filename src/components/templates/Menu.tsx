import React, { ReactElement } from 'react'
import { MenuItemProps } from './MenuItem'

interface MenuProps {
  children: ReactElement<MenuItemProps>[]
}

export default function Menu(props: MenuProps) {
  return (
    <div className="text-zinc-50 grid grid-cols-5 gap-4 items-center text-left md:text-center md:grid-cols-5 sm:text-center sm:grid-cols-4 sm:gap-0 xs:grid-cols-4">
      {React.Children.map(props.children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { number: index + 1 })
        }
        return child
      })}
    </div>
  )
}
