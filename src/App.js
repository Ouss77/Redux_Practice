import React, { useState } from 'react'
import Header from './component/Header/Header'
import Sidebar from './component/Sidebar/Sidebar'
import "./App.css"
import Form from './component/Form/Form'
export default function App() {

  // const[name, setName] = useState("")
  // const[email, setEmail] = useState("")
  // const[isChanged, setisChanged] = useState(false)

  // const addUser = (e) =>{
  //   e.preventDefault();
  //   setisChanged(true)}

  return (
    <div className='App'>
      <Header  />
      <div className='main'>
      <Sidebar />
      <Form />
      </div>
  
    </div>
  )
}
