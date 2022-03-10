/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import 'firebase/auth';
// import { useFirebaseApp } from 'reactfire';

export const Auth = function Auth() {
  return (
    <div>
      <div>
        <label htmlFor="email">Mail</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="passsword" id="password" />
        <button type="button">Start session</button>
      </div>
    </div>
  );
};

export default Auth;
