import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.min.css';
import 'normalize.css';

import './assets/css/nes.min.css';
import './assets/css/index.css';

import App from './app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
