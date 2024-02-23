import React, { useContext, useState } from 'react';
import { AppContext } from '../store/AppContext';

function CreateAccount() {
  const { state, dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    verifyPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Add check for duplicate email or username
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    // Dispatch an action or call an API to handle the registration
    // Reset form data if needed
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      verifyPassword: '',
    });
  };

  const cancelCreateAccount = () => {
    dispatch({ type: 'cancelCreateAccount' });
  };

  return (
    
    <div>
    <div className='full-overlay'></div>
      <div className='create-account-modal'>
        <div className='modal-top-bar'>
          <div>Create an iRecommend account</div>
          <div className='modal-close' onClick={cancelCreateAccount}>
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
          <br /><br />
          <button type="submit">Register</button>&nbsp;
          <button onClick={cancelCreateAccount}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
