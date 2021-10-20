import React from 'react'
import { Footer } from './Components/UI/Footer'
import { Header } from './Components/UI/Header'
import TrainerRouter from './Components/TrainerRouter'

export default function App () {
  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <TrainerRouter />
      <Footer />
    </div>
  )
}
