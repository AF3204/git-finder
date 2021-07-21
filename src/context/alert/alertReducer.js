import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types.js'

// Reducer takes in state and action
export default (state, action)=>{
    switch (action.type){
        case SET_ALERT:
            // Since there is just the message, we return the payload
            return action.payload
        case REMOVE_ALERT:
            // Include the loading into here as well
            return null
        default:
            return state;
    }
}