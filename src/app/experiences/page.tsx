import CardContainer from '@/components/templates/CardContainer'
import Cards from '@/components/templates/Cards'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

export default function ExperiencePage(props: any) {
  const data = [
    {
      _id: 'asuh1244uh1u1o1i2n32a',
      title: 'Software developer',
      company: 'VerdeCard',
      lvl: 'Intern',
      started: 'Sep 2020',
      ended: 'March 2021',
      cuntry: 'Brazil',
      desc: 'Maintenance of Java SE and Spring Framework systems. Participation in small-sized projects.',
    },
    {
      _id: 'aioghh139u2huhnfds',
      title: 'Java Analyst Programmer',
      company: 'VerdeCard',
      lvl: 'Junior',
      started: 'March 2021',
      ended: 'March 2022',
      cuntry: 'Brazil',
      desc: 'Development of Java SE and Spring Framework systems. Participation in small and medium-sized projects.',
    },
    {
      _id: 'sdihgbu2h4guyihbsqyg',
      title: 'Java Analyst Programmer',
      company: 'VerdeCard',
      lvl: 'Mid',
      started: 'March 2023',
      ended: '',
      cuntry: 'Brazil',
      desc: 'Responsible for the development and maintenance of Java EE and Spring Framework systems. Participation in large-scale projects and multidisciplinary teams',
    },
  ]

  return (
    <>
      <TopBar />
      <Pagina
        header="My experiences"
        classNameParent="!bg-indigo"
        classNameHeader="!text-white"
      >
        <CardContainer>
          <Cards data={data} />
        </CardContainer>
      </Pagina>
    </>
  )
}
