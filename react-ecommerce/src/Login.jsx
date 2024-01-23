import React, { useState } from 'react';
import "./login.css";

const Login = () => {

  const [accountCreated, setAccountCreated] = useState(false);
  // Signup state
  const [signupUserInfo, setSignupUserInfo] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupUsername, setSignupUsername] = useState('');

  // Login state
  const [loginUserInfo, setLoginUserInfo] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginUsername, setLoginUsername] = useState('');

  const [isSignupMode, setIsSignupMode] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(null);

  const apiURLUser = 'https://twitter-clone-d2717-default-rtdb.firebaseio.com/users.json'; // Replace with your actual API URL

  const addUser = () => {
    if (signupUserInfo === '' || signupEmail === '' || signupUsername === '') {
      console.error('Input fields cannot be empty');
      return;
    }

    // Send a POST request to add a new user
    fetch(apiURLUser, {
      method: 'POST',
      body: JSON.stringify({ User: signupUserInfo, email: signupEmail, Userinfo: signupUsername }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data as needed
        console.log('User added:', data);
        // Optionally, update your React state or trigger a re-render
        setSignupUserInfo('');
        setSignupEmail('');
        setSignupUsername('');
        setAccountCreated(true);
      })
      .catch(error => console.error('Error adding user:', error));
  };

  const handleLogin = () => {
    // Fetch user data from the API
    fetch(apiURLUser)
      .then(response => response.json())
      .then(data => {
        // Check if the provided login information matches any existing user
        const userExists = Object.values(data).some(user => {
          return (
            user.Userinfo === loginUserInfo &&
            user.email === loginEmail &&
            user.User === loginUsername
          );
        });

        // Set login success based on whether the user exists
        setLoginSuccess(userExists);
      })
      .catch(error => console.error('Error fetching user data:', error));
  };

  return (
    <div className='Login'>
      <h2>{isSignupMode ? 'Signup' : 'Login'}</h2>
      {/* Render signup or login form based on the mode */}
      {isSignupMode ? (
        <>
          <label>Name:</label>
          <input type="text" value={signupUserInfo} onChange={(e) => setSignupUserInfo(e.target.value)} />

          <label>Email:</label>
          <input type="text" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />

          <button onClick={addUser}>Add User</button>
          {accountCreated && <p>Account created!</p>}
        </>
      ) : (
        <>
          <label>Name:</label>
          <input type="text" value={loginUserInfo} onChange={(e) => setLoginUserInfo(e.target.value)} />

          <label>Email:</label>
          <input type="text" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />

          <label>Password:</label>
          <input type="password" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />

          {/* <button onClick={handleLogin}>Login</button> */}
          {loginSuccess === true ? (
  <>
    <p>Login Successful</p>
    <p>Click the Shop button above to start Shopping</p>
  </>
) : (
  <button onClick={handleLogin}>Login</button>
)}


          {loginSuccess === false && <p>User not found!</p>}
        </>
      )}

      {/* Toggle between signup and login modes */}
      <button onClick={() => setIsSignupMode(!isSignupMode)}>
        Switch to {isSignupMode ? 'Login' : 'Signup'}
      </button>
    </div>
  );
};

export default Login;
