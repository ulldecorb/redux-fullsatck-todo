import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import auth from '../../firebase-congif';
import './register.css';

export const RegisterUser = function RegisterUser({ getUser }) {
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
      await getUser(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="register-user">
      <div>
        <h3>Register User</h3>
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

RegisterUser.propTypes = {
  getUser: PropTypes.func.isRequired
};

export default RegisterUser;
