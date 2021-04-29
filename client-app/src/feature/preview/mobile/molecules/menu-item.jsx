import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {MenuItemTitle, MenuItemTitleStl} from "../atoms/menu-item-title";
import {BtnMore} from "../atoms/btn-more";

const MenuItemStl = styled(Container)`
  width: 92.5%;
  height: 144.5px;
  overflow: hidden;
  background-color: #133F2C;
  border-radius: 10px 0 0 10px;
`

const ImgContainerStl = styled(Container)`
  height: 100%;
  width: 50%;
`

const ImgStl = styled.img`
  object-fit: cover;
  user-select: none;
`

const TitleLinkContainerStl = styled(Container)`
  height: 100%;
  width: 50%;
  padding-bottom: 10px;
  
  ${MenuItemTitleStl} {
    margin-bottom: 10px;
  }
`


export const MenuItem = ({title, img, url}) => {
  return (
    <MenuItemStl flex center>
      <ImgContainerStl flex center>
        <ImgStl src={img} />
      </ImgContainerStl>

      <TitleLinkContainerStl flex column center>
        <MenuItemTitle title={title} />
        <BtnMore url={url} />
      </TitleLinkContainerStl>
    </MenuItemStl>
  )
}