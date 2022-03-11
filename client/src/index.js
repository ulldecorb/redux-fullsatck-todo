import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
  // Navigate
} from 'react-router-dom';
import { App } from './App';
import { LoginUser } from './components/LoginUser';
import { RegisterUser } from './components/RegisterUser';

const loadingMessage = () => 'Code is lava...';

ReactDOM.render(
  <Suspense fallback={loadingMessage}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </Router>
  </Suspense>,
  document.getElementById('root')
);
