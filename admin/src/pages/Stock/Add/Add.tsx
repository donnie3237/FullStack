import React, { useState } from 'react'
import './Add.scss'
import axios from 'axios'
import { APiURL } from '../../../ApiURL'
import {toast} from 'react-toastify'

function Add() {
    const [name ,setName] = useState<string>('')
    const [price ,setPrice] = useState<string>('')
    const [about ,setAbout] = useState<string>('')

    function addTostock(){
        axios.post(`${APiURL}/stock/add`,{
            name:name,
            price:price,
            about:about
        }).then((Response)=>{
            setName('')
            setPrice('')
            setAbout('')
            toast.success('success')
        }).catch((err)=>{
            toast.warn('server is not running')
        })
    }
  return (
    <div className='addTostock flex'>
        <h1>เพิ่มสินค้า</h1>
        <img src="" alt="" />
        <input type="file" />
        <input type="text"
            placeholder='ชื่อสินค้า'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <input type="number"
          placeholder='ราคา' 
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
        <input type="text" 
            value={about}
            placeholder='เกี่ยวกับสินค้า'
            onChange={(e)=>setAbout(e.target.value)}
        />
        <button onClick={addTostock}>เพิ่มสินค้านี้</button>
    </div>
  )
}

export default Add