import React from 'react'
import './Header.scss'
import {NavLink, useNavigate} from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='header flex'>
      <div className="logo flex">
        <h1 onClick={()=>navigate('/')}>DOSE</h1>
      </div>
      <div className="navbar flex">
        <input type="search" name="" id="" placeholder='Search here' />
        <button>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="#000000"></path> </g></svg>
        </button>
      </div>
      <div className="profile flex">
        <NavLink className="flex" to='/profile'>
          <img src='https://dose-products.netlify.app/static/media/lib.6499085e0f5b668819f3.png' alt="" />
        </NavLink>
      </div>
    </div>
  )
}

export default Header