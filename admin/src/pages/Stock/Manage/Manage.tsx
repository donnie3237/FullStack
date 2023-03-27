import React, { useEffect, useState } from 'react'
import './manage.scss'
import axios from 'axios'
import { APiURL } from '../../../ApiURL'

interface Stock{
    _id:string,
    name:string,
    price:number,
    about:string
}

function Manage() {
    const [stock , setStock]= useState<Stock[]>([])
    useEffect(() => {
      axios.get(`${APiURL}/stock/get`).then((Response)=>{
        setStock(Response.data)
      })
    }, [])
  return (
    <div className='manage flex'>
        <input type="search" name="" id=""
            placeholder='Search here' 
        />
        <p>จัดเรียงตาม</p>
        <select name="" id="">
            <section>hello</section>
        </select>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>manage</th>
                </tr>
                <tbody>
                    
                </tbody>
            </thead>
            <tbody>
            {stock && stock.map((stock)=>{
            return <tr key={stock._id}>
                <th>{stock.name}</th>
                <th>{stock.price}</th>
            </tr>
            })
            }
            </tbody>
        </table>
        </div>
  )
}

export default Manage