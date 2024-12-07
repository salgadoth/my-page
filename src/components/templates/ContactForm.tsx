import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import { z } from 'zod'
import Spin from '../layout/Spin'

const schema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().min(1, 'Your email is required'),
  message: z.string().min(1, 'Your message for me is required'),
})

type FormData = z.infer<typeof schema> & { recaptchaToken: string }

interface FormStatus {
  status: number
  message: string
}

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    console.log('Submitting form...')
    setFormStatus(null)
    setSubmitted(!submitted)
    try {
      if (!executeRecaptcha) {
        console.error('Recaptcha not yet available.')
        return
      }

      const recaptchaToken = await executeRecaptcha('contact_form_submit')

      data.recaptchaToken = recaptchaToken

      const response = await fetch('/api/message/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus({
          status: response.status,
          message: 'Form submitted successfully',
        })
        setSubmitted(false)
      } else {
        const errorData = await response.json()
        setFormStatus({ status: errorData.status, message: errorData.error })
        setSubmitted(false)
      }
    } catch (error) {
      console.error('Failed to submit form: ', error)
      setFormStatus({ status: 500, message: 'Failed to submit form' })
      setSubmitted(false)
    }
  }

  const renderErrorMessage = (message: string | undefined) => {
    return <p className="text-red-500 text-sm">{message}</p>
  }

  return (
    <div className="pr-8 bg-white w-2/3 px-8 pt-8 pb-12 rounded-2x text-black rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-black font-semibold tracking-wide block text-grey-700"
          >
            Your name:
          </label>
          <input
            className={`border ${
              errors.name
                ? 'border-red-500'
                : 'border-black border-[0.5px] border-opacity-25'
            }`}
            id="name"
            type="text"
            placeholder="Jhon Doe"
            {...register('name')}
          />
          {errors.name && renderErrorMessage(errors.name.message)}
        </div>

        <div className="mb-4 grid grid-rows-2 w-1/2">
          <label htmlFor="email" className="font-semibold tracking-wide">
            Email:
          </label>
          <input
            className={`border ${
              errors.email
                ? 'border-red-500'
                : 'border-black border-[0.5px] border-opacity-25'
            }`}
            id="email"
            type="email"
            placeholder="example@example.com"
            {...register('email')}
          />
          {errors.email && renderErrorMessage(errors.email.message)}
        </div>
        <div className="mb-4">
          <label htmlFor="" className="font-semibold">
            Phone:{' '}
          </label>
          <PhoneInput specialLabel={'Phone:'} country={'au'} inputStyle={{}} />
        </div>
        <div className="mb-4">
          <label className="font-semibold tracking-wide">Message:</label>
          <textarea
            {...register('message')}
            className={`border ${
              errors.message
                ? 'border-red-500'
                : 'border-black border-[0.5px] border-opacity-25'
            } w-full`}
          />
          {errors.message && renderErrorMessage(errors.message.message)}
        </div>
        <div className="mb-4 text-center">
          {formStatus &&
            (formStatus.status !== 200 ? (
              <p className="mt-4 text-red-500 font-bold">
                {formStatus.message}
              </p>
            ) : (
              <p className="mt-4 font-bold">{formStatus.message}</p>
            ))}
        </div>
        <div className="w-full text-center ">
          {!submitted ? (
            <button
              type="submit"
              className="bg-blue-800 rounded-lg px-4 py-1 text-white tracking-wider hover:bg-blue-900"
            >
              send
            </button>
          ) : (
            <Spin bgCircleColor="black" />
          )}
        </div>
      </form>
    </div>
  )
}

export default ContactForm
