import { ExperienceModel } from '@/data/models/ExperienceModel'

interface ApresentacaoProps {
  data?: ExperienceModel
}

export default function Apresentacao({ data }: ApresentacaoProps) {
  return (
    <div className="font-kanit text-2xl">
      <p className="opacity-70">Hi, my name is</p>
      <p className="text-7xl font-kanitMed !opacity-100 py-3">Thiago Salgado</p>
      <p className="opacity-70 py-3">I build things for the web.</p>
      <p className="opacity-70">
        I am a FullStack software developer, specializing in building (and
        occasionally leading) exceptional web experiences.{' '}
        {data?.company && (
          <>
            Currently I&apos;m focused in building solutions for {data.company}.
          </>
        )}
      </p>
    </div>
  )
}
