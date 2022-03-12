import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Link
} from 'react-router-dom';
import {
  signOut
} from 'firebase/auth';
import auth from '../../firebase-congif';
import './header.css';

export const Header = function Header({ user }) {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <section className="header">
        <h1 className="header__title">APP TITLE</h1>
        <div className="header__login">
          {user
            ? (
              <>
                {`Welcome ${user.email}`}
                <button className="header__logout-button" type="button" onClick={logout}> Sign Out </button>
              </>
            )
            : (
              <>
                <Link className="header__links" to="../new">Register</Link>
                <Link className="header__links" to="../sign_in">Sign Up</Link>
              </>
            )}
        </div>
      </section>
      <div className="header__margin" />
    </>
  );
};

Header.propTypes = {
  user: PropTypes.string.isRequired
};

export default Header;
