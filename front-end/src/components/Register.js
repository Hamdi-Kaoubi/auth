import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../redux/action/AuthAction.js'
const Register = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleRegister=()=>{
        dispatch(register({email,password},navigate))
    }
  return (
    <div>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password'onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleRegister}>register</button>
    </div>
  )
}

export default Register