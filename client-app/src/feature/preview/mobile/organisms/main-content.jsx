import React from 'react'
import styled from 'styled-components'
import {MenuItemsList} from "../../page/home";
import {MenuItem} from "../molecules/menu-item";
import {Container} from "../../../../shared/layout";

const MainContentStl = styled(Container)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`


export const MainContent = ({}) => {
  return (
    <MainContentStl flex column>
      {
        MenuItemsList.map((item) => (
          <MenuItem
            title={item.title}
            url={item.url}
            img={item.img}
          />
        ))
      }
    </MainContentStl>
  )
}