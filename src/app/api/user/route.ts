import { NextRequest, NextResponse } from 'next/server'

async function handler(req: NextRequest) {
  if (req.method === 'GET') {
    const API_URL = process.env.API_URL

    const user = await fetch(API_URL + 'user/salgadoth', {
      next: {
        revalidate: 600,
      },
    })

    return NextResponse.json(await user.json())
  }
}

export const runtime = 'nodejs'

export { handler as GET }
