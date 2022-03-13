import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './dashboard.css';

export const Dashboard = function Dashboard({ user }) {
  return (
    <div className="dashboard">
      {user
        ? (
          <h2>
            Welcome
            {' '}
            {user.email}
          </h2>
        )

        : (
          <>
            <h2>Welcome!</h2>
            <p>
              To acces content please
              {' '}
              <Link to="../sign_in">sign in</Link>
              {' '}
              or
              {' '}
              <Link to="../new">register</Link>
            </p>
          </>
        )}

    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.string.isRequired
};
export default Dashboard;
