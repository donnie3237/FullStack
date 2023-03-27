import React from 'react'
import './Err.scss'
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'

function Err() {
  return (
    <div className='err flex'>
        <img src={logo} alt="" />
        <h1>Err 404</h1>
        <p>เราไม่พบเส้นทางของคุณ อาจมีการผิดพลาดบางประการ</p>
        <NavLink to=''>กลับสู่หน้าหลัก</NavLink>
    </div>
  )
}

export default Err