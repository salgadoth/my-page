/* eslint-disable jsx-a11y/alt-text */
import GitHubSVG from '@/components/svg/github'
import GmailSVG from '@/components/svg/gmail'
import LeetCodeSVG from '@/components/svg/leetcode'
import LinkedInSvg from '@/components/svg/linkedin'
import PhoneSVG from '@/components/svg/phone'
import { UserModel } from '@/data/models/UserModel'
import { View, Text, StyleSheet, Link, Image } from '@react-pdf/renderer'

interface HeaderProps {
  data: UserModel
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    width: '30%',
    fontFamily: 'Kanit',
    // fontWeight: 'bold',
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
    fontSize: '12px',
  },
  name: {
    textAlign: 'center',
    fontSize: '16px',
    paddingBottom: '5px',
  },
  subtitles: {
    fontSize: '12px',
    color: 'white',
    textAlign: 'center',
  },
  linkColumn: {},
  link: { fontSize: '10px', textDecoration: 'none', color: 'white' },
  linksContainer: {
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
          src={{
            uri:
              process.env.NEXT_PUBLIC_VPS_URL +
              '/my-page/imgs/about/profile-pic.jpg',
            headers: {},
            method: 'GET',
            body: '',
          }}
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
        <View style={styles.skillsColumn}>
          <Text>Languages:</Text>
          <View style={styles.skillsList}>
            {props.data.my_languages.map((lang, idx) => {
              return (
                <Text key={idx} style={styles.skillsItem}>
                  {lang.language} - {lang.fluency_level}
                </Text>
              )
            })}
          </View>
        </View>
        <View>
          <Text>My Links:</Text>
          <View style={styles.linksContainer}>
            {props.data.my_links.map((link, idx) => {
              switch (link.src.toLocaleLowerCase()) {
                case 'github':
                  return (
                    <Link key={idx} src={link.href} style={styles.link}>
                      <GitHubSVG width="24px" height="24px" />
                    </Link>
                  )
                case 'linkedin':
                  return (
                    <Link key={idx} src={link.href} style={styles.link}>
                      <LinkedInSvg width="24px" height="24px" />
                    </Link>
                  )
                case 'leetcode':
                  return (
                    <Link key={idx} src={link.href} style={styles.link}>
                      <LeetCodeSVG width="24px" height="24px" />
                    </Link>
                  )
                default:
                  return <p>Link unknown.</p>
              }
            })}
          </View>
        </View>
        <View>
          <Text>Contact me: </Text>
          <View style={styles.linksContainer}>
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
            })}
          </View>
        </View>
      </View>
    </View>
  )
}
