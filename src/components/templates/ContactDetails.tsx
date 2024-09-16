import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface LinksData {
  name: string
  url: string
  icon: string
}
interface ContactDetailsProps {
  data: LinksData[]
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ data }) => {
  return (
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
          {data?.map((data: LinksData, index: number) => {
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
    </div>
  )
}

export default ContactDetails
