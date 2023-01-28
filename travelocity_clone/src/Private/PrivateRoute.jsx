import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getDataLocal } from '../LocalStorage/usernamePassword';

export function PrivateRoute({children}) {
    let key = 'userDetails'
    let localData = getDataLocal(key)
    if(localData){
        return children
    }
    else{

        return <Navigate to='/login' />
    }
}