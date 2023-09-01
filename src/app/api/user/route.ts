import { NextRequest } from 'next/server'

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

    return new Response(await user.json(), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }
}

export { handler as GET }
