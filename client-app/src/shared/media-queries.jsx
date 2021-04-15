import {css} from "styled-components";


// //Mobile styles
// @media screen and (max-width: 576px){
//
// }




export const MediaQueries = css`
  
  //Mobile 320px-576px
  @media screen and (min-width: 320px){
    html {
      font-size: 16px;
    }
  }

  //Tablet? 576px
  @media screen and (min-width: 576px){}
  
  //Tablet? 768px
  @media screen and (min-width: 768px){}
  
  //Tablet? 992px
  @media screen and (min-width: 992px){}

  //Desktop 1200-1399px styles
  @media screen and (min-width: 1200px){
    html{
      font-size: 12px;
    }
  }

  //Desktop 1400-1599px styles
  @media screen and (min-width: 1400px){
    html{
      font-size: 14px;
    }
  }

  //Desktop >1600px styles
  @media screen and (min-width: 1600px) {
    html{
      font-size: 16px;
    }
  }
  
`


//TODO: Media queries