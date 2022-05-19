import React from 'react'

interface Props {
  isCorrect: boolean
}

export default function FeedbackElement({ isCorrect }: Props) {
  return (
    <p
      className={`text-l font-bold text-center ${
        isCorrect ? 'text-green-600' : 'text-red-600'
      }`}
    >
      {isCorrect ? 'Richtig!' : 'Leider falsch.'}
    </p>
  )
}
