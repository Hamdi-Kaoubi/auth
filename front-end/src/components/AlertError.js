import React from 'react'
import { useSelector } from 'react-redux'
const AlertError = () => {
    const error=useSelector((state)=>state.ErrorReducer)
  return (
    <div>
    {error.map((el)=>alert(el.msg))}
    </div>
  )
}

export default AlertError