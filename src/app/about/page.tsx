import ProfilePhoto from '@/components/layout/ProfilePhoto'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

export default function AboutPage() {
  return (
    <>
      <TopBar></TopBar>
      <Pagina header="About me">
        <div className="flex flex-wrap flex-row pt-20 items-center place-content-evenly">
          <div>
            <ProfilePhoto
              src={
                'https://media.licdn.com/dms/image/C4D03AQEC_GAlGOfkuw/profile-displayphoto-shrink_200_200/0/1606152633705?e=1689206400&v=beta&t=B0GovlJPoX-6gUorUS92tMolgw8_Dh-mE7RF6QgT6y0'
              }
              width={200}
              height={200}
            />
          </div>
          <div className="text-black font-kanit w-3/4 h-1/2 text-lg">
            <p className="pb-3">
              My name is Thiago, I'm currently 23 years old, I was born in
              Brazil, but currently live in Portugal. I'm a very active and
              self-realized person, my first passion is surfing and doing out in
              the open activities.
            </p>
            <p>
              I first fell in love with technology when I was a kid and my
              father got me a PS2 as a birthday gift, since that day I took a
              deep dive into the tech world, and falling in love again, but with
              programming (even more after wathing Mr. Robot). Now I'm at the
              end of my Bachelor Degree in Computer Science, started my work
              career as an Intern and in the span of 3 years, was promoted to
              Mid Level Developer.
            </p>
          </div>
        </div>
      </Pagina>
    </>
  )
}
