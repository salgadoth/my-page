import { NextRequest, NextResponse } from 'next/server'

async function handler(req: NextRequest) {
  if (req.method === 'GET') {
    const user = await fetch('http://localhost:3000/user/salgadoth', {
      next: {
        revalidate: 600,
      },
    })

    return NextResponse.json(await user.json())
  }
}

export { handler as GET }
