import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_SIGNOUT } from './actionTypes';

export const loginRequest = () =>{
    return{
        type:USER_LOGIN_REQUEST
    }
}
export const loginSuccess = (token) =>{
    return{
        type:USER_LOGIN_SUCCESS,
        payload:token
    }
}
export const loginError = () =>{
    return{
        type:USER_LOGIN_ERROR
    }
}
export const userSignout = () =>{
    return{
        type:USER_SIGNOUT
    }
}