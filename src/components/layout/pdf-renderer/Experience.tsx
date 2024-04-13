import { ExperienceModel } from '@/data/models/ExperienceModel'
import { View, Text } from '@react-pdf/renderer'

interface ExperienceProps {
  data: ExperienceModel[]
}

export default function Experience(props: ExperienceProps) {
  return (
    <View>
      <View>
        <Text>Testing experience</Text>
      </View>
    </View>
  )
}
