import React, {useContext} from 'react';
import {AppContext} from '../store/AppContext';

function UserDetailWidget() {
    const {dispatch} = useContext(AppContext);
    const handleLogOut = () => {
        dispatch({type: 'logOutUser'})
    }


    return (
        <div className="user-details-container">
            <div>Username</div>
            <div className='login-links' onClick={handleLogOut}>Logout</div>
        </div>

    )
}

export default UserDetailWidget