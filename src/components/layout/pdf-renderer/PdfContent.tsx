import { View } from '@react-pdf/renderer'
import { ProjectModel } from '@/data/models/ProjectModel'
import { ExperienceModel } from '@/data/models/ExperienceModel'
import { EducationModel } from '@/data/models/EducationModel'
import Experience from './ExperienceSection'
import Projects from './ProjectsSection'
import Education from './EducationSection'

interface ContentProps {
  experienceData: ExperienceModel[]
  projectsData: ProjectModel[]
  educationData: EducationModel[]
}

export default function Content(props: ContentProps) {
  return (
    <View>
      <Experience data={props.experienceData} />
      <Projects data={props.projectsData} />
      <Education data={props.educationData} />
    </View>
  )
}
