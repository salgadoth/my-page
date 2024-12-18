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
        <Text style={{fontWeight: 'medium'}}>Experiences</Text>
        <View style={styles.expsContainer}>
          {props.data.map((exp, idx) => {
            return (
              <View style={styles.expContainer} key={idx}>
                <View style={styles.margin1}>
                  <Text style={{ fontSize: '14px', fontWeight: 'medium' }}>
                    {exp.title}
                  </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center'}}>
                  <Text style={{ fontSize: '10px', paddingRight: '4px' }}>
                    {exp.company} - {exp.country}
                  </Text>
                  <Text style={{paddingRight: '4px'}}>|</Text>
                  <Text
                    style={{
                      marginVertical: '1px',
                      fontSize: '8px',
                      fontStyle: 'italic'
                    }}
                  >
                    {new Date(exp.started).toLocaleDateString('pt-BR')} -{' '}
                    {exp.ended
                      ? new Date(exp.ended).toLocaleDateString('pt-BR')
                      : 'till now'}
                  </Text>
                </View>
                <Text style={styles.margin1}>{exp.desc}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
