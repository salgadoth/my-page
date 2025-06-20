import React, { useEffect, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationClass, setAnimationClass] = useState('')
  const [childAnimationClass, setChildAnimationClass] = useState('')

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      setAnimationClass('animate-expand')
      setChildAnimationClass('animate-fadeIn')
    } else if (isAnimating) {
      setAnimationClass('animate-shrink')
      setChildAnimationClass('animate-fadeOut')
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, isAnimating])

  if (!isAnimating) return null

  return (
    <>
      {/* Modal Background */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`fixed md:w-[50%] md:h-[50%] md:top-[30%] md:left-[25%] inset-0 flex items-center justify-center z-50 transform transition-transform rounded-2xl bg-white shadow-lg p-6 ${animationClass} xs:h-[65%] xs:w-[65%] xs:top-[15%] xs:left-[18%]`}
      >
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
        <div
          className={`p-4 transition-all duration-300 text-black font-kanit ${childAnimationClass} xs:h-[90%]`}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
