import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Home} from "./feature/preview/pages/home";

import GlobalComponents from './shared/global-components'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer)

const app = (
  <>
    <GlobalComponents />
    <Home />
  </>
)

const root = (
  <Provider store={store}>
    <BrowserRouter>
      {app}
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(root, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
