import React from 'react'
import { useContext } from 'react'
import { Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getDataLocal } from '../LocalStorage/usernamePassword';

export function PrivateRoute({children}) {
    localStorage.setItem('previousPage', window.location.pathname);
    console.log(window.location.pathname);
    let key = 'userDetails'
    let localData = getDataLocal(key)
    if(localData){
        return children
    }
    else{

        return <Navigate to='/login' />
    }
}