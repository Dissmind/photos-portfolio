import React from 'react'
import styled from 'styled-components'
import {Column, Container} from "../../../../shared/layout";

const NavbarContainer = styled(Container)`
  height: 6.481vh;
  background-color: #ccc;
`


export const HomeTemp = ({}) => {

  return (
    <>
      <Column>
        <NavbarContainer />
      </Column>
    </>
  )
}