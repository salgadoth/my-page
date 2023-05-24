interface CardContainerProps {
  children: any
}

export default function CardContainer(props: CardContainerProps) {
  return <div className="grid grid-cols-3">{props.children}</div>
}
