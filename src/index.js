import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
