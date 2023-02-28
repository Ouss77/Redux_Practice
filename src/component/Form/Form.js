import React from 'react'
import "./Form.css"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from '../../Redux/userSlice';


export default function Form(props) {
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({name, email}))
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-grap'>
            <input type="text" 
            placeholder='enter name'
            onChange={(e) => setName(e.target.value)}/>

        </div>
        <div className=''>
            <input type="text" 
            placeholder='enter email adress'
            onChange={(e) => setEmail(e.target.value)}
           />

        </div>
        <div className=''>
            <input type="submit" placeholder='Add USER'/>
        </div>
    </form>
  )
}
