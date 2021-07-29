import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Input from './Binding';
import TimePicker from './TimePicker';


ReactDOM.render(
  <React.StrictMode>
    <TimePicker />,
    <App />,
    <Input />,
  </React.StrictMode>,
  document.getElementById('root')
);
