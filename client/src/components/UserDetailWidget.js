import React, {useContext} from 'react';
import {AppContext} from '../store/AppContext';

function UserDetailWidget() {
    const {state, dispatch} = useContext(AppContext);
    const {loggedInUsername} = state;
    const handleLogOut = () => {
        dispatch({type: 'logOutUser'})
    }


    return (
        <div className="user-details-container">
            <div>{loggedInUsername? `Hi, ${loggedInUsername}` : null}</div>
            <div className='login-links' onClick={handleLogOut}>Logout</div>
        </div>

    )
}

export default UserDetailWidget