import React, {useContext, useState} from 'react'
import AppTitle from './AppTitle'
import LogInWidget from './LogInWidget'
import TopNav from './TopNav'
import UserDetailWidget from './UserDetailWidget';
import {AppContext} from '../store/AppContext';
import TopSearch from './TopSearch';

function TopBar() {
    const {state, dispatch} = useContext(AppContext);
    const {userLoggedIn} = state;


    return (
        <div>
            <div id="top-bar-container">
                <AppTitle/> {userLoggedIn
                    ? <UserDetailWidget/>
                    : <LogInWidget/>}

            </div>
            <TopSearch />
            <div>
                {/* <TopNav/> */}
            </div>
        </div>

    )
}

export default TopBar