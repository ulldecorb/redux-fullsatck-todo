/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import './auth.css';

export const Auth = function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebaseApp();

  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  // const submit = () => {
  //   console.log(email, password);
  //   console.log(firebase);
  // };

  return (
    <div>
      <div className="auth-box">
        <label htmlFor="email">Mail</label>
        <input type="email" id="email" placeholder="email" onChange={(ev) => setEmail(ev.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
        <button type="button" onClick={submit}>Start session</button>
      </div>
    </div>
  );
};

export default Auth;
