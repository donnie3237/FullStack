import axios from 'axios'
import React, { useEffect , useState  } from 'react'
import { APiURL } from '../../ApiURL'
import './profile.scss'
import { useAppDispatch } from '../../app/hooks'
import { logout } from '../../features/Auth/AuthSlice'
import { useNavigate } from 'react-router-dom'
import Chat from './Chat/Chat'


function Profile() {
  const disPatch = useAppDispatch()
  const navigate = useNavigate()
  async function Logout(){
    await disPatch(logout())
    navigate('/')
  }
  return (
    <div className='profile flex'>
        <div className="change flex">
            <h1>เปลี่ยนแปลงข้อมูล</h1>
        </div>
        <Chat/>
        <button className='logout' onClick={Logout}>Logout</button>
    </div>
  )
}

export default Profile