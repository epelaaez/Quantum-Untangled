import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';

import App from './components/App/App.js';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
), document.getElementById('root'));