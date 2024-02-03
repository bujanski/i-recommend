import React from 'react'

function LogInWidget() {
    return (
        <div className='credential-container'>
            <div className='login-container'>
                <div className='login-input'>
                    <div>
                        username:
                    </div>
                    <div>
                        <input type='text'></input>
                    </div>
                </div>
                <div className='login-input'>
                    <div>
                        password:
                    </div>
                    <div>
                        <input type='password'></input><br/>
                    </div>
                </div>
                <div className='login-help-links'>
                    <div>
                        <a href='#'>lost my password</a>
                    </div>
                    <div>
                        <a href='#'>create account</a>
                    </div>
                </div>
            </div>
            <div className='login-button'>
                GO
            </div>
        </div>
    )
}

export default LogInWidget