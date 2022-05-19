import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

export default function TrainerTaskDescription({ children }: PropTypes) {
  return <p className="font-sans pt-8 pb-2 whitespace-pre-line">{children}</p>
}
