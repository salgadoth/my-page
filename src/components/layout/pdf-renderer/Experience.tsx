import { ExperienceModel } from '@/data/models/ExperienceModel'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

interface ExperienceProps {
  data: ExperienceModel[]
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: '5px',
    fontFamily: 'Kanit',
    // fontWeight: 'bold',
  },
  expsContainer: {
    width: '70%',
  },
  expContainer: {
    fontSize: '10px',
    marginVertical: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '5px',
  },
  margin1: {
    marginVertical: '1px',
  },
})

export default function Experience(props: ExperienceProps) {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Text>Experiences</Text>
        <View style={styles.expsContainer}>
          {props.data.map((exp, idx) => {
            return (
              <View style={styles.expContainer} key={idx}>
                <Text style={styles.margin1}>
                  <Text style={{ fontWeight: 'bold', fontSize: '12px' }}>
                    {exp.title}
                  </Text>
                  <Text>
                    {' '}
                    - {exp.company} - {exp.country}
                  </Text>
                </Text>
                <Text style={styles.margin1}>
                  {new Date(exp.started).toLocaleDateString('pt-BR')} -{' '}
                  {exp.ended
                    ? new Date(exp.ended).toLocaleDateString('pt-BR')
                    : 'till now'}
                </Text>
                <Text style={styles.margin1}>{exp.desc}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
