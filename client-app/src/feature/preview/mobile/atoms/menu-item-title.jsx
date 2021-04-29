import React from 'react'
import styled from 'styled-components'

export const MenuItemTitleStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #FFFFFF;
  user-select: none;
`


export const MenuItemTitle = ({title}) => {
  return (
    <MenuItemTitleStl>
      {title}
    </MenuItemTitleStl>
  )
}