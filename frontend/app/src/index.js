import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom'
import App from './main/App';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App}></Route>
    </BrowserRouter>, 
document.getElementById('root'));