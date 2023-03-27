import React, { useEffect, useState } from 'react'
import './mainpage.scss'
import { useAppDispatch } from '../../app/hooks'
import { logout } from '../../features/Auth/AuthSlice';
import axios from 'axios';
import { APiURL } from '../../ApiURL';
import Aos from 'aos';

function MainPage() {
  const [stock,setStock] = useState<any[]>([])
  const fastt = [{name:1,con:21},{name:2,con:21},{name:3,con:21},{name:4,con:21}]
  useEffect(() => {
    axios.get(`${APiURL}/stock/get`).then((Response)=>{
      console.log(Response.data)
      setStock(Response.data)
    })
  }, [])

  return (
    <div className='mainpage flex'>
      <h1>สินค้าลดราคาวันนี้</h1>
      <div className="flash">
        {fastt && fastt.map((fastt)=>{
          return <div className='flashSale' key={fastt.name}>
            <h1>{fastt.con}</h1>
          </div>
        })}
      </div>
      <h1>สินค้าของเรา</h1>
      {
        stock? <div className='allpiece'>
          {stock && stock.map((stock)=>{
            return <div data-aos='zoom-in' className='piece' key={stock._id}>
              <div className="flex">
                <img src="https://dose-products.netlify.app/static/media/iot.15d4ebac126209faa192.png" alt="" />
                <div className="text">
                  <h1>{stock.name}</h1>
                  <h1>price : {stock.price} $</h1>
                  <h1>About : {stock.about}</h1>
                </div>
                <button>สั่งซื้อสินค้า</button>
              </div>
            </div>
          })} 
          </div> 
        :
        <h1>Loading.....</h1>
      }
    </div>
  )
}

export default MainPage