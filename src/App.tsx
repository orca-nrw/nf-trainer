import React from 'react'
import TrainerRouter from './Components/TrainerRouter'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/UI/MainLayout'
import Home from './Components/Pages/Home'

export default function App() {
  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="trainer/*" element={<TrainerRouter />} />
        </Route>
      </Routes>
    </div>
  )
}
