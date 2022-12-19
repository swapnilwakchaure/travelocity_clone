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
    return axios.get('https://hotel-api-jsonserver1.onrender.com/data', params)
            .then(r=>{
                dispatch(getSuccess(r.data))})
            .catch(e=>{
                dispatch(getFailure())
        })
}







const addRequest = () => {
    return{
        type:types.ADD_REQUEST
    }
}
const addSuccess = (payload) => {
    return{
        type:types.ADD_SUCCESS,
        payload
    }
}
const addFailure = () => {
    return{
        type:types.ADD_FAILURE
    }
}


const addData = (params) => (dispatch) => {
    dispatch(addRequest())
    return axios.post('https://hotel-api-jsonserver1.onrender.com/data', params)
            .then(r=>{
                dispatch(addSuccess(r.data))})
            .catch(e=>{
                dispatch(addFailure())
        })
}
export {getData, addData}