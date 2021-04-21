import React from 'react'
import styled from 'styled-components'
import {LinkItem} from "../atoms/link-item";
import {NavLink} from "react-router-dom";
import {Wrapper} from "../../../../shared/layout";
import {media} from "../../../../shared/media-queries";

const LinkListStl = styled.div`
  display: flex;
  flex-grow: 1;

  div:not(:last-child){
    margin-right: 6.4814vh;
  }
  
  ${media.desktop} {
    div:not(:last-child){
      margin-right: 4.375vw;
    }
  }
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`


export const LinkList = () => {

  const LinksArray = [
    {
      title: 'Главная',
      url: '/'
    },
    {
      title: 'Обо мне',
      url: '/about'
    },
    {
      title: 'Портфолио',
      url: '/portfolio'
    },
    {
      title: 'Контакты',
      url: '/records'
    },
    {
      title: 'Цены',
      url: '/'
    }
  ]

  return(
    <LinkListStl>

      {
        LinksArray.map((item) => (
          <Wrapper>
            <LinkStl to={item.url}>
              <LinkItem text={item.title} />
            </LinkStl>
          </Wrapper>
        ))
      }

    </LinkListStl>
  )
}

//TODO: роутер для "Цены"