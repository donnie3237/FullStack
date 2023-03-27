import React from 'react'
import './Verify.scss'
import {useNavigate} from 'react-router-dom'
function Verify() {
  const navigate = useNavigate()
  return (
    <div className='verify flex'>
        <h1>กรุณากรอกรหัส OTP</h1>
        <input 
            type="number" 
            pattern='[0-9]'
            placeholder='รหัส OTP'
        />
        <button onClick={()=>navigate('/')}>ยืนยันรหัส</button>
    </div>
  )
}

export default Verify