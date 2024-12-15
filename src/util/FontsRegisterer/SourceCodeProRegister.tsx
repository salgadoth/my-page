import { Font } from '@react-pdf/renderer'

export default function FontRegister() {
  Font.register({
    family: 'Kanit',
    fonts: [
      {
        src: './public/SourceCodePro-Black.ttf',
      },
      {
        src: './public/Kanit-BlackItalic.ttf',
        fontStyle: 'italic',
      },
      {
        src: './public/SourceCodePro-Bold.ttf',
        fontStyle: 'bold',
      },
      {
        src: './public/SourceCodePro-ExtraBold.ttf',
        fontStyle: 'extrabold',
      },
      {
        src: './public/SourceCodePro-Medium.ttf',
        fontStyle: 'italic',
      },
      {
        src: './public/SourceCodePro-Regular.ttf',
        fontStyle: 'regular',
      },
      {
        src: './public/SourceCodePro-SemiBold.ttf',
        fontStyle: 'regular',
      },
    ],
  })
}
