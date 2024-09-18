import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { PageNotFound } from './pages/PageNotFound'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App =()=> {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
