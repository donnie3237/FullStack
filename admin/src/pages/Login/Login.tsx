import React from 'react'
import './login.scss'
import { useAppDispatch } from '../../app/hooks'
import { login } from '../../features/Auth/AuthSlice'

function Login() {
    const disPatch = useAppDispatch()
  return (
    <div className='Login'>
        <div className="from flex">
        <h1>Admin</h1>
        <input type="text" placeholder='Admin username' />
        <input type="text" placeholder='Admin password'/>
        <button onClick={()=>disPatch(login())}>Login</button>
      </div>
    </div>
  )
}

export default Login