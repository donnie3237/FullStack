import { useState } from 'react'
import './App.scss'
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/Login/LoginPage'
import Register from './pages/register/Register'
import Verify from './pages/register/verify/Verify'
import { useAppSelector, useAppDispatch } from './app/hooks';
import Terms from './pages/register/terms/Terms'
import Err from './pages/Err/Err'
import MainPage from './pages/MainPage/MainPage'
import Header from './components/Header/Header'
import Profile from './pages/Profile/Profile';

function App() {
  const token = useAppSelector((state)=>state.token.value)
  return (
    <div className="App">
      {token? 
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='*' element={<Err/>}></Route>
          </Routes>
        </Router>
      :
        <Router>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='verify' element={<Verify/>}/>
            <Route path='terms' element={<Terms/>}/>
            <Route path='*' element={<Err/>}></Route>
          </Routes>
        </Router>
      }
      <ToastContainer/>
    </div>
  )
}

export default App
