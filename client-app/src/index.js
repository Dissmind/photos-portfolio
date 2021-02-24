import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Home} from "./feature/preview/pages/home";

import GlobalComponents from './shared/global-components'



const app = (
  <>
    <GlobalComponents />
    <Home />
  </>
)

ReactDOM.render(app, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
