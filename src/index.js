import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css.map';
import 'bootstrap/dist/css/bootstrap.min.css.map';
import 'bootstrap/dist/css/bootstrap.css.map';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Login from "./components/login";

ReactDOM.render(
<div>
      {/*<Login/>*/}
      <App/>
</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
