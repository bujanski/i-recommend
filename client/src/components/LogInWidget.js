import React, { useState, useContext } from 'react';
import { AppContext } from '../store/AppContext';

function LogInWidget() {
  const { dispatch } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const startCreateAccount = () => {
    dispatch({ type: 'startCreateAccount' });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isInputValid = username.trim().length > 0 && password.trim().length > 0;
  const loginButtonStyle = {
    backgroundColor: isInputValid ? 'aliceblue' : '#366b8a',
    color: isInputValid ? '#2e5a74' : 'lightslategray',
    cursor: isInputValid ? 'pointer' : 'not-allowed',
  };

  const handleLoginClick = () => {
    dispatch({type: 'logInUser'})
    console.log('Login button clicked!');
  };

  return (
    <div className="credential-container">
      <div className="login-container">
        <div className="login-input">
          <div>username:</div>
          <div>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
        </div>
        <div className="login-input">
          <div>password:</div>
          <div>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <br />
          </div>
        </div>
        <div className="login-links">
          <div>
            <div className="login-links">lost my password</div>
          </div>
          <div>
            <div className="login-links" onClick={startCreateAccount}>
              create account
            </div>
          </div>
        </div>
      </div>
      <div className="login-button" style={loginButtonStyle} onClick={isInputValid ? handleLoginClick : null}>
        GO
      </div>
    </div>
  );
}

export default LogInWidget;
