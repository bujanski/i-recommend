import React, { useContext, useState } from "react";
import { AppContext } from "../store/AppContext";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';

function CreateAccount() {
    const { state, dispatch } = useContext(AppContext);

    const logInNewUser = (userData) => {
        dispatch({ type: "loginUser", payload: userData });
    };

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        verifyPassword: "",
    });

    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setPasswordMismatch(false); // Reset password mismatch flag on any change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const { firstName, lastName, email, username, password, verifyPassword } = formData;
      
        // Check if passwords match
        if (password !== verifyPassword) {
          setPasswordMismatch(true);
          return; // Do not proceed with the submission if passwords do not match
        }
      
        try {
          const response = await axios.post("http://localhost:8000/users/newuser", {
            firstName,
            lastName,
            email,
            username,
            password,
          });
      
          // Check if the user was created successfully
          if (response.data.success) {
            // Clear form data and set state
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              username: "",
              password: "",
              verifyPassword: "",
            });
            setPasswordMismatch(false);
      
            // Extract user data from the token or response as needed
            const decodedToken = jwtDecode(response.data.token);
            localStorage.setItem("authToken", response.data.token);
            const userData = { username: decodedToken.username, userId: decodedToken.userId };
      
            // Log in the new user and perform any other actions needed
            logInNewUser(userData);
      
            // Optionally, perform any other actions after successful user creation
      
            // Close the create account form
            cancelCreateAccount();
          } else {
            // Handle unsuccessful user creation
            const { field, message } = response.data;
            if (field === "username" || field === "email") {
              console.error(`${field} conflict:`, message);
              // Display a user-friendly message to the user
              alert(`${field === "username" ? "Username" : "Email"} already exists. Please choose a different ${field}.`);
            } else {
              console.error("Conflict with existing data:", message);
              // Handle other conflicts as needed
            }
          }
        } catch (error) {
          console.error("Error creating user:", error.message);
          // Handle other errors as needed
        }
      };
      

    const cancelCreateAccount = () => {
        dispatch({ type: "cancelCreateAccount" });
    };

    return (
        <div>
            <div className="full-overlay"></div>
            <div className="create-account-modal">
                <div className="modal-top-bar">
                    <div>Create an iRecommend account</div>
                    <div className="modal-close" onClick={cancelCreateAccount}>
                        X
                    </div>
                </div>
                <form id="create-account-form" onSubmit={handleSubmit}>
                    First Name:
                    <br />
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Last Name:
                    <br />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Email:
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Username:
                    <br />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Password:
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    Verify Password:
                    <br />
                    <input
                        type="password"
                        name="verifyPassword"
                        value={formData.verifyPassword}
                        onChange={handleChange}
                        required
                    />
                    <div
                        id="password-discrepency"
                        style={{
                            display: passwordMismatch ? "inline" : "none",
                        }}
                    >
                        Passwords do not match
                    </div>
                    <br />
                    <br />
                    <button type="submit">Register</button>&nbsp;
                    <button onClick={cancelCreateAccount}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
