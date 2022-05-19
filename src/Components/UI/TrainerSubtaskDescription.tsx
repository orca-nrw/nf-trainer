import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

export default function TrainerSubtaskDescription({ children }: PropTypes) {
  return <p className="text-center font-semibold pt-2 pb-6">{children}</p>
}
