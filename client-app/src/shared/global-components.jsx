import React from "react";
import {createGlobalStyle} from "styled-components";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import LemonTuesday from "../attachments/font/Lemon Tuesday.woff2"
import PentaLight from "../attachments/font/PentaLight.woff2"
import Solena from "../attachments/font/Solena-Regular.woff2"

export default createGlobalStyle`
  
  //FONTS
  
  @font-face {
    font-family: 'Lemon Tuesday';
    src: local('Lemon Tuesday'), local('LemonTuesday'),
    url(${LemonTuesday}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PentaLight';
    src: local('Penta Light'), local('PentaLight'),
    url(${PentaLight}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Solena';
    src: local('Solena Regular'), local('SolenaRegular'), local('Solena'),
    url(${Solena}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  //RESET STYLES
  
  body {
    margin: 0;
  }
  
  
  //MEDIA QUERIES

  //Mobile 320px-576px
  @media screen and (min-width: 576px){}

  //Tablet 576px
  @media screen and (min-width: 576px){}
  
  //Desktop 1200-1439px styles
  @media screen and (min-width: 1200px){
    html {
      font-size: 12px;
    }
  }

  //Desktop 1440-1599px styles
  @media screen and (min-width: 1440px){
    html {
      font-size: 14.4px;
    }
  }

  //Desktop >1600px styles
  @media screen and (min-width: 1600px) {
    html {
      font-size: 16px;
    }
  }
`

//TODO: Media queries