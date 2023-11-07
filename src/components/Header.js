import React from 'react'
import '../components/Header.css'

export const Header = (props) => {
  return (
    <div className='header'>
       <h1>List of Daily {props.title}</h1>
    </div>
  )
}
