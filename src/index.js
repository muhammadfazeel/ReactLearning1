import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'


import Practice from './Practice';
import Profile from './profile';
import Counter from './counter';
import Logged from './LogedIn_out';
import Message from'./messages';
import Simple from './simple';

ReactDOM.render(<div>
    <Profile />
    <Simple />
    <Practice />
    <Counter />
    <Logged />
    <Message />
    
</div> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
