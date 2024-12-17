import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import signin from './signin'
import SignUp from './signup';
import Navi from './Navi';
import Main from './Main';
ReactDOM.render(
  <React.StrictMode>

    <Navi/>
  </React.StrictMode>,
  document.getElementById('root')
);