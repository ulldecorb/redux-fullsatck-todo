import React from 'react';
import { PropTypes } from 'prop-types';
import {
  signOut
} from 'firebase/auth';
import auth from '../../firebase-congif';

export const Header = function Header({ user }) {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <section className="header">
      <h1>App</h1>
      <div className="header__login">
        <h4> User Logged In: </h4>
        {user?.mail}

        <button type="button" onClick={logout}> Sign Out </button>
        user info
      </div>

    </section>
  );
};

Header.propTypes = {
  user: PropTypes.string.isRequired
};

export default Header;
