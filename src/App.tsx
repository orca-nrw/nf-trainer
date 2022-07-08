import React from 'react'
import TrainerRouter from './Components/TrainerRouter'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/UI/MainLayout'
import Home from './Components/Pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="trainer/*" element={<TrainerRouter />} />
      </Route>
    </Routes>
  )
}
