import React from "react";
import {createGlobalStyle} from "styled-components";
import {MediaQueries} from "./media-queries";
import {Fonts} from "./fonts";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


export const GlobalStyle = createGlobalStyle`
  
  // Import media queries
  ${MediaQueries}
  
  
  //Import fonts
  ${Fonts}
  
  //Reset styles
  body {
    margin: 0;
  }
`