import React from 'react'
import "./Header.css"
import { useSelector }  from "react-redux"
export default function Header(props) {
  const {name} = useSelector(state => state.user)
  return (
    <div className='header'>
        <h1>Redux Practice</h1>
        <p>Hello Developer: {name} </p>
        </div>
  )
}
