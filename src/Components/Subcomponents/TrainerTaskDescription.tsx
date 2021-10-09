import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

export default function TrainerTaskDescription ({ children }: PropTypes) {
  return (
    <pre className="font-sans pt-8 pb-2">
      {children}
    </pre>
  )
}
