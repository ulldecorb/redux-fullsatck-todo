/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import 'firebase/auth';
// import { useFirebaseApp } from 'reactfire';

export const Auth = function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    console.log(email, password);
  };

  return (
    <div>
      <div>
        <label htmlFor="email">Mail</label>
        <input type="email" id="email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="passsword" id="password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
        <button type="button" onClick={submit}>Start session</button>
      </div>
    </div>
  );
};

export default Auth;
