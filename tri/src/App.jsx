import React from 'react'
import  './index.css'
import LoginFrom from './LoginFrom/LoginFrom'
import Register from './LoginFrom/Register/Register'
const App = () => {
  return (
    <div className='app'>
      <LoginFrom/>
      <Register/>
    </div>
  )
}

export default App