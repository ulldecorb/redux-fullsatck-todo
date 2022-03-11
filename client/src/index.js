import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const loadingMessage = () => 'Code is lava...';

ReactDOM.render(
  (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={loadingMessage}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
