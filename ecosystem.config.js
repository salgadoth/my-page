module.exports = {
  apps: [
    {
      name: 'my-page',
      script: 'npm',
      args: 'run start',
      env: {
        API_URL: process.env.API_URL,
        NEXT_PUBLIC_VPS_URL: process.env.NEXT_PUBLIC_VPS_URL,
      },
    },
  ],
}
