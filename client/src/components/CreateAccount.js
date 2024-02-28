import React, { useContext, useState } from "react";
import { AppContext } from "../store/AppContext";
import axios from 'axios';

function CreateAccount() {
    const { state, dispatch } = useContext(AppContext);

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
    
            console.log(response.data);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
                verifyPassword: "",
            });
            setPasswordMismatch(false);
            cancelCreateAccount();
        } catch (error) {
            if (error.response.status === 409) {
                const { field } = error.response.data;
                // Check if the conflict is due to an existing username or email
                if (field === "username") {
                    console.error("Username already exists:", error.response.data);
                    // Display a user-friendly message to the user
                    alert("Username already exists. Please choose a different username.");
                } else if (field === "email") {
                    console.error("Email already exists:", error.response.data);
                    // Display a user-friendly message to the user
                    alert("Email already exists. Please use a different email address.");
                } else {
                    console.error("Conflict with existing data:", error.response.data);
                    // Handle other conflicts as needed
                }
            } else {
                console.error("Error creating user:", error.response.data);
                // Handle other errors as needed
            }
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
                    <div id="password-discrepency" style={{ display: passwordMismatch ? "inline" : "none" }}>Passwords do not match</div>
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
