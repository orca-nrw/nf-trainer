import React from 'react'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'

export default function App () {
  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <Footer />
    </div>
  )
}
