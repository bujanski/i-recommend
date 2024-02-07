import React from 'react'
import AppTitle from './AppTitle'
import LogInWidget from './LogInWidget'
import TopNav from './TopNav'
import {AppContext, appData} from '../store/AppContext';
import {useReducer} from 'react';
import {appReducer} from '../reducers/appReducer'
import UserDetailWidget from './UserDetailWidget';

function TopBar() {
    const [state,
        dispatch] = useReducer(appReducer, appData);
    const {userLoggedIn} = appData;

    return (
        <div>
            <div id="top-bar-container">
                <AppTitle/>
                {userLoggedIn ? <UserDetailWidget /> : <LogInWidget />}

            </div>
            <div>
                <TopNav />
            </div>
        </div>

    )
}

export default TopBar