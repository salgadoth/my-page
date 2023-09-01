'use client'

import { ExperienceModel } from '@/data/models/ExperienceModel'
import { useEffect, useState } from 'react'
import Spin from '../layout/Spin'
import { getFormattedMonth } from '@/util/StringUtils'

interface CardsProp {
  data?: ExperienceModel[]
}

interface Card {
  id: string
  currentState: boolean
}

export default function Cards(props: CardsProp) {
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState<Card[]>([])

  const handleClick = (id: string) => {
    const newArray = cards.map((item: Card) => {
      if (id === item.id) {
        return { ...item, currentState: !item.currentState }
      } else {
        return item
      }
    })

    setCards(newArray)
  }

  useEffect(() => {
    if (props.data !== undefined && cards.length === 0) {
      for (let i = 0; i < props.data.length; i++) {
        const card: Card = { id: props.data[i].id, currentState: false }
        cards.push(card)
      }
    }

    setLoading(false)
  }, [cards, props.data])

  if (loading) {
    return (
      <Spin>
        <p>Loading...</p>
      </Spin>
    )
  } else {
    return (
      <>
        {props.data?.map((exp: ExperienceModel, i) => {
          const startedAtDate = new Date(exp.started)
          const endedAtDate = new Date(exp.ended)

          const formattedStartedMonth = getFormattedMonth(exp.started)
          const formattedEndedMonth = getFormattedMonth(exp.ended)
          return (
            <div
              key={exp.id}
              className="group h-80 w-80 [perspective:1000px] hover:cursor-pointer"
            >
              <div
                className={`"relative h-full w-full rounded-xl transition-all duration-700 bg-white  [transform-style:preserve-3d] 
                ${
                  cards.at(i)?.currentState === true
                    ? '[transform:rotateY(180deg)]'
                    : ''
                }`}
                onClick={() => handleClick(exp.id)}
              >
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="z-10 w-full h-full text-black flex flex-col justify-center flex-wrap text-center p-4">
                    {cards.at(i)?.id === exp.id &&
                    cards.at(i)?.currentState !== true ? (
                      <span className="font-kanitMed text-lg">
                        <p className="capitalize pb-4">{exp.title}</p>
                        <p className="pb-4">{exp.company}</p>
                        <p>
                          {formattedStartedMonth +
                            '/' +
                            startedAtDate.getFullYear()}{' '}
                          -{' '}
                          {exp.ended
                            ? formattedEndedMonth +
                              '/' +
                              endedAtDate.getFullYear()
                            : 'till now'}
                        </p>
                        <p>{exp.country}</p>
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full text-black">
                  <div className="z-0 w-full h-full text-black flex flex-col justify-center flex-wrap p-4">
                    {cards.at(i)?.id === exp.id &&
                    cards.at(i)?.currentState === true ? (
                      <span className="[transform:scale(-1,1)] text-center font-kanitMed text-lg">
                        <p className="animate-fadeIn">{exp.desc}</p>
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }
}
