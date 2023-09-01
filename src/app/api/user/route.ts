import { NextRequest, NextResponse } from 'next/server'

async function handler(req: NextRequest) {
  if (req.method === 'GET') {
    const user = await fetch(
      'https://my-page-api.cyclic.cloud/user/salgadoth',
      {
        next: {
          revalidate: 600,
        },
      },
    )

    return NextResponse.json(await user.json())
  }
}

export { handler as GET }
