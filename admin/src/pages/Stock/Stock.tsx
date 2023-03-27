import React from 'react'
import StockHeader from '../../components/StockHeader/StockHeader'
import { Outlet } from 'react-router-dom'
import './stock.scss'

function Stock() {
  return (
    <div>
        <StockHeader/>
        <div className="outlet">
            <Outlet/>
        </div>
    </div>
  )
}

export default Stock