import { AuthInterface } from '@/app/types/authInterface'

export default function OAuth(props: AuthInterface) {
  return (
    <div className="text-black w-2/3">
      {props.variant === 'login' ? (
        <h1>Log In (oAuth)</h1>
      ) : (
        <h1>Register (oAuth)</h1>
      )}
    </div>
  )
}
