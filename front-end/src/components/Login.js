import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/action/AuthAction.js'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleLogin=()=>{
        dispatch(login({email,password},navigate))
    }
  return (
    <div>
    <div>
    <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type='password'onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handleLogin}>login</button>
</div>
    </div>
  )
}

export default Login