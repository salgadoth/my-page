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
                <View>
                  <Text>{edu.subject}</Text>
                  <Text>{edu.type}</Text>
                  <Text>{edu.institution}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
