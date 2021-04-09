import React from 'react'
import styled from 'styled-components'
import {MenuItems} from "../atoms/menu-items";
import {BtnMore} from "../atoms/btn-more.mobile";

const MenuCardStl = styled.div`
  //display: none;

  //Mobile styles
  @media screen and (max-width: 576px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    width: 18.5rem;
    height: 9rem;
    overflow: hidden;
    padding-right: 0.9375rem;
    background-color: #133F2C;
    border-radius: 0.625rem 0 0 0.625rem;
  }
`

const ImageStl = styled.image`
  display: none;
  
  //Mobile styles
  @media screen and (max-width: 576px){
    //del
    background-color: bisque;
    //
    
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;

    //TODO: margin между картинкой и Подробнее ??
  }
`

const ColWrapperStl = styled.div`
  //Mobile styles
  @media screen and (max-width: 576px){
    display: flex;
    flex-direction: column;
  }
`


export const MenuCard = ({title, img, children}) => (
  <MenuCardStl>
    <ImageStl src={img} />

    <ColWrapperStl>
      <MenuItems title={title} />
      {/*<BtnMore />*/}{children}
    </ColWrapperStl>
  </MenuCardStl>
)