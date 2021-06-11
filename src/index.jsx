import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

$(".add").on('click', function() {
  $('.wrapper').toggleClass('wrapper-open');
  console.log('clicked')
});