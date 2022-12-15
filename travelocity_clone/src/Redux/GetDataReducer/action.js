import * as types from './actionTypes'
import axios from 'axios'

const getRequest = () => {
    return{
        type:types.GET_REQUEST
    }
}
const getSuccess = (payload) => {
    return{
        type:types.GET_SUCCESS,
        payload
    }
}
const getFailure = () => {
    return{
        type:types.GET_FAILURE
    }
}


const getData = (params) => (dispatch) => {
    dispatch(getRequest())
    return axios.get('http://localhost:8080/data', params)
            .then(r=>{
                dispatch(getSuccess(r.data))})
            .catch(e=>{
                dispatch(getFailure())
        })
}
export {getData}