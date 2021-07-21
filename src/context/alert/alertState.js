/** 20210721: Trying to do this myself */
import React, {useReducer} from 'react'
import AlertReducer from '../alert/alertReducer'
import AlertContext from '../alert/alertContext'

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types.js'

const AlertState = props => {
    // Global values
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // Set Alert
    const setAlert= (msg,type)=>{
        // this.setState({alert:{msg,type}})
        dispatch({
            type:SET_ALERT,
            payload:{msg,type}
        })
        // When setting timeout, null or zero everything else
        setTimeout(() => dispatch({type:REMOVE_ALERT}), 5000);
    }

    // Return the values
    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}

    </AlertContext.Provider>
}

export default AlertState;