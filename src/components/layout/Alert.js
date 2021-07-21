import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext.js'

const Alert = () => {
    // Initialising the context
    const alertContext = useContext(AlertContext)
    // Destructuring
    const {alert} = alertContext

    return (
        alert !== null &&(
            <div className={`alert alert-${alert.text}`}>
                <i className='fas fa-info-circle'/>{ alert.msg}
            </div>
        )    
    )
}

export default Alert