import { ExperienceModel } from '@/data/models/ExperienceModel'
import { View } from '@react-pdf/renderer'
import Experience from './Experience'
import Projects from './Projects'
import { ProjectModel } from '@/data/models/ProjectModel'

interface ContentProps {
  experienceData: ExperienceModel[]
  projectsData: ProjectModel[]
}

export default function Content(props: ContentProps) {
  return (
    <View>
      <Experience data={props.experienceData} />
      <Projects data={props.projectsData} />
    </View>
  )
}
