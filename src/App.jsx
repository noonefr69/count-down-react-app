import React from 'react'
import Clock from './Clock'
import mountain from './assets/images/pattern-hills.svg'
import { FaFacebookSquare } from "react-icons/fa"; 
import { FaPinterest } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa"; 

export default function App() {

  const targetDate = new Date('2024-10-19T21:59:59');

  return (
    <div className='container'>
      <h1>WE'RE LAUNCHING SOON</h1>
      <Clock targetDate={targetDate}/>
      <div className="icons">
        <ul>
          <li><a href="#"><FaFacebookSquare className='icon face'/></a></li>
          <li><a href="#"><FaPinterest className='icon pint'/></a></li>
          <li><a href="#"><FaInstagram className='icon inst'/></a></li>
        </ul>
      </div>
      <img className='hills' src={mountain} alt="" />
    </div>
  )
}
