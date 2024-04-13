import { UserModel } from '@/data/models/UserModel'
import { View, Text, StyleSheet, Link, Image } from '@react-pdf/renderer'

interface HeaderProps {
  data: UserModel
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    width: '30%',
    fontFamily: 'Lato',
  },
  photoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: '10px',
  },
  photo: {
    borderRadius: '50%',
    width: '50%',
  },
  detailColumn: {
    fontSize: '13px',
    paddingVertical: '10px',
    paddingHorizontal: '5px',
  },
  name: {
    paddingBottom: '5px',
  },
  subtitles: {
    fontSize: '12px',
  },
  linkColumn: {},
  link: { fontSize: '10px', textDecoration: 'none', color: 'white' },
})

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          src={
            'https://media.licdn.com/dms/image/D4D03AQHTZTulCYDt-Q/profile-displayphoto-shrink_200_200/0/1687982548105?e=1718236800&v=beta&t=RgHkDMHAC2fp0XhCwC9Z5ASUL3S3fzUke4XXJgpevHE'
          }
        />
      </View>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>
          {props.data.fname + ' ' + props.data.lname}
        </Text>
        <Text style={styles.subtitles}>{props.data.title}</Text>
      </View>
      <View style={styles.linkColumn}>
        <Link src="mailto:thiagohenriques1699@gmail.com" style={styles.link}>
          thiagohenriques1699@gmail.com
        </Link>
      </View>
    </View>
  )
}
