'use client'

import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

import ContactDetails, {
  LinksData,
} from '@/components/templates/ContactDetails'
import ContactForm from '@/components/templates/ContactForm'
import { AuthProvider } from '@/providers/AuthProvider'
import RecaptchaProvider from '@/providers/RecaptchaProvider'
import 'react-phone-input-2/lib/style.css'

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

export default function Contact() {
  return (
    <AuthProvider>
      <TopBar />
      <Pagina
        header="Contact Me"
        parentStyling="!bg-indigo"
        headerStyling="text-white pb-14"
      >
        <div className="flex md:flex-row xs:flex-col">
          <RecaptchaProvider>
            <ContactForm />
          </RecaptchaProvider>
          <ContactDetails data={links} />
        </div>
      </Pagina>
    </AuthProvider>
  )
}
