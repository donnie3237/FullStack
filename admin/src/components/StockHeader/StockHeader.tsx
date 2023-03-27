import React from 'react'
import './StockHeader.scss'
import { NavLink } from 'react-router-dom'

function StockHeader() {
  return (
    <div className='StockHeader flex'>
        <NavLink className='flex' to='access'>เพิ่ม,ลด สินค้า</NavLink>
        <NavLink className='flex' to='flash'>สินค้าลดราคา</NavLink>
        <NavLink className='flex' to='manage'>จัดการสินค้า</NavLink>
    </div>
  )
}

export default StockHeader