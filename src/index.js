import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';


const store = createStore(searchRobots)
// reducers 는 많아질 수 있음 


ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
    , document.getElementById('root'));


   // using provider instead of pass down store to <App store={store} /> 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//action
//reducer  
