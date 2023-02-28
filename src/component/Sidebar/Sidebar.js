import React from 'react'
import { useSelector } from 'react-redux'
import "./Sidebar.css"
export default function Sidebar(props) {
  const {email} = useSelector(state => state.user)
  return (
    <div className='sidebar'>
        <ul>
            <li> <a href='#'>Home</a> </li>
            <li> <a href='#'>About</a> </li>
            <li> <a href='#'>Contact</a> </li>
            <li> <a href='#'>Blog</a> </li>
            <li> <a href='#'>Hello Mr:{}</a> </li>
            <li> <a href='#'>Your Email is: {email}</a> </li>
        </ul>
    </div>
  )
}
