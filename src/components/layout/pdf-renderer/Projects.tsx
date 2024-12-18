import { ProjectModel } from '@/data/models/ProjectModel'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

interface ProjectsProps {
  data: ProjectModel[]
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

export default function Projects(props: ProjectsProps) {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Text style={{ fontWeight: 'bold' }}>Projects</Text>
        <View style={styles.expContainer}>
          {props.data.map((project, idx) => {
            return (
              <View style={styles.expsContainer} key={idx}>
                <View style={styles.margin1}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        paddingRight: '2px',
                      }}
                    >
                      {project.name}
                    </Text>
                    <Text style={{ paddingRight: '2px' }}>-</Text>
                    <Text style={{ fontSize: '8px' }}>
                      {new Date(project.date).toLocaleDateString('pt-BR')}
                    </Text>
                  </View>
                </View>
                <View style={styles.margin1}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      width: '60%',
                      color: '#808080',
                    }}
                  >
                    {project.tech.map((stack, idx) => {
                      return (
                        <Text
                          style={{ fontSize: '8px', paddingRight: '12px' }}
                          key={idx}
                        >
                          {stack}
                        </Text>
                      )
                    })}
                  </View>
                </View>
                <Text style={styles.margin1}>{project.details}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
