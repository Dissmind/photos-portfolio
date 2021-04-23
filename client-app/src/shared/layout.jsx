import React from 'react'
import styled, {css} from 'styled-components'


export const Wrapper = styled.div``

export const Container = styled.div`
  ${props => props.limiter && css`
    width: 100%;
    max-width: 148.1481vmin;
  `}
  
  //Sticky Navbar
  ${props => props.sticky && css`
    position: sticky;
    top: 0;
    z-index: 3;
  `}
  
  
  /*  Flex layouts  */
  
  ${props => props.flex && css`
    display: flex;

    //Columns
    ${props => props.column && css`
      flex-direction: column;

      ${props => props.h100 && css`
        height: 100%;
        min-height: 100vh;
      `}
    `}

    //Rows
    ${props => props.row && css`
      flex-direction: row;
    `}

    //Other mods
    ${props => props.center && css`
      align-items: center;
      justify-content: center;
    `}
  `}
`