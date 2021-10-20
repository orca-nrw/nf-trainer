import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

export default function TrainerHeader ({ children }: PropTypes) {
  return (
    <h1 className="font-bold text-2xl">
      {children}
    </h1>
  )
}
