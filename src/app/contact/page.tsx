'use client'

import Image from 'next/image'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface LinksData {
  name: string
  url: string
  icon: string
}

const schema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().min(1, 'Your email is required'),
  message: z.string().min(1, 'Your message for me is required'),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const links: LinksData[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thiago-salgado-3a1174200/',
      icon: 'https://i0.wp.com/fenavist.org.br/wp-content/uploads/2018/05/linkedin-white-logo.png?ssl=1',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/salgadoth/my-page',
      icon: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png',
    },
  ]

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/new-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus('Form submitted successfully')
      } else {
        const errorData = await response.json()
        setFormStatus('Error: ' + errorData)
      }
    } catch (error) {
      console.error('Failed to submit form: ', error)
      setFormStatus('Failed to submit form')
    }
  }

  const renderErrorMessage = (message: string | undefined) => {
    return <p className="text-red-500 text-sm">{message}</p>
  }

  return (
    <>
      <TopBar />
      <Pagina
        header="Contact Me"
        classNameParent="!bg-indigo"
        classNameHeader="text-white"
      >
        <div className="flex flex-row">
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
                  className="border-black border-[0.5px] border-opacity-25"
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
                    errors.email ? 'border-red-500' : 'border-gray-300'
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
                <PhoneInput
                  specialLabel={'Phone:'}
                  country={'au'}
                  inputStyle={{}}
                />
              </div>
              <div className="mb-4">
                <label className="font-semibold tracking-wide">Message:</label>
                <textarea
                  {...register('message')}
                  className={`border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } w-full`}
                />
                {errors.message && renderErrorMessage(errors.message.message)}
              </div>
              <div className="w-full text-center ">
                <button
                  type="submit"
                  className="bg-blue-800 rounded-lg px-4 py-1 text-white tracking-wider hover:bg-blue-900"
                >
                  submit
                </button>
              </div>
              {formStatus && <p className="mt-4">{formStatus}</p>}
            </form>
          </div>
          <div className="flex flex-wrap content-center justify-center w-full">
            <div className="text-white">
              <div>
                <p className="py-4 text-xl">Phone:</p>
                <p>+61 481 394 451</p>
              </div>
              <div>
                <p className="py-4 text-xl">Email:</p>
                <p>tsg.lab00@gmail.com</p>
              </div>
              <div className="flex justify-around pt-8">
                {links?.map((data: LinksData, index: number) => {
                  return (
                    <Link key={index} href={data.url}>
                      <Image
                        src={data.icon}
                        alt={`${data.name} logo`}
                        width={50}
                        height={50}
                        className="grayscale"
                      />
                    </Link>
                  )
                })}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Pagina>
    </>
  )
}
