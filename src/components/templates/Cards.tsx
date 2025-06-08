'use client'

import { ExperienceModel } from '@/data/models/ExperienceModel'
import { calculateMonthsBetween } from '@/util/DateUtils'
import { getFormattedMonth } from '@/util/StringUtils'
import { useEffect, useState } from 'react'
import Modal from '../layout/Modal'
import Spin from '../layout/Spin'

interface CardsProp {
  data?: ExperienceModel[]
}

interface Card {
  id: string
  currentState: boolean
}

export default function Cards(props: CardsProp) {
  const [loading, setLoading] = useState(true)
  const [cards] = useState<Card[]>([])
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = (id: string) => {
    setSelectedCard(id)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
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
        {/* Cards render */}

        {props.data?.map((exp: ExperienceModel, i) => {
          const startedAtDate = new Date(exp.started)
          const endedAtDate = new Date(exp.ended)

          const formattedStartedMonth = getFormattedMonth(exp.started)
          const formattedEndedMonth = getFormattedMonth(exp.ended)
          if (selectedCard === exp.id) {
            return (
              <div
                key={exp.id}
                className="group h-80 w-80 [perspective:1000px] hover:cursor-pointer"
              ></div>
            )
          } else
            return (
              <div
                key={exp.id}
                className="group h-80 w-80 m-1 [perspective:1000px] hover:cursor-pointer xs:my-3"
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
                  <div className="absolute inset-0">
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
                        <span className="text-center font-kanitMed text-lg">
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

        {/* Modal render */}
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {props.data
              ?.filter((exp) => exp.id === selectedCard)
              .map((exp) => {
                const startedAtDate = new Date(exp.started)
                const endedAtDate = new Date(exp.ended)

                const diff = calculateMonthsBetween(
                  startedAtDate.getMonth(),
                  startedAtDate.getFullYear(),
                  endedAtDate.getMonth(),
                  endedAtDate.getFullYear(),
                )

                console.log(diff)

                const years = Math.floor(diff)
                const months = Math.round((diff % 1) * 100)

                const yearPart =
                  years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''
                const monthPart =
                  months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''

                return (
                  <div key={exp.id} className="p-4 h-full">
                    <h2 className="text-2xl font-bold">{exp.title}</h2>
                    <div className="flex items-center w-1/3 text-center sm:w-full">
                      <p className="text-lg pr-5">{exp.company} </p>
                      <p className="text-sm italic opacity-[0.55]">
                        {[yearPart, monthPart].filter(Boolean).join(' and ') ||
                          'currently employed'}
                      </p>
                    </div>
                    <div className="overflow-auto h-[90%]">
                      <p className="mt-4">{exp.desc}</p>
                    </div>
                  </div>
                )
              })}
          </Modal>
        )}
      </>
    )
  }
}
