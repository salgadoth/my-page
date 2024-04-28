import GmailSVG from '@/components/svg/gmail'
import LeetCodeSVG from '@/components/svg/leetcode'
import PhoneSVG from '@/components/svg/phone'
import { UserModel } from '@/data/models/UserModel'
import ReactPDF, {
  View,
  Text,
  StyleSheet,
  Link,
  Image,
} from '@react-pdf/renderer'
import { ReactElement } from 'react'

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
  skillsColumn: {
    paddingVertical: '10px',
  },
  skillsList: {
    paddingLeft: '10px',
  },
  skillsTitle: {
    fontWeight: 'bold',
  },
  skillsItem: {
    paddingVertical: '2px',
    color: 'white',
  },
  name: {
    paddingBottom: '5px',
  },
  subtitles: {
    fontSize: '12px',
    color: 'white',
  },
  linkColumn: {},
  link: { fontSize: '10px', textDecoration: 'none', color: 'white' },
  contactsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '8px',
    // width: '90%',
  },
})

export default function Header(props: HeaderProps) {
  // props.data.my_links.map()

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
        <View style={styles.skillsColumn}>
          <Text style={styles.skillsTitle}>Skills:</Text>
          <View style={styles.skillsList}>
            {props.data.skill_set.map((skill, idx) => {
              return (
                <Text key={idx} style={styles.skillsItem}>
                  {skill}
                </Text>
              )
            })}
          </View>
        </View>
        <View style={styles.linkColumn}>
          <Text>Contact me: </Text>
          <View style={styles.contactsContainer}>
            {props.data.my_contacts.map((contact, idx) => {
              if (contact.type === 'e-mail')
                return (
                  <Link
                    key={idx}
                    src={'mailto:' + contact.contact}
                    style={styles.link}
                  >
                    <GmailSVG width="24px" height="24px" />
                  </Link>
                )
              // else if (contact.type === 'mobile')
              else
                return (
                  <Link
                    key={idx}
                    src={'tel:' + contact.contact}
                    style={styles.link}
                  >
                    <PhoneSVG width="24px" height="24px" />
                  </Link>
                )
              // else src = contact.contact
            })}
          </View>
        </View>
      </View>
    </View>
  )
}
