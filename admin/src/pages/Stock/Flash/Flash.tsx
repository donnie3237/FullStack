import React, { useEffect, useState } from 'react'
import './Flash.scss'
import axios from 'axios'
import { APiURL2 } from '../../../ApiURL'

function Flash() {
  return (
    <div className='fast flex'>
        <div className="from flex">
            <h1>สินค้าลดราคา</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>FlashSale</button>
        </div>
    </div>
  )
}

export default Flash