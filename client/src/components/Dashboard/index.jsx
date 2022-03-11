import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = function Dashboard() {
  return (
    <div>
      <h2>Welcome!</h2>
      <Link to="../new">Register</Link>
      <Link to="../sign_in">Sign UP</Link>
    </div>
  );
};

export default Dashboard;
