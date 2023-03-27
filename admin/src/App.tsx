import { useState } from 'react'
import './App.scss'
import Login from './pages/Login/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useAppSelector } from './app/hooks'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Stock from './pages/Stock/Stock'
import Status from './pages/Status/Status'
import Statistic from './pages/Statistic/Statistic'
import Add from './pages/Stock/Add/Add'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Flash from './pages/Stock/Flash/Flash'
import Manage from './pages/Stock/Manage/Manage'
function App() {
  const Auth = useAppSelector((state)=>state.token.value)
  
  return (
    <div className="App flex">
      {Auth? 
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/stock' element={<Stock/>}>
              <Route path='' element={<Home/>}/>
              <Route path='access' element={<Add/>}/>
              <Route path='flash' element={<Flash/>}/>
              <Route path='manage' element={<Manage/>}/>
            </Route>
            <Route path='/status' element={<Status/>}/>
            <Route path='/statistic' element={<Statistic/>}/>
          </Routes>
        </Router>
        :
        <Login/>
      }
      
      <ToastContainer/>
    </div>
  )
}

export default App
