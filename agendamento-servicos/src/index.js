import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <User Provider>
    <App />
  </User Provider>,
  document.getElementById('root')
);
reportWebVitals();
