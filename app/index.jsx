import React from 'react';
import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './components/App.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ),
    document.getElementById('app')
  );
});
