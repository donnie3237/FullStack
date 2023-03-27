import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
        <div className="logo flex">ADMIN</div>
        <div className="bar flex">
            <NavLink className='flex' to='/stock'>รายการสินค้า</NavLink>
            <NavLink className='flex' to='/status'>สถานะระบบ</NavLink>
            <NavLink className='flex' to='/statistic'>ข้อมูลเชิงลึก</NavLink>
        </div>
    </div>
  )
}

export default Header