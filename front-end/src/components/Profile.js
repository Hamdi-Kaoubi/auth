import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { get_current, logout } from '../redux/action/AuthAction.js'

const Profile = () => {
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(get_current())
  }, [dispatch])
  const navigate=useNavigate()
  const user=useSelector((state)=>state.UserReducer.user)
  return (
    <div>
      {user.email}
      <button onClick={()=>dispatch(logout(),navigate('/login'))}>logout</button>
    </div>
  )
}

export default Profile