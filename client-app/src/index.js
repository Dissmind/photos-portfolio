import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Home} from "./feature/preview/pages/home";
import {Photos} from "./feature/photos/pages/photos";


import GlobalComponents from './shared/global-components'
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer)

const app = (
  <>
    <GlobalComponents />
    <Photos />
  </>
)

const root = <Provider store={store}>{app}</Provider>

ReactDOM.render(root, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
