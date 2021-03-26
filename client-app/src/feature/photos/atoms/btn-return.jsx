import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";


import btnReturnIco from "../../../attachments/icon/btn-return.svg"

const BtnReturnStl = styled.div`
  width: 1.625rem;
  height: 3.8125rem;
  user-select: none;
  cursor: pointer;
`

const LinkStl = styled(NavLink)`
  &:link{
    text-decoration: none;
  }
`


export const BtnReturn = () => {
  return (
    <LinkStl to={'/portfolio'}>
      <BtnReturnStl as={"img"} src={btnReturnIco} />
    </LinkStl>
  )
}