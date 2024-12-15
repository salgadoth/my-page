import { ProjectModel } from '@/data/models/ProjectModel'
import { View, Text } from '@react-pdf/renderer'

interface ProjectsProps {
  data: ProjectModel[]
}

export default function Projects(props: ProjectsProps) {
  return (
    <View>
      <Text>Testing Projects</Text>
    </View>
  )
}
