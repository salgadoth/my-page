'use client'

import { SetStateAction, useState } from 'react'
import Input from '../layout/Input'
import { AuthInterface } from '@/app/types/authInterface'

export default function ServerAuth(props: AuthInterface) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  return (
    <div className="text-black w-2/3 text-center mt-5">
      <div className="mb-2">
        <form action="" method="post">
          {props.variant === 'login' ? (
            <></>
          ) : (
            <>
              <div className="flex flex-row justify-between">
                <Input
                  id="fname"
                  value={fname}
                  type="text"
                  placeHolder="First Name"
                  onChange={(event: {
                    target: { value: SetStateAction<string> }
                  }) => setFname(event.target.value)}
                  className="w-2/5"
                />
                <Input
                  id="lname"
                  value={lname}
                  type="text"
                  placeHolder="Last Name"
                  onChange={(event: {
                    target: { value: SetStateAction<string> }
                  }) => setLname(event.target.value)}
                  className="w-1/2"
                />
              </div>
              <Input
                id="username"
                value={username}
                type="text"
                placeHolder="Username"
                onChange={(event: {
                  target: { value: SetStateAction<string> }
                }) => setUsername(event.target.value)}
              />
            </>
          )}
          <Input
            id="email"
            value={email}
            type="email"
            placeHolder="Email"
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setEmail(event.target.value)
            }
          />
          <Input
            id="password"
            value={password}
            type="password"
            placeHolder="Password"
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setPassword(event.target.value)
            }
          />
        </form>
        {props.variant === 'login' ? (
          <span>
            Don&#39;t have an account yet?
            <span className="pl-2" onClick={props.toggleVariant}>
              Create an account
            </span>
          </span>
        ) : (
          <span>
            Already have an account?
            <span className="pl-2" onClick={props.toggleVariant}>
              Sign In
            </span>
          </span>
        )}
      </div>
      <div className="mb-3">
        <button
          type="submit"
          className={`
            bg-sky-900
            rounded-lg
            p-1.5
            text-white
          `}
        >
          {props.variant === 'login' ? 'Sign In' : 'Register'}
        </button>
      </div>
    </div>
  )
}
