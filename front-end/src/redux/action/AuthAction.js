import axios from 'axios'
import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from '../actionTypes/AuthTypes'
import { alert_error } from './ErrorAction'
export const register=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/',data)
        dispatch({type:REGISTER,payload:res.data})
        navigate('/profile')
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(alert_error(element.msg))
        });
    }
}

export const login=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/login',data)
        dispatch({type:LOGIN,payload:res.data})
        navigate('/profile')
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(alert_error(element.msg))
        });
    }
}

export const get_current=()=>async(dispatch)=>{
    const config={
        headers:{token:localStorage.getItem('token')}
    }
    try {
        const res=await axios.get('/current',config)
        dispatch({type:GET_CURRENT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const logout=()=>{
    return ({type:LOGOUT})
}