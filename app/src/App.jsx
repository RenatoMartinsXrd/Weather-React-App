import './App.css'
import React from 'react'
import { getCitiesBR } from './services/IbgeService'
import { Home } from './components/pages/Home'

function App() {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
