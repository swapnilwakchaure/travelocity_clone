import * as types from './actionTypes'

const initialState = {
    hotel : [],
    isLoading:false,
    isError:false
}


const reducer = (oldState=initialState, action) => {
    const {type, payload} = action
    switch(type){
        case types.GET_REQUEST:
            return {...oldState, isLoading:true}
        case types.GET_SUCCESS:
            return {...oldState, isLoading:false, hotel : payload}
        case types.GET_FAILURE:
            return {...oldState, isError:true}
        case types.ADD_REQUEST:
            return {...oldState}
        case types.ADD_SUCCESS:
            return {...oldState, payload}
        case types.ADD_FAILURE:
            return {...oldState, isError:true}
        default:
            return oldState;
    }
}
export {reducer}