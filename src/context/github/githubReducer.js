import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types.js'

// Reducer takes in state and action
export default (state, action)=>{
    switch (action.type){
        case SET_LOADING:
            // Default is FALSE. Return TRUE
            return {
                ...state,
                loading: true
            }
        case SEARCH_USER:
            // Include the loading into here as well
            return{
                ...state,
                users:action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return{
                ...state,
                users:[],
                loading: false
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                loading:false
            }
        default:
            return state;
    }
}