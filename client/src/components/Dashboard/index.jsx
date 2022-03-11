import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

export const Dashboard = function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome!</h2>
      <Link to="../new">Register</Link>
      <Link to="../sign_in">Sign UP</Link>
    </div>
  );
};

export default Dashboard;
