import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

export default function contact() {
  return (
    <>
      <TopBar />
      <Pagina header="My Contact Infos">
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
          <div>
            <div className="text-black">
              <div>
                <p>Phone:</p>
                <p>+55 (21)96538 - 1212</p>
              </div>
              <div>
                <p>Email:</p>
                <p>thiagohenriques1699@gmail.com</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Pagina>
    </>
  )
}
