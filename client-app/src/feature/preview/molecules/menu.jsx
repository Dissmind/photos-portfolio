import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import {MenuCard} from "./menu-card.mobile";
import {MenuItems} from "../atoms/menu-items";

const MenuStl = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #133F2C;
  width: 13.125rem;
  height: 24.375rem;
  border-radius: 0.625rem;
  padding-top: 3.125rem;
  padding-left: 1.875rem;

  //LinkStl
  a:not(:first-child){
    margin-top: 0.625rem;
  }

  //Mobile styles
  @media screen and (max-width: 576px){
    display: none;
  }
`

const MobileMenuStl = styled.div`
  display: none;

  //Mobile styles
  @media screen and (max-width: 576px){
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-top: 1.875rem;

    //LinkStl in MenuCard
    a:not(:first-child){
      margin-top: 0.625rem;
    }
  }
`

const MenuBackgroundStl = styled.div`
  position: absolute;
  z-index: -1;
  top: 0.9375rem;
  left: 0.875rem;

  width: 13.125rem;
  height: 24.375rem;
  background-color: #FFFFFF;
  border-radius: 0.625rem;
`

const WrapperStl = styled.div`
  width: 14rem;
  height: 25.3125rem;

  //Mobile styles
  @media screen and (max-width: 576px){
    width: auto;
    height: auto;
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
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
      title: 'Цены',
      url: '/',
      img: ''
    },
    {
      title: 'Контакты',
      url: '/records',
      img: ''
    }
  ]

  return(
    <WrapperStl>
      <MenuStl>
        {
          MenuItemsList.map((Item) => (
            <LinkStl to={Item.url}>
              <MenuItems title={Item.title} />
            </LinkStl>
          ))
        }

        <MenuBackgroundStl/>
      </MenuStl>

      <MobileMenuStl>
        {
          MenuItemsList.map((MenuItem) => (
            <MenuCard
              title={MenuItem.title}
              img={MenuItem.img}
              link={MenuItem.url}
            />
          ))
        }
      </MobileMenuStl>
    </WrapperStl>
  )
}

//TODO: рутер на "Цена"