
import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_SIGNOUT } from './actionTypes';

const initialVal = {
    isAuth:false,
    username:'',
    token:'',
    isAuthLoading:false,
    isAuthError:false
}

export const authReducer = (state=initialVal,action) =>{
    const { type, payload } = action;
    switch(type){
        case USER_LOGIN_REQUEST:{
            return{...state,isAuthLoading:true}
        }
        case USER_LOGIN_SUCCESS:{
            return{...state,isAuthLoading:false,isAuth:true,token:payload.token,username:payload.first}
        }
        case USER_LOGIN_ERROR:{
            return{...state,isAuthError:true,isAuth:false,isAuthLoading:false}
        }
        case USER_SIGNOUT:{
            return initialVal
        }
        default:return state
    }
}