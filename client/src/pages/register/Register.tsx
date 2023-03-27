import React,{useEffect, useState} from 'react'
import './Register.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos'
import {motion} from 'framer-motion'
import logo from '../img/logo.png'
import axios from 'axios'
import { APiURL } from '../../ApiURL'
AOS.init()

function Register() {
    const navigate = useNavigate()
    const [name ,setName] = useState<string>('')
    const [email ,setEmail] = useState<string>('')
    const [password ,setPassword] = useState<string>('')
    const [password2 ,setPassword2] = useState<string>('')

    function Register() {
        axios.post(`${APiURL}/otp`,
            {
                email:email
            }
        ).then((Response)=>{
            if(Response.data != ''){
                
                navigate('/verify')
            }
        })
    }
    
  return (
    <div className="register flex" 
        data-aos="fade-left"
        data-aos-duration='700'
    > 
        <div className="from flex">
            <img src={logo} alt="" />
            <h1>Register</h1>
            <input 
                type="text" 
                placeholder='Name'
                onChange={(e)=>setName(e.target.value)}
            />
            <input 
                type='email'
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
                pattern=''
            />
            <input
                type="password" 
                placeholder='password'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <input 
                type="password"
                placeholder='confirm password'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className="terms">
                <input type="checkbox" name="" id="" />
                <p>agree with  <NavLink to='/terms'>terms of service</NavLink></p>
            </div>
            <button onClick={Register} className='flex'>Register</button>
            <div className="br"></div>
            <NavLink className='flex' to='/'>มีบัญชีอยู่แล้ว</NavLink>
        </div>
    </div>
  )
}

export default Register