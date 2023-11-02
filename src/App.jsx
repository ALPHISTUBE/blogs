import './App.css'
import Nav from './nav/nav'
import Data from './componant/data-load/data'
import { useEffect, useState } from 'react'

function App() {


  return (
    <div>
      <Nav></Nav>
      <div className='grid'>
      <Data ></Data>
      </div>
    </div>
  )
}

export default App
