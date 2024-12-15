import { Font } from '@react-pdf/renderer'

export default function FontRegister() {
  Font.register({
    family: 'Kanit',
    src: 'http://fonts.gstatic.com/s/kanit/v1/kkq0USULIwHHdoKxKBuLog.ttf',
  })
}
