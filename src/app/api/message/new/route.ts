import { verifyRecaptcha } from '@/util/RecaptchaUtils'
import { HttpStatusCode } from 'axios'
import { NextRequest, NextResponse } from 'next/server'

async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed.' },
      { status: HttpStatusCode.MethodNotAllowed },
    )
  }

  try {
    const token = req.cookies.get('access_token')
    if (!token || !token.value) {
      return NextResponse.json(
        { error: 'Authorization token not found.' },
        { status: HttpStatusCode.Forbidden },
      )
    }

    const { name, email, phone, message, recaptchaToken } = await req.json()

    const recaptchaResponse = await verifyRecaptcha(recaptchaToken)

    if (!recaptchaResponse.success && recaptchaResponse.score < 0.5)
      return NextResponse.json(
        { error: 'Recaptcha validation failed.' },
        { status: HttpStatusCode.TooManyRequests },
      )

    const response = await fetch(process.env.API_URL + 'message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })

    if (!response.ok)
      return NextResponse.json(
        { error: 'Failed to submit form.' },
        { status: response.status },
      )

    return NextResponse.json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error('Error submitting form: ', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}

export { handler as POST }
