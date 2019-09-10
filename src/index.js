import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';

import './style.css';

const $rootElement = document.getElementById('react-root');
ReactDOM.render(<App />, $rootElement);
