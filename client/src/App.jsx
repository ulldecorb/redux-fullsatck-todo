import React, { useState, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
  // Navigate
} from 'react-router-dom';
import {
  onAuthStateChanged
} from 'firebase/auth';
import auth from './firebase-congif';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LoginUser } from './components/LoginUser';
import { RegisterUser } from './components/RegisterUser';
import { Sidebar } from './components/Sidebar';

export const App = function App() {
  const [user, setUser] = useState({});

  const loadingMessage = () => 'Code is lava...';

  const getUser = (registerUser) => {
    setUser(registerUser);
  };

  // const handleLogin = () => {
  // }

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="App">
      <Suspense fallback={loadingMessage}>
        <Router>
          <Header user={user} />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/sign_in" element={<LoginUser />} />
            <Route path="/new" element={<RegisterUser getUser={getUser} />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
