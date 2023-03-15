import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../actionTypes/AuthTypes";

const initialState = {
    user:{}
}

const UserReducer= (state = initialState, { type, payload }) => {
switch (type) {
    case REGISTER:
    case LOGIN:
        localStorage.setItem('token',payload.token)
        return {...state,user:payload.user}
    case GET_CURRENT:
        return {...state,user:payload.user}
    case LOGOUT:
        localStorage.removeItem('token')
        return {...state,user:null}
    default:
        return state
}
}

export default UserReducer
