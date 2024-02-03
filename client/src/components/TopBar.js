import React from 'react'
import AppTitle from './AppTitle'
import LogInWidget from './LogInWidget'
import TopNav from './TopNav'

function TopBar() {
    return (
        <div>
            <div id="top-bar-container">
                <AppTitle/>
                <LogInWidget/>

            </div>
            <div>
                <TopNav />
            </div>
        </div>

    )
}

export default TopBar