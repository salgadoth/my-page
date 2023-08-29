'use client'

import { AuthInterface } from '@/app/types/authInterface'
import OAuth from '../templates/OAuth'
import ServerAuth from '../templates/ServerAuth'

export default function AuthShell(props: AuthInterface) {
  return (
    <div
      className={`
    bg-white 
    rounded-lg
    w-2/5
    flex
    flex-col
    items-center
    `}
    >
      <OAuth
        variant={props.variant}
        toggleVariant={props.toggleVariant}
      ></OAuth>
      <hr className="border-[1px] border-sky-700 w-[90%] rounded-lg" />
      <ServerAuth
        variant={props.variant}
        toggleVariant={props.toggleVariant}
      ></ServerAuth>
    </div>
  )
}
