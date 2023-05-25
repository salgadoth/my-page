import Image from 'next/image'
import Link from 'next/link'

import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

interface LinksData {
  name: string
  url: string
  icon: string
}

export default function contact() {
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

  return (
    <>
      <TopBar />
      <Pagina
        header="My Contact Infos"
        classNameParent="!bg-indigo"
        classNameHeader="text-white"
      >
        <div className="flex flex-row">
          <div className="pr-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.829107596124!2d-9.421905947775524!3d38.698769579361674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec42faa052c1f%3A0x1a076fe2fa4fa3e6!2sR.%20da%20Palmeira%205C%2C%202750-285%20Cascais%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1683662180559!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              className="border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-wrap content-center justify-center w-full">
            <div className="text-white">
              <div>
                <p className="py-4 text-xl">Phone:</p>
                <p>+55 (21) 96538 - 1212</p>
              </div>
              <div>
                <p className="py-4 text-xl">Email:</p>
                <p>thiagohenriques1699@gmail.com</p>
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
