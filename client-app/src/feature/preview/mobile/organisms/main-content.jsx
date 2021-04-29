import React from 'react'
import styled from 'styled-components'
import {MenuItemsList} from "../../page/home";
import {MenuItem} from "../molecules/menu-item";
import {Container} from "../../../../shared/layout";

const MainContentStl = styled(Container)`
  height: 100%;
  justify-content: space-between;
`


export const MainContent = ({}) => {
  return (
    <MainContentStl flex column>
      {
        MenuItemsList.map((item) => (
          <MenuItem
            title={item.title}
            img={item.img}
          />
        ))
      }
    </MainContentStl>
  )
}