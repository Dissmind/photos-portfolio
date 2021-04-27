import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {media} from "../../../../shared/media-queries";
import {Wrapper} from "../../../../shared/layout";

import btnReturnIco from "../../../../attachments/icon/btn-return.svg"


export const BtnReturnStl = styled(Wrapper)`
  width: 2.4074vh;
  height: 5.6481vh;

  ${media.desktop} {
    width: 1.625vw;
    height: 3.8125vw;
  }
`

 const BtnReturnIcoStl = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: pointer;
`

const LinkStl = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  &:link{
    text-decoration: none;
  }
`


export const BtnReturn = () => {
  return (
    <BtnReturnStl>
      <LinkStl to={'/portfolio'}>
        <BtnReturnIcoStl src={btnReturnIco} />
      </LinkStl>
    </BtnReturnStl>
  )
}
