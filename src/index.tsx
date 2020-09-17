import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const target = document.createElement('div');
document.body.appendChild(target);
ReactDOM.render(<App />, target);
