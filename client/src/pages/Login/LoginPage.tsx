import React, { useState } from 'react'
import './LoinPage.scss'
import './responsive.scss'
import {NavLink} from 'react-router-dom'
import logo from '../img/logo.png'
import {login , logout} from '../../features/Auth/AuthSlice'
import { useAppDispatch } from '../../app/hooks'
import axios from 'axios'
import { APiURL } from '../../ApiURL'
import {toast } from 'react-toastify'

function LoginPage() {
  const disPatch = useAppDispatch();
  const [Loading , setLoading]= useState<boolean>(false)
  const [email , setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  async function handleLogin(){
    await setLoading(true)
    if(email !== '' && password !== ''){
    axios.post(`${APiURL}/login`,
      {
        email:email,
        password:password
      }
    ).then((Response)=>{
      if(Response){
        const token = Response.data
        if(token === 'notfound'){
          toast.warn('ไม่พบผู้ใช้')
          setLoading(false)
        }else if(token === 'wrongpassword'){
          toast.warn('รหัสผ่านไม่ถูกต้อง')
          setLoading(false)
        }else{
          disPatch(login({token}))
        }
      }}
    )}else{
      toast.warn('กรุณากรอกข้อมูลให้ครบถ้วน')
      setLoading(false)
    }
  };
  return (
    <div className='login flex'>
        <div className="intro flex">
          <h1>Welcome to dose of things</h1>
          <h2>Who we are!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad reprehenderit repellendus. Obcaecati molestias debitis libero fugiat delectus numquam aperiam laboriosam deserunt expedita. Minus aperiam autem qui accusantium illum asperiores error non quisquam. Ab eum veritatis inventore, dolore voluptatem beatae suscipit modi laborum id perspiciatis sunt ipsa cumque, reprehenderit architecto laboriosam? Similique rerum exercitationem ad explicabo quod, quasi unde laboriosam iusto dolores labore voluptates tempora dolorem voluptate maiores, sequi amet laudantium et laborum iste assumenda nesciunt tempore nam veritatis. Placeat cupiditate reiciendis reprehenderit commodi illum molestias quam debitis voluptatem porro sint iusto fugit accusantium ea tempora ab eveniet, eos optio.</p>
          <h2>What we do?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ea pariatur labore consequatur, nulla rerum necessitatibus veritatis harum ab similique eveniet aperiam asperiores nam optio itaque nesciunt. Voluptate, iusto esse? A impedit voluptas, doloremque quisquam quidem sapiente. Culpa sequi ipsum mollitia, delectus labore nihil voluptatum asperiores reprehenderit quia et cumque!</p>
        </div>
        <div className="from flex">
          <img src={logo} alt="" />
            <h1>Login Page</h1>
            <input 
                type="text"
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder='password'
                onKeyDown={()=>{}}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleLogin} disabled={Loading}>{Loading? 'Loading.....':'Login'}</button>
            <br />
            <p>have no account ? <NavLink to='/register'>register</NavLink></p>
        </div>
    </div>
  )
}

export default LoginPage