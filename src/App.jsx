import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App =()=> {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
