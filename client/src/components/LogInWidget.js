import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../store/AppContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function LogInWidget() {
    const { dispatch } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setloginFailed] = useState(false);

    const startCreateAccount = () => {
        dispatch({ type: "startCreateAccount" });
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const loginUser = (userData) => {
        dispatch({ type: "loginUser", payload: userData });
    };

    const isInputValid =
        username.trim().length > 0 && password.trim().length > 0;
    const loginButtonStyle = {
        backgroundColor: isInputValid ? "aliceblue" : "#366b8a",
        color: isInputValid ? "#2e5a74" : "lightslategray",
        cursor: isInputValid ? "pointer" : "not-allowed",
    };

    const lostPassword = () => {
        alert("You lost your password? That's too bad. You should use a password manager.");
    }

    const handleLoginClick = async () => {
        try {
            // Make a POST request to the server using Axios
            const response = await axios.post(
                `http://localhost:8000/users/login`,
                {
                    username: username,
                    password: password,
                }
            );

            if (response.status === 201) {
                const { token } = response.data;
                const decodedToken = jwtDecode(response.data.token);
                
                setloginFailed(false);
                const userData = { userId: decodedToken.userId, username: username };

                localStorage.setItem("authToken", token);

                loginUser(userData);
                console.log("Login successful!", decodedToken.userId);
            } else {
                console.error("Login failed:", response.statusText);
            }
        } catch (error) {
            setloginFailed(true);
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter" && isInputValid) {
                handleLoginClick();
            }
        };

        // Add event listener for key press
        window.addEventListener("keydown", handleKeyPress);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [isInputValid]);

    return (
        <div className="credential-container">
            <div className="login-container">
                <div className="login-input">
                    <div>username:</div>
                    <div>
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                </div>
                <div className="login-input">
                    <div>password:</div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <br />
                    </div>
                </div>
                <div className="login-links">
                    <div>
                        <div className="login-links" onClick={lostPassword}>lost my password</div>
                    </div>
                    <div>
                        <div
                            className="login-links"
                            onClick={startCreateAccount}
                        >
                            create account
                        </div>
                    </div>
                </div>
                {loginFailed ? (
                    <div id="login-failed">
                        login failed: bad username or password
                    </div>
                ) : null}
            </div>
            <div
                className="login-button"
                style={loginButtonStyle}
                onClick={isInputValid ? handleLoginClick : null}
            >
                GO
            </div>
        </div>
    );
}

export default LogInWidget;
