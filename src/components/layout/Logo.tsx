import Link from 'next/link'

interface LogoSvgProps {
  width: number
  height: number
  url: string
}

export default function LogoSvg(props: LogoSvgProps) {
  return (
    <Link href={props.url}>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={props.width}
          height={props.height}
          viewBox="0 0 1080 1080"
        >
          <defs></defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="transparent"
          ></rect>
          <g
            transform="matrix(1 0 0 1 540 540)"
            id="e8dd5e3d-d2b2-41d8-b13e-fcbe78bac2d9"
          >
            <rect
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeDashoffset: 0,
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                fill: 'rgb(255,255,255)',
                fillRule: 'nonzero',
                opacity: 1,
                visibility: 'hidden',
              }}
              vectorEffect="non-scaling-stroke"
              x="-540"
              y="-540"
              rx="0"
              ry="0"
              width="1080"
              height="1080"
            />
          </g>
          <g
            transform="matrix(1 0 0 1 540 540)"
            id="4a9679bb-e200-4e36-bfec-a60a2b6c746c"
          ></g>
          <g transform="matrix(2.48 0 0 2.48 497.77 605.42)" id="SvgjsG2777">
            <path
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeDashoffset: 0,
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                fill: 'rgb(167,179,4)',
                fillRule: 'nonzero',
                opacity: 1,
              }}
              vectorEffect="non-scaling-stroke"
              transform=" translate(-150.6, -178.85)"
              d="M 151 293 C 105.2 293.2 67.9 256.2 67.9 210.5 C 67.9 191.9 74.2 173.9 85.7 159.3 L 88.5 156.10000000000002 C 88.8 155.8 89.2 155.40000000000003 89.5 155.10000000000002 L 171 64.70000000000002 C 183.8 76.20000000000002 184.9 95.90000000000002 173.4 108.60000000000002 L 111.9 176.8 C 103.7 186.10000000000002 99.2 198.10000000000002 99.2 210.5 C 99.2 239 122.7 262.3 151.4 261.8 C 179.6 261.3 202.10000000000002 237.9 202.10000000000002 209.70000000000002 L 202.10000000000002 188.3 C 202.10000000000002 171.10000000000002 216.00000000000003 157.20000000000002 233.3 157.20000000000002 L 233.3 209.5 C 233.2 255.2 196.6 292.8 151 293 z"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(2.55 0 0 2.55 509.32 441.21)" id="SvgjsG2777">
            <path
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeDashoffset: 0,
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                fill: 'rgb(167,179,4)',
                fillRule: 'nonzero',
                opacity: 1,
              }}
              vectorEffect="non-scaling-stroke"
              transform=" translate(-150.45, -120.1)"
              d="M 215.4 139.6 L 215.4 139.79999999999998 L 130.3 234.2 C 117.50000000000001 222.7 116.4 203 127.9 190.29999999999998 L 189.4 122.09999999999998 C 197.6 112.79999999999998 202.1 100.69999999999999 202.1 88.39999999999998 C 202.1 59.89999999999998 178.6 36.59999999999998 149.89999999999998 37.09999999999998 C 121.5 37.5 99 61 99 89.2 L 99 110.6 C 99 127.8 85.1 141.7 67.8 141.7 L 67.8 89.4 C 67.9 43.9 104.5 6.2 150 6 C 195.8 5.8 233.1 42.8 233.1 88.5 C 233.2 107.1 226.9 125.1 215.4 139.6 z"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </span>
    </Link>
  )
}
