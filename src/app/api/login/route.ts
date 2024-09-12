import { HttpStatusCode } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

interface LoginCredentials {
  username: string
  password: string
}

async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed.' },
      { status: HttpStatusCode.MethodNotAllowed },
    )
  }

  const { username, password }: LoginCredentials = await req.json()
  try {
    const response = await fetch(process.env.API_URL + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    })

    if (!response.ok)
      return NextResponse.json(
        { error: response.statusText },
        { status: response.status },
      )

    const token = response.headers.getSetCookie()

    if (token) {
      return new Response('', {
        status: 200,
        headers: { 'Set-Cookie': `${token}` },
      })
    }
  } catch (error) {
    console.error('Error during login: ', error)
    return NextResponse.json(
      { error },
      { status: HttpStatusCode.InternalServerError },
    )
  }
}

export { handler as POST }
