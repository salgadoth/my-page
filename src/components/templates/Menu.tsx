import React, { ReactElement } from 'react'
import { MenuItemProps } from './MenuItem'

interface MenuProps {
  children: ReactElement<MenuItemProps>[]
}

export default function Menu(props: MenuProps) {
  return (
    <div className="h-full w-full">
      <div className="w-50% text-zinc-50 marker:text-seaGreen">
        {React.Children.map(props.children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { number: index + 1 })
          }
          return child
        })}
      </div>
    </div>
  )
}
