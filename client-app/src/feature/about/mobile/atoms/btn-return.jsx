import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../../shared/layout";
import {NavLink} from "react-router-dom";

import ReturnIco from '../../../../attachments/icon/BtnReturnMobile.svg'

export const BtnReturnStl = styled(Container)`
  width: 104px;
  height: 100%;
`

const LinkStl = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  
  &:hover, &:link {
    text-decoration: none;
  }
`

const ArrowStl = styled.img`
  width: 32px;
  user-select: none;
`

const Description = styled.div`
  user-select: none;
  height: 100%;
  font-family: 'Lemon Tuesday', serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: #164C34;
`


export const BtnReturn = ({onHome, onPortfolio}) => {
  return (
    <BtnReturnStl flex>
      <LinkStl to={onHome ? '/' : onPortfolio ? '/portfolio' : null}>
        <ArrowStl src={ReturnIco} />
        <Description>Вернуться</Description>
      </LinkStl>
    </BtnReturnStl>
  )
}