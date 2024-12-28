import { Font } from '@react-pdf/renderer'

export default function FontRegister() {
  Font.register({
    family: 'Kanit',
    fonts: [
      {
        src: 'fonts/Kanit/Kanit-Regular.ttf',
      },
      {
        src: 'fonts/Kanit/Kanit-SemiBold.ttf',
        fontWeight: 'bold',
      },
      {
        src: 'fonts/Kanit/Kanit-Medium.ttf',
        fontWeight: 'medium',
      },
      {
        src: 'fonts/Kanit/Kanit-Italic.ttf',
        fontStyle: 'italic',
      },
    ],
  })
}
