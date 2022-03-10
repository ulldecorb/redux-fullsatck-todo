import React from 'react';
import { useFirebaseApp } from 'reactfire';
import { Auth } from './components/Auth';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>
        <p>User: </p>
        <Auth />
      </header>
    </div>
  );
}

export default App;
