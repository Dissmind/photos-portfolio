import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import {MenuItems} from "../atoms/menu-items";
import {Container} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

export const MenuContainerStl = styled(Container)`
  width: 20.7407vh;
  height: 37.5vh;
  
  ${media.desktop} {
    width: 14vw;
    height: 25.3125vw;
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }  
`

const MenuStl = styled(Container)`
  position: relative;

  background-color: #133F2C;
  width: 19.4444vh;
  height: 36.1111vh;
  border-radius: 0.9259vh;
  padding-top: 4.6296vh;
  padding-left: 2.7777vh;

  ${LinkStl} {
    margin-top: 0.9259vh;
  }
  
  ${media.desktop} {
    width: 13.125vw;
    height: 24.375vw;
    border-radius: 0.625vw;
    padding-top: 3.125vw;
    padding-left: 1.875vw;

    ${LinkStl} {
      margin-top: 0.625vw;
    }
  }
`

const MenuBackgroundStl = styled.div`
  position: absolute;
  z-index: -1;
  top: 1.3888vh;
  left: 1.2962vh;

  width: 19.4444vh;
  height: 36.1111vh;
  background-color: #FFFFFF;
  border-radius: 0.9259vh;
  
  ${media.desktop} {
    top: 0.9375vw;
    left: 0.875vw;
    
    width: 13.125vw;
    height: 24.375vw;
    border-radius: 0.625vw;
  }
`


export const Menu = () => {

  const MenuItemsList = [
    {
      title: 'Обо мне',
      url: '/about',
      img: ''
    },
    {
      title: 'Портфолио',
      url: '/portfolio',
      img: ''
    },
    {
      title: 'Контакты',
      url: '/records',
      img: ''
    },
    {
      title: 'Цены',
      url: '/',
      img: ''
    }
  ]

  return(
    <MenuContainerStl>
      <MenuStl flex column>

        {
          MenuItemsList.map((Item) => (
            <LinkStl to={Item.url}>
              <MenuItems title={Item.title} />
            </LinkStl>
          ))
        }

        <MenuBackgroundStl/>
      </MenuStl>
    </MenuContainerStl>
  )
}

//TODO: рутер на "Цена"