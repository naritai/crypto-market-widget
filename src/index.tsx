import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './scss/index.scss';
import 'antd/dist/antd.css';

const target = document.createElement('div');
document.body.appendChild(target);
ReactDOM.render(<App />, target);
