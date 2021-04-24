import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {GlobalStyle} from './shared/global-components'
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./redux/store";

import {Home} from "./feature/preview/desktop/pages/home";
import {About} from "./feature/about/desktop/pages/about";
import {Portfolio} from "./feature/portfolio/desktop/pages/portfolio";
import {Records} from "./feature/records/desktop/pages/records";
import {ThemeListItems} from "./feature/portfolio/desktop/molecules/theme-link-list";
import {Photos} from "./feature/photos/desktop/pages/photos";
import {PhotosTemp} from "./feature/photos/desktop/templates/photos-temp";


const app = (
  <Provider store={store}>
    <GlobalStyle />

    <BrowserRouter>
      <Route path={"/"} exact render={() => <Home />} />
      <Route path={"/about"} exact render={() => <About />} />
      <Route path={"/portfolio"} exact render={() => <Portfolio />} />

      {ThemeListItems.map((ThemeListItem) => (
        <Route path={`/portfolio/${ThemeListItem.theme.toLowerCase().split(' ').join('-')}`}
               exact render={() => <PhotosTemp />} />
      ))}

      <Route path={"/records"} exact render={() => <Records />} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
