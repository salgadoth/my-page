import Image from 'next/image'

interface MyImageProps {
  src: string
  width: number
  height: number
  alt?: string
}

export default function ProfilePhoto(props: MyImageProps) {
  return (
    <Image
      className="rounded-full"
      src={props.src}
      width={props.width}
      height={props.height}
      alt="My Profile Picture"
    ></Image>
  )
}
