import React, { useContext } from 'react'
import { AppContext } from '../store/AppContext'

function CreateAccount() {
    const {state, dispatch} = useContext(AppContext);

    const cancelCreateAccount = () => {
        dispatch({type: 'cancelCreateAccount'});
    }

    return (
        <div>
            <div className='create-account-modal'>
                CreateAccount <button onClick={cancelCreateAccount}>cancel</button>
            </div>
            
        </div>

    )
}

export default CreateAccount