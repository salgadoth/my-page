'use client'

import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

import 'react-phone-input-2/lib/style.css'
import RecaptchaProvider from '@/providers/RecaptchaProvider'
import ContactForm from '@/components/templates/ContactForm'
import ContactDetails, {
  LinksData,
} from '@/components/templates/ContactDetails'
import { AuthProvider } from '@/providers/AuthProvider'

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
        classNameParent="!bg-indigo"
        classNameHeader="text-white"
      >
        <div className="flex flex-row">
          <RecaptchaProvider>
            <ContactForm />
          </RecaptchaProvider>
          <ContactDetails data={links} />
        </div>
      </Pagina>
    </AuthProvider>
  )
}
