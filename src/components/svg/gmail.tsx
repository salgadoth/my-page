import { G, Path, Svg } from '@react-pdf/renderer'
import { SVGProps } from '../common/interfaces/props'

export default function GmailSVG(props: SVGProps) {
  return (
    <Svg height={props.height} width={props.width}>
      <G>
        <Path
          fill="#FFFFFF"
          d="M0,2.963v15.584h21.51V2.963H0z M15.722,3.511l-4.969,4.966L5.206,3.511H15.722z M2.912,5.993
		l5.992,5.19l-5.992,4.589C2.912,15.772,2.912,5.993,2.912,5.993z M18.597,18.033H2.912v-1.41l6.403-4.926l1.438,1.438l1.507-1.438
		l6.337,4.926V18.033z M18.597,15.772l-5.822-4.725l5.822-5.755V15.772z"
        />
      </G>
    </Svg>
  )
}
