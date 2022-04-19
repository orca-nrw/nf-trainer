import React from 'react'
import ExplanationsModalButton from './ExplanationsModalButton'

interface PropTypes {
  children?: React.ReactNode
  hideExplanationsModal?: boolean
}

export default function TrainerHeader ({ children, hideExplanationsModal = false }: PropTypes) {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="font-bold text-2xl">{children}</h1>
      { !hideExplanationsModal &&
        <ExplanationsModalButton />
      }
    </div>
  )
}
