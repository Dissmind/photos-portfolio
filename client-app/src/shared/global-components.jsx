import React from "react";
import {createGlobalStyle} from "styled-components";
import {media} from "./media-queries";
import {Fonts} from "./fonts";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';


export const GlobalStyle = createGlobalStyle`
  
  // Import media queries
  ${media}
  
  
  //Import fonts
  ${Fonts}
  
  //Reset styles
  body {
    margin: 0;
  }
`