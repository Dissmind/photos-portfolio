import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {GlobalStyle} from './shared/global-components'
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./redux/store";

import {Home} from "./feature/preview/desktop/pages/home";
import {About} from "./feature/about/desktop/pages/about";
import {Portfolio} from "./feature/portfolio/pages/portfolio";
import {Records} from "./feature/records/desktop/pages/records";
import {ThemeListItems} from "./feature/portfolio/molecules/theme-link-list";
import {Photos} from "./feature/photos/pages/photos";
import {RecordsTemp} from "./feature/records/desktop/templates/records-temp";


const app = (
  <Provider store={store}>
    <GlobalStyle />

    <BrowserRouter>
      <Route path={"/"} exact render={() => <Home />} />
      <Route path={"/about"} exact render={() => <About />} />



      <Route path={"/portfolio"} exact render={() => <Portfolio />} />

      {ThemeListItems.map((ThemeListItem) => (
        <Route path={`/portfolio/${ThemeListItem.theme.toLowerCase().split(' ').join('-')}`}
               exact render={() => <Photos />} />
      ))}

      <Route path={"/records"} exact render={() => <RecordsTemp />} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
