import './App.css'
import React from 'react'
import { getStatesBR, getCitiesBR } from './services/IbgeService'
import { Home } from './components/pages/Home'

function App() {
  React.useEffect(() => {
    getCitiesBR().then(result => console.log(result))
  }, [])

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
