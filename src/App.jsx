import { useState, useEffect } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
// components
import Navbar from './component/Navbar'


function App(props) {

  return (
    <div>
      <Navbar />
      {props.children}
    </div >
  )
}

export default App