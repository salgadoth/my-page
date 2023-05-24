import Apresentacao from '@/components/templates/Apresentacao'
import Pagina from '@/components/templates/Pagina'
import TopBar from '@/components/templates/TopBar'

export default function Home() {
  return (
    <>
      <TopBar />
      <Pagina classNameParent="!bg-indigo">
        <Apresentacao />
      </Pagina>
    </>
  )
}
