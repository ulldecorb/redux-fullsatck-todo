import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import auth from '../../firebase-congif';

export const RegisterUser = function LoginError() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      setUser(await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ));
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="login-error">
      <div>
        <h3> Register User </h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button type="button" onClick={register}> Create User</button>
      </div>
    </section>
  );
};

export default RegisterUser;
