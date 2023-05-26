interface CardContainerProps {
  children: any
}

export default function CardContainer(props: CardContainerProps) {
  return <div className="flex justify-around flex-wrap">{props.children}</div>
}
