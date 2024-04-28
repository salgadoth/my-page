import { ExperienceModel } from '@/data/models/ExperienceModel'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

interface ExperienceProps {
  data: ExperienceModel[]
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: '5px',
    fontFamily: 'Lato',
  },
  expsContainer: {
    width: '70%',
  },
  expContainer: {
    fontSize: '12px',
    marginVertical: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '5px',
  },
  margin2: {
    marginVertical: '2px',
  },
  margin4: {
    marginVertical: '4px',
  },
  fontSize8: {
    fontSize: '8px',
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
                <Text style={styles.margin2}>
                  <Text style={{ fontWeight: 'bold', fontSize: '13px' }}>
                    {exp.title}
                  </Text>
                  <Text style={{ fontSize: '9px' }}> - {exp.company}</Text>
                </Text>
                <Text style={styles.margin2}>{exp.country}</Text>
                <Text style={(styles.margin4, styles.fontSize8)}>
                  {new Date(exp.started).toLocaleDateString('pt-BR')} -{' '}
                  {exp.ended
                    ? new Date(exp.ended).toLocaleDateString('pt-BR')
                    : 'till now'}
                </Text>
                <Text style={styles.margin2}>{exp.desc}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
