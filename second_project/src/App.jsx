import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Shop from './pages/Shop/Shop'
import { Fragment } from 'react'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Container } from 'react-bootstrap'
import IsNotLoggedIn from './components/IsNotLoggedIn'
import IsLoggedIn from './components/IsLoggedIn'

function App() {

  return (
    <Fragment>
      <Container>
        <NavBar />
      </Container>

      <Routes>
        <Route path='/' element={<IsLoggedIn><Home /></IsLoggedIn>} />
        <Route path='/shop' element={<IsLoggedIn><Shop /></IsLoggedIn>} />
        <Route path='/cart' element={<IsLoggedIn><Cart /></IsLoggedIn>} />
        <Route path='/login' element={<IsNotLoggedIn><Login /></IsNotLoggedIn>} />
        <Route path='/register' element={<IsNotLoggedIn><Register /></IsNotLoggedIn>} />
      </Routes>

    </Fragment>
  )
}

export default App
