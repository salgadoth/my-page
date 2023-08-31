import React from 'react'

interface InputProps {
  id: string
  onChange: any
  value: string
  placeHolder: string
  type?: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  type,
  placeHolder,
}) => {
  return (
    <input
      placeholder={placeHolder}
      type={type}
      value={value}
      id={id}
      onChange={onChange}
      className={`
            mb-4
            bg-slate-500
            rounded-lg
            w-[100%]
        `}
    />
  )
}

export default Input
