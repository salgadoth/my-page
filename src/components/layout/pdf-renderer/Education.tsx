import { EducationModel } from '@/data/models/EducationModel'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

interface EducationProps {
  data: EducationModel[]
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: '5px',
    fontFamily: 'Kanit',
  },
  itemsContainer: {
    width: '70%',
  },
  item: {
    fontSize: '10px',
    marginVertical: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '5px',
  },
})

export default function Education(props: EducationProps) {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Text style={{ fontWeight: 'medium' }}>Education</Text>
        <View style={styles.itemsContainer}>
          {props.data.map((edu, idx) => {
            return (
              <View key={idx} style={styles.item}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: '14px', fontWeight: 'medium' }}>
                    {edu.subject}
                  </Text>
                  <Text style={{ paddingHorizontal: '2px' }}>-</Text>
                  <Text style={{ fontSize: '12px' }}>{edu.type}</Text>
                </View>
                <View>
                  <Text
                    style={{
                      marginVertical: '1px',
                      fontSize: '8px',
                      fontStyle: 'italic',
                    }}
                  >
                    {new Date(edu.started_at).toLocaleDateString('pt-BR')} -{' '}
                    {edu.ended_at
                      ? new Date(edu.ended_at).toLocaleDateString('pt-BR')
                      : 'till now'}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}
                >
                  <Text style={{ fontSize: '12px' }}>{edu.institution}</Text>
                  <Text style={{ paddingHorizontal: '2px' }}>-</Text>
                  <Text style={{ fontSize: '10px' }}>{edu.country}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
