import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import auth from '../../firebase-congif';

export const LoginUser = function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      setUser(await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ));
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <input
        type="text"
        placeholder="Email..."
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />

      <button type="button" onClick={login}> Login</button>
    </div>
  );
};

export default LoginUser;
