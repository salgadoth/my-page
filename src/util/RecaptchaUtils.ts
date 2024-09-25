const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

export const verifyRecaptcha = async (token: string) => {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
    },
  )

  return await response.json()
}
